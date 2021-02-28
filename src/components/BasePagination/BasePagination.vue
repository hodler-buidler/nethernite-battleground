<script>
export default {
  name: 'BasePagination',
  props: {
    value: { type: [Number, String], required: true },
    items: { type: Array, default: () => [] },
  },
  computed: {
    isPrevDisabled() {
      return Number(this.value) === 1;
    },

    isNextDisabled() {
      return !this.items || !this.items.length;
    },
  },
  methods: {
    onPrevClick() {
      this.$emit('input', this.value - 1);
    },

    onNextClick() {
      this.$emit('input', Number(this.value) + 1);
    },
  },
};
</script>

<template>
  <div>
    <slot
      :onPrevClick="onPrevClick"
      :onNextClick="onNextClick"
      :isPrevDisabled="isPrevDisabled"
      :isNextDisabled="isNextDisabled"
    >
      <v-btn :disabled="isPrevDisabled" @click="onPrevClick">
        <v-icon left>mdi-arrow-left</v-icon>
        {{ $t('prev') }}
      </v-btn>
      <v-btn :disabled="isNextDisabled" class="ml-2" @click="onNextClick">
        {{ $t('next') }}
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </slot>
  </div>
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "prev": "Prev",
    "next": "Next"
  },
  "ru": {
    "prev": "Назад",
    "next": "Вперёд"
  }
}
</i18n>
