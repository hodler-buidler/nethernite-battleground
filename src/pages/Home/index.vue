<script>
import { mapActions } from 'vuex';
import SearchPackages from '@/components/SearchPackages/SearchPackages.vue';

export default {
  name: 'HomePage',

  components: { SearchPackages },

  props: {
    searchParam: { type: String, default: '' },
  },

  data: () => ({
    fetchedPackages: [],
    searchInput: '',
    isLoading: true,
  }),

  computed: {
    title() {
      if (this.isSearchInputProvided) {
        return `${this.$t('searched-packages')} (${
          this.fetchedPackages.length
        })`;
      }
      return this.$t('most-popular-packages');
    },

    isSearchInputProvided() {
      return !!this.searchInput || !!this.searchParam;
    },
  },

  watch: {
    searchParam: {
      handler(value) {
        if (this.searchParam !== this.searchInput) {
          this.setSearchInput(value);
        }
      },
      immediate: true,
    },

    isSearchInputProvided: {
      handler(value) {
        if (!value) this.getMostPopularPackages();
      },
      immediate: true,
    },
  },

  methods: {
    ...mapActions('packages', ['loadMostPopularPackages']),

    async getMostPopularPackages() {
      try {
        this.setLoading(true);
        this.fetchedPackages = await this.loadMostPopularPackages();
      } catch (error) {
        this.setError();
      } finally {
        this.setLoading(false);
      }
    },

    setLoading(value) {
      this.isLoading = value;
    },

    setSearchInput(value) {
      this.searchInput = value;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <SearchPackages
        v-model="searchInput"
        @search-started="() => {}"
        @search-completed="() => {}"
      />
    </div>

    <div>
      <div>
        <span class="text-h4">{{ title }}</span>
      </div>

      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "most-popular-packages": "Most popular packages",
    "searched-packages": "Search result"
  },
  "ru": {
    "most-popular-packages": "Самые популярные пакеты",
    "searched-packages": "Результат поиска"
  }
}
</i18n>
