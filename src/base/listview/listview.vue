<template>
  <scroll class="listview"
          :data="data" ref="listview"
          :listenScroll="listenScroll"
          :probeType="probeType"
          @scroll="scroll">
    <ul>
      <li v-for="(group, index) in data" :key="index" class="list-group" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li @click="selectItem(item)" v-for="(item, index) in group.items" :key="index" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <!-- 将与currentIndex对应的index添加current类 -->
        <li v-for="(item, index) in shortcutList"
          :key="index"
          class="item"
          :class="{'current': currentIndex === index}"
          :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div class="loading-container" v-show="!data.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {getData} from 'common/js/dom'

const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 30

export default {
  // vue会为data()和props，还有computed中的值添加一个getter和setter用于观测他们的变化（有一点是为了数据绑定），
  // 这里不需要观测touch的变化，所以在created()中定义touch
  created() {
    this.touch = {}
    this.listenScroll = true
    this.listHeight = []
    this.probeType = 3
  },
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1
    }
  },
  props: {
    // 针对eslint报错作如下修改，default value for 'data' prop must be a function
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((group) => {
        // 这里使用substr(0, 1)是因为‘热门’有两个字
        return group.title.substr(0, 1)
      })
    },
    // 添加fixedTitle
    fixedTitle() {
      if (this.scrollY > 0) {
        return ''
      }
      return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    },
    onShortcutTouchStart(e) {
      // 因为设置里data-index扩充属性，所以下面这个可以获取到点击的元素的index
      let anchorIndex = getData(e.target, 'index')
      // 获取touchStart的位置信息并储存起来
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      // 左侧响应移动到对应位置
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      // | 0 与math.floor()是等价的
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    scroll(pos) {
      // pos是scroll组件传递过来的(watch会监听this.scrollY的变化)
      this.scrollY = pos.y
    },
    _scrollTo(index) {
      // 当点击字母表区域以外时，return掉
      if (!index && index !== 0) {
        return
      }
      // 对字母表滑动的边界情况做处理
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      // 只需获取到_scrollTo时的scrollY即可在点击或滑动右侧字母时增加高亮(因为watch会监听它的变化)
      this.scrollY = -this.listHeight[index]
      // 第二个参数表示是否需要滚动动画，0表示不需要动画，立即滚动到目标区域
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    },
    // 计算每个group[key]的高度
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      // 获取每个listGroup距离顶部的高度并存放到listHeight中
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data() {
      // 设置延时是因为数据变化到dom变化有一个延时
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY(newY) {
      const listHeight = this.listHeight
      // 当滚动到顶部，newY大于0
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动时
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        // 因为手指向上滑动的时候，Y值是一个负值，所以用-newY
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          // diff也做相应改变，并在watch中监听它的改变
          this.diff = height2 + newY
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    },
    diff(newVal) {
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      // 下面这个判断减少了dom操作
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0, ${fixedTop}px, 0)`
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
