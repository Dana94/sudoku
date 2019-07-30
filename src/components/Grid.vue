<template>
  <div id="grid">
    <div></div>
    <div></div>
    <div></div>

    <div></div>
    <div></div>
    <div></div>

    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
#grid {
  display: grid;
  grid-template: 200px 200px 200px / 200px 200px 200px;
  & > div {
    border: 5px solid;
  }
}
</style>
