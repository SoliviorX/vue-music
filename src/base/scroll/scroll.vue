<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      // 当该组件没有值的时候
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      // listenScroll表示是否监听Bscroll
      if (this.listenScroll) {
        // 用me保留scroll实例的this
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
      // 如果支持上拉刷新
      if (this.pullup) {
        // scrollEnd表示滚动停止
        this.scroll.on('scrollEnd', () => {
          // 如果滚动到底部,emit一个事件
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            // 这里命名的scrollToEnd表示滚动到了底部
            this.$emit('scrollToEnd')
          }
        })
      }
      // scroll再滚动之前会派发一个beforeScrollStart事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    // 这里使用apply()是因为scrollTo()需要接受一些参数，把他绑定到this.scroll实例的scrollTo里
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    // 当值发生变化时，重新加载BScroll
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
