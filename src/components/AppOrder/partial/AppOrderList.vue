<template lang="pug">
  div
    div(
      v-for="item, i in itemsCount"
    )
      slot(
        name="item"
        v-bind:itemId="i"
      ) item
    slot(
      name="copy"
    ) copy
</template>
<script>
export default {
  name: 'AppOrderList',
  props: {
    itemsCount: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss"></style>
