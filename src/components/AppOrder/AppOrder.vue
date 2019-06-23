<template lang="pug">
div#app
  app-order-list(
    v-for="orderList, listId in localOrderInfo"
    v-bind:key="listId"
    v-bind:items-count="orderList.length"
  )
    app-order-list-item(
      slot="item"
      slot-scope="{ itemId }"
      v-bind="{...orderList[itemId]}"
      v-on:updated-order-item="updateOrderItem($event,{ listId, itemId})"
    )
    button(
      slot="copy"
      v-on:click="copyOrderList(listId)"
    ) コピー
  button(
    v-on:click="addOrderList"
  ) 新規追加
</template>
<script>
import Model from './Model'
import AppOrderList from './partial/AppOrderList'
import AppOrderListItem from './partial/AppOrderListItem'

export default {
  name: 'AppOrder',
  components: { AppOrderList, AppOrderListItem },
  props: {
    orderInfo: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localOrderInfo: this.orderInfo
    }
  },
  methods: {
    updateOrderItem(payload, ids) {
      const { listId, itemId } = ids
      this.localOrderInfo[listId].splice(itemId, 1, payload)
    },
    copyOrderList(listId) {
      const copiedList = [...this.localOrderInfo[listId]]
      this.localOrderInfo = [...this.localOrderInfo, copiedList]
    },
    addOrderList() {
      const newList = [...Array(3)].map(() => {
        return Model
      })
      this.localOrderInfo = [...this.localOrderInfo, newList]
    }
  }
}
</script>
