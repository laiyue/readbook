<template>
  <div class="component-bottom">
    <nav class="mui-bar mui-bar-tab">
      <!-- <a class="mui-tab-item mui-active" href="#tabbar"> -->
      <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
        <span class="mui-tab-label">原创</span>
      </router-link>
      <!-- </a> -->
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
        <span class="mui-tab-label">动态</span>
      </a>
      <!-- <a class="mui-tab-item" href="#tabbar-with-contact"> -->
      <router-link to="/Shop" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">书店</span>
      </router-link>

      <!-- </a> -->
      <!-- <a class="mui-tab-item" href="#tabbar-with-map"> -->
      <router-link to="/PersonalCenter" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>

      <!-- </a> -->
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
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
  }
};
</script>