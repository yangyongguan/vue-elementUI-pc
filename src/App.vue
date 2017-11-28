<template>
  <div id="app">
    <HeaderWrap></HeaderWrap>
    <div class="main-wrap">
      <router-view/>
    </div>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import HeaderWrap from 'components/header.vue'
import FooterWrap from 'components/footer.vue'
export default {
  name: 'app',
  components:{
    HeaderWrap,
    FooterWrap
  }
}
</script>
<style>
  .main-wrap{
    height: calc(100vh - 86px - 118px);
    min-height: 745px;
  }
</style>
