<template>
  <div class="app-navbar">
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item">精选</a>
          <a class="mui-control-item">悬疑</a>
          <a class="mui-control-item">女性</a>
          <a class="mui-control-item">幻想</a>
          <a class="mui-control-item">文艺</a>
          <a class="mui-control-item">历史</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
/* .app-navbar{
  padding: 0 0.5rem;
} */
/* .app-navbar .mui-scroll-wrapper .mui-control-item {
  width:5.5rem;
} */
* {
  touch-action: pan-y;
}
.app-navbar{
  background: #fff;
}
.app-navbar .mui-segmented-control.mui-scroll-wrapper .mui-control-item {
    display: inline-block;
    width: auto;
    padding: 0 15px;
    border: 0;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    mui.init();
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
