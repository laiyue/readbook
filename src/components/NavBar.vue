<template>
  <div class="app-navbar">
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">精选</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">悬疑</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">女性</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">幻想</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">文艺</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">历史</a>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.app-navbar .mui-scroll-wrapper .mui-control-item {
  padding: 0 15px;
}
* {
  touch-action: pan-y;
}
.app-navbar{
  background: #fff;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
