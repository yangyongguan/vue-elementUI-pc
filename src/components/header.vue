<template>
    <div class="header-wrap">
      <div class="top"></div>
      <div class="bottom">
        <ul class="menu">
          <router-link class="item" tag="li" to="/home">
            首页
          </router-link>
          <router-link class="item" tag="li" to="/sysmager">
            系统管理
          </router-link>
          <router-link class="item" tag="li" to="/page2">
            内容管理
          </router-link>
          <router-link class="item" tag="li" to="/page3">
            组件封装
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script type="text/javascript">
  export default {
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/variable";
  @import "~assets/css/mixin";
  .header-wrap{
    width: 100%;
    height: 118px;
    line-height: 40px;
    background-color: #333;
    .top{
      height: 72px;
      background-color: #00bdff;
    }
    .bottom{
      background: -webkit-gradient(linear,0 0,right 0,from(#304fea),to(rgba(22,164,228,.8)))!important;
      color: #fff;
      padding: 0 94px;
      width: calc(100% - 2 * 94px);
    }
    .menu li{
      float: left;
      width: 140px;
      line-height: 46px;
      font-size: 16px;
      color: #fff;
    }
    ul{
      width: 100%;
      display: flex;
      li{
        color: $cl-txt-hl;
        cursor: pointer;
        text-align: center;
        &.active{
          color: $cl-txt-hl;
          background-color: #304fea;
          transition: all .3s;
        }
        &:hover{
          color: $cl-txt-hl;
        }
      }
    }

  }

</style>

