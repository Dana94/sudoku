<template>
  <div id="board">

  </div>
</template>

<script>
import Grid from './Grid.vue';

export default {
  data () {
    return {

    }
  },
  components: {
    Grid
  }
}
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
