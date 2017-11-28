<template>
  <div class="left-bar fl">
    <ul class="menu">
      <router-link class="item" tag="li" to="/sysmager/sysmager1">
        日志管理
      </router-link>
      <router-link class="item" tag="li" to="/sysmager/sysmager2">
        系统管理
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss" scoped>
    .left-bar{
      width: 200px;
      background: #f6fbff;
      min-height: 745px;
      li{
        line-height: 50px;
        padding: 0 20px;
        cursor: pointer;
        &.active{
          color:#fff;
          background-color: #38a6fa;
          transition: all .3s;
        }
        &:hover{
          color:#fff;
          background-color: #38a6fa;
          transition: all .3s;
          opacity: 0.8;
        }
      }
    }
</style>
