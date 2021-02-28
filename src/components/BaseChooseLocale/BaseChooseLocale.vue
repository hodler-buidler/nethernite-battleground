<script>
import LOCALES_DESCRIPTIONS from '@/config/locales/descriptions';

export default {
  name: 'BaseChooseLocale',

  data: () => ({
    LOCALES_DESCRIPTIONS,
    selectedLocaleIndex: undefined,
  }),

  computed: {
    currentLocale() {
      return LOCALES_DESCRIPTIONS[this.selectedLocaleIndex];
    },
  },

  created() {
    const currentLocale = this.getCurrentLocaleIndex();
    this.setSelectedLocaleIndex(currentLocale);
  },

  methods: {
    onNewLocaleSelected(localeIndex) {
      const localeType = LOCALES_DESCRIPTIONS[localeIndex].type;
      this.setLocale(localeType);
    },

    setLocale(locale) {
      this.$root.$i18n.locale = locale;
      this.$LocaleStorage.set(locale);
    },

    getCurrentLocaleIndex() {
      return LOCALES_DESCRIPTIONS.findIndex(
        (item) => item.type === this.$i18n.locale,
      );
    },

    setSelectedLocaleIndex(value) {
      this.selectedLocaleIndex = value;
    },
  },
};
</script>

<template>
  <v-menu open-on-hover offset-y>
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" text v-on="on">
        <ui-iconic-text position="left" offset="8px">
          <span>
            {{ $filters.capitalizeFirst(currentLocale.name) }}
          </span>
          <template #icon>
            <img
              :src="currentLocale.icon"
              :alt="currentLocale.type"
              class="locale-icon"
            />
          </template>
        </ui-iconic-text>
      </v-btn>
    </template>

    <v-list nav dense>
      <v-list-item-group
        v-model="selectedLocaleIndex"
        mandatory
        @change="onNewLocaleSelected"
      >
        <v-list-item v-for="locale in LOCALES_DESCRIPTIONS" :key="locale.type">
          <ui-iconic-text position="left" offset="8px">
            <span>
              {{ $filters.capitalizeFirst(locale.name) }}
            </span>
            <template #icon>
              <img :src="locale.icon" :alt="locale.type" class="locale-icon" />
            </template>
          </ui-iconic-text>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped>
.locale-icon {
  width: 24px;
  height: 24px;
}
</style>
