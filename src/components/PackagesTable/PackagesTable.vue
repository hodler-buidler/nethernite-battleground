<script>
export default {
  name: 'PackagesTable',

  props: {
    packages: { type: Array, required: true },
    loading: { type: Boolean, default: false },
  },

  computed: {
    headers() {
      return [
        { text: this.$t('name'), value: 'name' },
        { text: this.$t('type'), value: 'type' },
        { text: this.$t('hits'), value: 'hits' },
      ];
    },
  },
};
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="packages"
    :loading="loading"
    hide-default-footer
    class="elevation-1"
  />
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "name": "Package name",
    "type": "Source type",
    "hits": "Downloads"
  },
  "ru": {
    "name": "Имя пакета",
    "type": "Источник",
    "hits": "Количество скачиваний"
  }
}
</i18n>
