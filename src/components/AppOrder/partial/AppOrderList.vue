<template lang="pug">
  div
    app-order-list-item(
      v-for="item, i in orderList"
      v-bind:key="i"
      v-bind:index="i"
      v-bind:orderItem="item"
      v-on:handle-input="handleInput"
    )
    button(
      v-on:click="handleCopy"
      name="コピー"
    ) コピー
</template>
<script>
import AppOrderListItem from './AppOrderListItem'
export default {
  name: 'AppOrderList',
  components: {
    AppOrderListItem
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    orderList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleInput(payload) {
      const {index, result} = payload
      this.$emit('handle-input', {
        index: this.index,
        result:this.orderList.map((v, i) => i === index ? result: v)
      })
    },
    handleCopy() {
      this.$emit('handle-copy', this.orderList)
    }
  }
}
</script>
<style scoped lang="scss"></style>
