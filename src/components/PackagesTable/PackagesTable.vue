<script>
export default {
  name: 'PackagesTable',

  props: {
    packages: { type: Array, required: true },
    loading: { type: Boolean, default: false },
    isSearchResult: { type: Boolean, default: false },
  },

  computed: {
    headers() {
      if (this.isSearchResult) {
        return [
          { text: this.$t('name'), value: 'name' },
          { text: this.$t('author'), value: 'author.name', sortable: false },
          { text: this.$t('version'), value: 'version', sortable: false },
          {
            text: this.$t('repository'),
            value: 'links.repository',
            sortable: false,
          },
        ];
      }

      return [
        { text: this.$t('name'), value: 'name' },
        { text: this.$t('type'), value: 'type' },
        { text: this.$t('hits'), value: 'hits' },
      ];
    },
  },

  methods: {
    onRowClick(item) {
      this.$emit('row-click', item.name);
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
    @click:row="onRowClick"
  />
</template>

<style lang="scss" scoped>
::v-deep tbody tr {
  cursor: pointer;
}
</style>

<i18n>
{
  "en": {
    "name": "Package name",
    "author": "Author",
    "version": "Version",
    "repository": "Repository",
    "type": "Source type",
    "hits": "Downloads"
  },
  "ru": {
    "name": "Имя пакета",
    "author": "Автор",
    "version": "Версия",
    "repository": "Репозиторий",
    "type": "Источник",
    "hits": "Количество скачиваний"
  }
}
</i18n>
