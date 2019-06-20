import Vue from 'vue'
import AppOrder from '@/components/AppOrder/AppOrder.vue'

Vue.config.productionTip = false

const orderInfo = [
  [
    {
      itemName: 'sample1',
      itemPrice: ''
    },
    {
      itemName: 'sample2',
      itemPrice: ''
    },
    {
      itemName: 'sample3',
      itemPrice: ''
    }
  ]
]
new Vue({
  render: h => h(AppOrder, { props: { orderInfo } })
}).$mount('#app')
