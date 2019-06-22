<template lang="pug">
app-order-list-item-layout
  input.input(
    type="text"
    slot="left"
    v-model="localItemName"
  ) 
  span.operator(
    slot="center"
  ) ×
  input.input(
    type="text"
    slot="right"
    v-model="localItemPrice"
  )
</template>
<script>
import AppOrderListItemLayout from './AppOrderListItemLayout'
export default {
  name: 'AppOrderListItem',
  components: { AppOrderListItemLayout },
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemPrice: {
      type: String,
      required: true
    }
  },
  computed: {
    localItemName: {
      get() {
        return this.itemName
      },
      set(val) {
        const payload = {
          itemName: val,
          itemPrice: this.itemPrice
        }
        this.updateItem(payload)
      }
    },
    localItemPrice: {
      get() {
        return this.itemPrice
      },
      set(val) {
        const payload = {
          itemName: this.itemName,
          itemPrice: val
        }
        this.updateItem(payload)
      }
    }
  },
  methods: {
    updateItem(payload) {
      this.$emit('updated-order-item', payload)
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
