<template>
  <div class="item-list">
    <ul>
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @click="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data () {
    return {
      firstLetterOffsetTop: 0,
      lastLetterOffsetTop: 0,
      letterLineHeight: 0,
      lastLetter: '',
      timer: null
    };
  },
  methods: {
    handleClick (e) {
      this.$emit('letterChange', e.target.innerText);
    },
    handleTouchStart (e) {
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY;
        if (touchY <= this.firstLetterOffsetTop || touchY > this.lastLetterOffsetTop) {
          return;
        }
        const index = Math.floor((touchY - this.firstLetterOffsetTop) / this.letterLineHeight);
        const currentLetter = this.letters[index];
        if (this.lastLetter !== currentLetter) {
          this.lastLetter = currentLetter;
          this.$emit('letterChange', this.letters[index]);
        }
      }, 8);
    },
    handleTouchEnd (e) {
    }
  },
  updated () {
    const topLetter = this.$refs[this.letters[0]][0];
    const lastLetter = this.$refs[this.letters[this.letters.length - 1]][0];
    this.firstLetterOffsetTop = topLetter.offsetTop;
    this.lastLetterOffsetTop = lastLetter.offsetTop;
    this.letterLineHeight = topLetter.offsetHeight;
  }
};
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  .item-list
    display flex
    flex-direction column
    justify-content center
    position: absolute;
    top 0
    right 0
    bottom 0
    width .4rem
    height 100%
    .item
      line-height .4rem
      color $bgColor
      text-align center
</style>
