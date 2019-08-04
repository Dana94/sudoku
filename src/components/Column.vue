<template>
  <div class="column">{{col}}</div>
</template>

<script>
export default {
  props: ["col"]
};
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  align-items: center;
  justify-content: center;
  border: .5px solid;
}
</style>
