<template>
  <div class="main-wrap">
    <router-view name="leftMenu"></router-view>
    <div class="content fl">
      <router-view name="body"></router-view>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'main'
    }
</script>
<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .main-wrap{
    width: 100%;
    .content{
      width: calc(100% - 200px);
      box-sizing: border-box;
      padding: 20px;
      float: right;
    }
  }

</style>
