<script>
import startCase from 'lodash/startCase';

export default {
  name: 'UiIconicText',
  props: {
    position: {
      type: String,
      default: 'right',
    },
    offset: {
      type: String,
      default: '4px',
    },
  },
  computed: {
    positionClass() {
      return `iconic-text__${this.position}`;
    },

    offsetStyle() {
      return { [`margin${startCase(this.position)}`]: this.offset };
    },
  },
};
</script>

<template>
  <div class="iconic-text" :class="[positionClass]">
    <div class="item" :style="offsetStyle">
      <slot />
    </div>
    <div class="item">
      <slot name="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iconic-text {
  display: inline-flex;

  &__left {
    flex-direction: row-reverse;
  }

  &__top {
    flex-direction: column-reverse;
    line-height: 0.8;
  }

  &__bottom {
    flex-direction: column;
    line-height: 0.8;
  }
}

.item {
  display: flex;
  align-items: center;
}
</style>
