<template>
  <div app-readbookdetail>
    <div class="book-header">
      <header id="header" class="mui-bar mui-bar-transparent">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">
          <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
          <span class="mui-icon mui-icon-more"></span>
        </h1>
      </header>
      <div class="mui-content">
        <!--静态图片-->
        <img id="img1" src="../assets/images/yuantiao.jpg">
        <div class="filter"></div>
        <!--轮播图片-->
        <div class="mui-hidden">
          <div class="mui-slider-group">
            <!-- 第一张 -->
            <div class>
              <a href="#">
                <img id="img1" src="../assets/images/yuantiao.jpg">
              </a>
            </div>
          </div>
        </div>
        <p style="margin: 30px 15px 20px;">
          这是transparent bar（透明导航栏）演示页面， 默认情况下标题栏透明，
          当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。
        </p>
        <p
          style="margin: 5px 15px 15px 15px;"
        >这是一种解决滚动条通顶问题的变通解决方案，该方案相比双webview的方案，性能更高，动效更酷，但也有其适用场景：</p>
      </div>
    </div>
    <div class="book-nav"></div>
    <div class="book-card"></div>
    <div class="book-intro"></div>
  </div>
</template>
<style scoped>
.book-header .mui-title {
  width: 85%;
  text-align: right;
}
.mui-content{
    position: relative;
}
#img1 {
  width: 100%;
  height: 200px;
  /* filter: blur(2px); */
}
.filter {
  width: 130%;
  height: 100px;
  filter: blur(5px);
  position: absolute;
  background: linear-gradient(to bottom, rgba(245, 235, 235, 0.5), rgba(245, 235, 235,1)); 
  top: 110px;
  border-radius: 5px;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>


