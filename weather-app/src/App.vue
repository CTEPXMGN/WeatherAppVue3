<template>
  <div class="main">
    <div class="container">
      <ui-input class="input"/>
      <div class="block2">
        <div class="tab">
          <router-view/>
        </div>
        <div class="tab-links">
          <router-link class="tab-link" to="/">Сейчас</router-link>
          <router-link class="tab-link" to="/details">Детали</router-link>
          <router-link class="tab-link" to="/forecast">Прогноз</router-link>
        </div>
      </div>
      <favorites/>
      <div class="block4">4</div>

    </div>
  </div>
</template>

<script setup>
import Favorites from '@/components/favorites.vue';
import UiInput from '@/components/lib/ui-input.vue';

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
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: right;
  border: 1px solid black;
}
.tab-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
}
</style>