<template>
  <div class="row">
    <column v-for="(col, y) in row" :key="y" :col="col"></column>
  </div>
</template>

<script>
import Column from "./Column.vue";
export default {
  props: ["row"],
  components: {
    Column
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
