<template lang="pug">
div.wrap
  div.left-contents
    slot(
      name="left"
    ) left-contents
  div.center-contents
    slot(
      name="center"
    ) center-contents
  div.right-contents
    slot(
      name="right"
    ) right-contents
</template>
<script>
export default {
  name: 'AppOrderListItemLayout'
}
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
}
.left-contents,
.right-contents {
  flex-basis: 48%;
}
.center-contents {
  flex-basis: 2%;
  text-align: center;
}
</style>
