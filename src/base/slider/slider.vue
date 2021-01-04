<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot"
        :class="{active: currentPageIndex === index }"
        v-for="(item, index) in dots"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { addClass } from "common/js/dom"
import BScroll from "better-scroll"

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted() {
    // 也可以用this.$nextTick()
    // 浏览器的刷新通常是17ms 一次，所以这里用20ms
    setTimeout(() => {
      // 初始化宽度、dots、BScroll
      this._setSliderWidth()
      this._initDots()
      this._initSlider()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)

    window.addEventListener("resize", () => {
      if (!this.slider || !this.slider.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slider.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  },
  activated() {
    this.slider.enable()
    let pageIndex = this.slider.getCurrentPage().pageX
    this.slider.goToPage(pageIndex, 0, 0)
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  deactivated() {
    this.slider.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    // 当页面切走时，禁用掉轮播图的better-scroll
    this.slider.disable()
    clearTimeout(this.timer)
  },
  methods: {
    // 当bscroll监听的宽度发生变化，需要刷新bscroll
    refresh() {
      if (this.slider) {
        this._setSliderWidth(true)
        this.slider.refresh()
      }
    },
    // 初始化宽度
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, "slider-item")
        child.style.width = sliderWidth + "px"
        width += sliderWidth
      }
      // 如果是循环轮播，左右各加一个sliderWidth
      if (this.loop && !isResize) {
        // 已经初始化了，再改变窗口大小，setSliderWidth时，宽度不重复加2
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + "px"
    },
    // 初始化BScroll
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })

      this.slider.on("scrollEnd", this._onScrollEnd)

      this.slider.on("touchend", () => {
        if (this.autoPlay) {
          this._play()
        }
      })

      this.slider.on("beforeScrollStart", () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    _onScrollEnd() {
      let pageIndex = this.slider.getCurrentPage().pageX
      if (this.loop) {
        pageIndex -= 1
      }
      this.currentPageIndex = pageIndex
      // 在scrollend的时候，滚动到下一个
      if (this.autoPlay) {
        this._play()
      }
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _play() {
      // 先把历史timer清空
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'

.slider {
  min-height: 1px
  position relative
  .slider-group {
    position: relative
    overflow: hidden
    white-space: nowrap

    .slider-item {
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center

      a {
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
      }

      img {
        display: block
        width: 100%
      }
    }
  }

  .dots {
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    transform: translateZ(1px)
    text-align: center
    font-size: 0

    .dot {
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background: $color-text-l

      &.active {
        width: 20px
        border-radius: 5px
        background: $color-text-ll
      }
    }
  }
}
</style>
