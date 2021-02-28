<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import TheFooter from '@/components/TheFooter/TheFooter.vue';

export default {
  name: 'MainLayout',
  components: { TheHeader, TheFooter },
};
</script>

<template>
  <div>
    <TheHeader />
    <div class="content">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.content {
  @extend %container;
  padding-top: 40px;
  padding-bottom: 80px;
}
</style>
