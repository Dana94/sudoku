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
.square {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
