<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchPackages',

  props: {
    value: { type: String, default: '' },
    perPage: { type: [String, Number], default: 10 },
    page: { type: [String, Number], default: 1 },
  },

  data: () => ({
    isLoading: false,
    searchInput: '',
    searchResults: [],
  }),

  watch: {
    value: {
      handler(newValue) {
        if (newValue !== this.searchInput) {
          this.setSearchInput(newValue);
        }
      },
      immediate: true,
    },

    searchInput(newValue) {
      this.$emit('input', newValue);
      this.updateSearchResults(newValue);
    },

    searchResults: {
      handler(newResult) {
        this.$emit('search-result', newResult);
      },
      deep: true,
    },

    isLoading(newValue) {
      this.$emit('loading', newValue);
    },

    perPage(oldValue, newValue) {
      if (oldValue === newValue) return;
      this.getSearchResults();
    },

    page(oldValue, newValue) {
      if (oldValue === newValue) return;
      this.getSearchResults();
    },
  },

  methods: {
    ...mapActions('packages', ['searchPackages']),

    updateSearchResults(userInput) {
      if (userInput?.length > 1) this.getSearchResults();
    },

    async getSearchResults() {
      try {
        this.setLoading(true);
        const packages = await this.searchPackages({
          text: this.searchInput,
          size: this.perPage,
          from: this.perPage * (this.page - 1),
        });

        const packagesOnly = packages.objects.map((item) => item.package);
        this.setSearchResults(packagesOnly);
      } catch (error) {
        this.setError();
      } finally {
        this.setLoading(false);
      }
    },

    setSearchResults(value) {
      this.searchResults = value;
    },

    setSearchInput(value) {
      this.searchInput = value;
    },

    setLoading(value) {
      this.isLoading = value;
    },
  },
};
</script>

<template>
  <v-text-field
    v-model="searchInput"
    :loading="isLoading"
    :placeholder="$t('search')"
    dense
    solo-inverted
  />
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "search": "Search packages"
  },
  "ru": {
    "search": "Ищите пакеты"
  }
}
</i18n>
