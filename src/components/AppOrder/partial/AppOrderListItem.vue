<template lang="pug">
app-order-list-item-layout
  input.input(
    type="text"
    slot="left"
    v-model="itemName"
  ) 
  span.operator(
    slot="center"
  ) ×
  input.input(
    type="text"
    slot="right"
    v-model="itemPrice"
  )
</template>
<script>
import AppOrderListItemLayout from './AppOrderListItemLayout'
export default {
  name: 'AppOrderListItem',
  components: { AppOrderListItemLayout },
  model: {
    prop: 'propData',
    event: 'input'
  },
  props: {
    orderItem: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      itemName: this.orderItem.itemName,
      itemPrice: this.orderItem.itemPrice
    }
  },
  computed: {
    localOrderItem() {
      const itemName = this.itemName
      const itemPrice = this.itemPrice
      return { itemName, itemPrice }
    }
  },
  watch: {
    localOrderItem() {
      this.$emit('handle-input', {
        index: this.index,
        result: this.localOrderItem
      })
    }
  }
}
</script>
<style scoped lang="scss">
.input {
  width: 100%;
  box-sizing: border-box;
}
</style>
