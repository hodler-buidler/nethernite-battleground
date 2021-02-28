<script>
import { AUTHOR_GITHUB_ACCOUNT } from '@/config/general';

export default {
  name: 'TheFooter',
  data: () => ({
    AUTHOR_GITHUB_ACCOUNT,
  }),
};
</script>

<template>
  <v-footer fixed>
    <div class="footer-content text-center">
      <span>{{ $t('created-by') }} (28.02.2021) - &nbsp;</span>
      <span>
        <a :href="AUTHOR_GITHUB_ACCOUNT" target="_blank">Github</a>
      </span>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer-content {
  @extend %container;
}
</style>

<i18n>
{
  "en": {
    "created-by": "Developed by Nikita Golubev"
  },
  "ru": {
    "created-by": "Разработано Никитой Голубевым"
  }
}
</i18n>
