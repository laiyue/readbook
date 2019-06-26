<template>
  <div id="app">
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
export default {
  data() {
    return {
      url: ""
    };
  },
  created() {
    //http://laiycoder.com:3000
    this.$router.baseurl='http://laiycoder.com:3000';
    //this.$router.baseurl='http://localhost:3000';
    //mui.init();
  },
  mounted() {
    mui.init();
    mui(".mui-scroll-wrapper")
      .scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
     var gallery = mui(".mui-slider");
    gallery.slider({
      interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
    });
     
  }
};
</script>
