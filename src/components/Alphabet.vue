<template>
  <ul>
    <li
      v-for="letter in letters"
      :key="letter"
      :ref="letter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleJump"
    >{{ letter }}</li>
  </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: 'Alphabet',

  props: {
    cities: Object,
  },

  data() {
    return {
      touchStatus: false,
      startY: 0,
      letterHeight: 0,
      timer: null,
    }
  },

  computed: {
    letters() {
      return Object.keys(this.cities)
    },
  },

  updated() {
    const refA = this.$refs['A'][0]
    this.startY = refA.getBoundingClientRect().top
    this.letterHeight = refA.offsetHeight
  },

  methods: {
    handleJump(e) {
      this.$emit('listJump', e.target.textContent)
    },

    handleTouchStart() {
      this.touchStatus = true
    },

    handleTouchMove(e) {
      if (this.touchStatus) {
        if (!this.timer) { // 节流
          this.timer = setTimeout(() => {
            this.timer = null

            const distance = e.touches[0].clientY - this.startY
            const index = Math.floor(distance / this.letterHeight)

            if (index >= 0 && index < this.letters.length) {
              this.$emit('listJump', this.letters[index])
            }
          }, 64)
        }
      }
    },

    handleTouchEnd() {
      this.touchStatus = false
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  right: 0;
  top: 21vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1vw;
  li {
    text-align: center;
    list-style: none;
  }
}
</style>
