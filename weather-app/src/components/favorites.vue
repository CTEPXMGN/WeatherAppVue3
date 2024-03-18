<template>
  <div class="favorite">
    <ui-title class="favorite__title">Избранное:</ui-title>
  </div>
</template>

<script setup>
import UiTitle from './lib/ui-title.vue';
</script>

<style lang="scss" scoped>
.favorite {
  display: flex;
  align-items: center;
  padding-left: 18px;
  border: 1px solid black;

  &__title {
    font-size: 24px;
  }
}
</style>