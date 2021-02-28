<script>
import { BRAND_NAME } from '@/config/general';
import BaseChooseLocale from '@/components/BaseChooseLocale/BaseChooseLocale.vue';

export default {
  name: 'TheHeader',
  components: { BaseChooseLocale },

  data: () => ({
    BRAND_NAME,
  }),
};
</script>

<template>
  <v-app-bar dense>
    <div class="navbar">
      <div>
        <router-link :to="{ name: 'home' }" class="brand-link">
          <div class="brand-name">
            <span
              class="text-body-2 text-md-h6 font-weight-regular d-none d-sm-block"
            >
              {{ $t('brand-name', { name: BRAND_NAME }) }}
            </span>
            <span class="d-block d-sm-none">
              {{ BRAND_NAME }}
            </span>
          </div>
        </router-link>
      </div>
      <div>
        <BaseChooseLocale />
      </div>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.navbar {
  @extend %container;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-name {
  transition: 0.2s all;

  &:hover {
    color: $attention;
  }
}
</style>

<i18n>
{
  "en": {
    "brand-name": "{name} - explore packages"
  },
  "ru": {
    "brand-name": "{name} - исследуйте пакеты"
  }
}
</i18n>
