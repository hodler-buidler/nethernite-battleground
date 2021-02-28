<script>
import TheNotificationsDisplay from '@/components/TheNotificationsDisplay/TheNotificationsDisplay.vue';

export default {
  name: 'App',
  components: { TheNotificationsDisplay },
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
    <TheNotificationsDisplay />
  </v-app>
</template>
