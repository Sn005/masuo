<template lang="pug">
div#app
  app-order-list(
    v-for="item, i in localOrderInfo"
    v-bind:key="i"
    v-bind:index="i"
    v-bind:orderList="item"
    v-on:handle-input="handleInput"
    v-on:handle-copy="handleCopy"
  )
  button(
    v-on:click="addList"
  ) 新規追加
</template>
<script>
import Model from './Model'
import AppOrderList from './partial/AppOrderList'

export default {
  name: 'AppOrder',
  components: { AppOrderList },
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
    handleInput(payload) {
      const { index, result } = payload
      this.localOrderInfo.splice(index, 1, result)
    },
    handleCopy(payload) {
      this.localOrderInfo = [...this.localOrderInfo, payload]
    },
    addList() {
      const newList = [...Array(3)].map(() => {
        return Model
      })
      this.localOrderInfo = [...this.localOrderInfo, newList]
    }
  }
}
</script>
