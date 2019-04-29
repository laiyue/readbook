<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/home">
        <span class="mui-icon mui-icon-extra mui-icon-extra-lamp"></span>
        <span class="mui-tab-label">原创</span>
      </router-link>
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
        <span class="mui-tab-label">动态</span>
      </router-link>
        <router-link to="/shop" class="mui-tab-item">
           <span class="mui-icon mui-icon-home"></span>
           <span class="mui-tab-label">书店</span>
          </router-link>
       
      <router-link to="/PersonalCenter" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>

        <router-link to="/PersonalCenter" class="mui-tab-item">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">本地</span>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  background-color: #f7f9f8;
  font-size: 14px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* color: #68aab6; */
  background-color: #f7f9f8;
}
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
* {
  touch-action: pan-y;
}
</style>
<script>
import navBar from "./components/NavBar.vue";
export default {
  data() {
    return {};
  },
  methods: {
    goto() {
      this.router.push("apple");
    }
  },
  components: {
    navBar
  }
};
</script>
