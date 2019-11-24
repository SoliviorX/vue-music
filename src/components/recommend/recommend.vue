<template>
  <div class="recommend" ref="recommend">
    <!-- <scroll ref="scroll" class="recommend-content" :data="discList"> -->
      <div>
        <!-- 加v-if，因为要确保recommends有值再去加载slider组件，不然可能还在请求接口就去加载slider，会出bug -->
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item,index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <!-- <ul>
            <li @click="selectItem(item)" v-for="(item,index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul> -->
        </div>
      </div>
      <!-- <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div> -->
    <!-- </scroll> -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  // import Loading from 'base/loading/loading'
  // import Scroll from 'base/scroll/scroll'
  import { getRecommend } from 'api/recommend'
  // import { playlistMixin } from 'common/js/mixin'
  import { ERR_OK } from 'api/config'
  // import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      loadImage () {
        // if (!this.checkloaded) {
        //   this.checkloaded = true
        //   setTimeout(() => {
        //     this.$refs.scroll.refresh()
        //   }, 20)
        // }
      },
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
