<template>
  <div id="board">
    <square v-for="(square, x) in board" :key="x" :square="square"></square>
  </div>
</template>

<script>
import Square from "./Square.vue";

export default {
  computed: {
    board() {
      return this.$store.getters.createBoard;
    }
  },
  components: {
    Square
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
