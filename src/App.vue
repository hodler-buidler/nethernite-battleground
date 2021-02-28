<script>
export default {
  name: 'App',
  head: {
    title: 'Main',
    titleTemplate: `%s | Explore packagies`,
  },
  created() {
    this.initCurrentLocale();
  },
  methods: {
    initCurrentLocale() {
      const savedLocale = this.$LocaleStorage.get();
      if (savedLocale) {
        this.$root.$i18n.locale = savedLocale;
      }
    },
  },
};
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>
