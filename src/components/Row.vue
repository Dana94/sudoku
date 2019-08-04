<template>
  <div class="row">
    row
    <!-- <column v-for="(col, y) in row" :key="y" :col="col"></column> -->
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

<style>
</style>
