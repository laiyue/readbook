<template>
  <div class="component-bottom">
   <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" @click="gotoPage" href="javascript:;">
        <span data-url="home" class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
        <span class="mui-tab-label">原创</span>
      </a>
      <a class="mui-tab-item" @click="gotoPage"  >
        <span data-url="topic" class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
        <span class="mui-tab-label">动态</span>
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
        <span data-url="ReadBookDetail" class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">本地</span>
      </a>
    </nav>
  </div>
</template>
<style>
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
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoPage(e) {
      this.url = e.target.dataset.url;
     this.$router.push({ path: this.url });
    }
  }
};
</script>
