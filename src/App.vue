<template>
  <div id="app">
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Board
  },
  created() {
    this.$store.dispatch('initBoard');
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  justify-content: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
