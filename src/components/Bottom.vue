<template>
  <div class="component-bottom">
   <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" @click="gotoPage" href="javascript:;">
        <span data-url="home" class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
        <span class="mui-tab-label">原创</span>
      </a>
      <a class="mui-tab-item" @click="gotoPage"  >
        <span data-url="ShoppingCart" class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" @click="gotoPage"  href="javascript:;">
        <span class="mui-icon mui-icon-home" data-url="shop"></span>
        <span class="mui-tab-label">书店</span>
      </a>
      <a href="javascript:;" @click="gotoPage"  class="mui-tab-item">
        <span data-url="PersonalCenter" class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </a>
      <a href="javascript:;" @click="gotoPage"  class="mui-tab-item">
        <span data-url="ShoppingCart" class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">本地</span>
      </a>
    </nav>
  </div>
</template>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
 .component-bottom .mui-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height: 44px;
    padding-right: 0px;
    padding-left: 0px;
    border-bottom: 0;
    background-color: #f7f7f7;
    box-shadow: none;
    -webkit-box-shadow:none;
    /* -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85); */
    /* box-shadow: 0 0 1px rgba(0, 0, 0, .85); */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>
<script>
export default {
  data() {
    return {
      url:""
    };
  },
  methods: {
    gotoPage(e) {
      this.url = e.target.dataset.url;
     this.$router.push({ path: this.url });
    }
  }
};
</script>
