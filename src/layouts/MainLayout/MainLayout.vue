<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';

export default {
  name: 'MainLayout',
  components: { TheHeader },
};
</script>

<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
