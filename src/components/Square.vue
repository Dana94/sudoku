<template>
  <div class="square">
    <row v-for="(row, x) in square" :key="x" :row="row"></row>
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  props: ['square'],
  components: {
    Row
  }
};
</script>

<style lang="scss" scoped>
#board {
  display: grid;
  grid-template: 200px 200px 200px / 200px 200px 200px;
  & > div {
    border: 5px solid;
  }
}
</style>
