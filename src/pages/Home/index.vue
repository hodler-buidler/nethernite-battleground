<script>
import { mapActions } from 'vuex';
import SearchPackages from '@/components/SearchPackages/SearchPackages.vue';
import PackagesTable from '@/components/PackagesTable/PackagesTable.vue';
import BasePagination from '@/components/BasePagination/BasePagination.vue';

export default {
  name: 'HomePage',

  components: {
    SearchPackages,
    PackagesTable,
    BasePagination,
  },

  props: {
    searchParam: { type: String, default: '' },
    limit: { type: [String, Number], default: 10 },
    page: { type: [String, Number], default: 1 },
  },

  data: () => ({
    packages: [],
    searchInput: '',
    isLoading: true,
    currentPage: 1,
  }),

  computed: {
    title() {
      if (this.isSearchInputProvided) {
        return this.$t('searched-packages');
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
        if (value !== this.searchInput) {
          this.setSearchInput(value);
        }
      },
      immediate: true,
    },

    page: {
      handler(value) {
        if (value !== this.currentPage) {
          this.setCurrentPage(value);
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
        this.packages = await this.loadMostPopularPackages({
          limit: this.limit,
          page: this.currentPage,
        });
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

    setCurrentPage(value) {
      this.currentPage = value;
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

    <div class="packages-display">
      <div class="results-header packages-display__header">
        <div>
          <span class="text-h4">{{ title }}</span>
        </div>
        <div>
          <BasePagination v-model="currentPage" :items="packages" />
        </div>
      </div>

      <div>
        <PackagesTable :packages="packages" :loading="isLoading" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.packages-display {
  &__header {
    margin-bottom: 18px;
  }
}

.results-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

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
