<template>
  <div class="main">
    <div class="container">
      <ui-input class="input"/>
      <div class="block2">
        <div class="tab">2</div>
        <div class="tab-links">
          <div class="tab-link">Сейчас</div>
          <div class="tab-link">Детали</div>
          <div class="tab-link">Прогноз</div>
        </div>
      </div>
      <!-- <div class="block3">Избранное</div> -->
      <favorites/>
      <div class="block4">4</div>

    </div>
  </div>
</template>

<script setup>
import Favorites from './components/favorites.vue';
import UiInput from './components/lib/ui-input.vue';

</script>

<style lang="scss" scoped>
.main {
  padding: 15px;
  margin: 0 auto;
  display: flex;
  background-color: rgba(253, 212, 188, 0.5);
  border-radius: 10px;
  color: black;
}
.container {
  width: 600px;
  height: 434px;
  border: 1px solid black;
  margin: auto;
  background-color: rgba(250, 236, 218, 0.836);
  display: grid;
  grid-template-columns: 100px 100px 100px 1fr;
  grid-template-rows: 45px 60px 1fr 45px;
}
.input {
  border: 1px solid black;
  grid-column: span 4;
  grid-row: span 1;
}
.block2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid black;
  grid-column: span 3;
  grid-row: span 3;
}
.block3 {
  border: 1px solid black;
  grid-column: span 1;
  grid-row: span 1;
}
.block4 {
  border: 1px solid black;
  grid-column: span 1;
  grid-row: span 2;
}
.tab {
  height: 100%;
  border: 1px solid black;
}
.tab-links {
  height: 45px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
}
.tab-link {
  width: 100%;
  border: 1px solid black;
}
</style>