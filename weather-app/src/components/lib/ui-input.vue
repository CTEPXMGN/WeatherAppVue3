<template>
  <div class="input-wrapper">
    <input type="text" placeholder="Введите название города" class="input__control">
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.input {
  &-wrapper {
    box-sizing: border-box;
    width: 100%;

  }

  &__control {
    width: 100%;
    height: 100%;

    background: none;
    border: none;
    outline: none;

    margin-left: 15px;
    line-height: 21px;
    font-weight: 400;
    font-size: 18px;
    color: #000;

  }
}

</style>