<template>
  <div id="board">
    <row v-for="(row, x) in board" :key="x"></row>
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  computed: {
    board() {
      return this.$store.getters.createBoard;
    }
  },
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

