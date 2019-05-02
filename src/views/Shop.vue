<template>
  <div class="app-shop">
    <search-top title="书店"></search-top>
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <router-link
          class="mui-control-item mui-active"
          to="#item1mobile"
          data-wid="tab-top-subpage-1.html"
        >中文电子书</router-link>
        <router-link
          class="mui-control-item"
          to="#item1mobile"
          data-wid="tab-top-subpage-1.html"
        >英文电子书</router-link>
      </div>
    </div>

    <!-- 轮播 -->
    <mt-swipe class="mint-swipe" :auto="4000" :show-indicators="true">
      <mt-swipe-item>
        <img src="../assets/images/7410.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/7463.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/7411.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 滑动图书列表 -->
    <div class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7411.jpg">
                <div class="mui-media-body">Color of SIP CBD</div>
                <div class="mui-media-body">Color of SIP CBD</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">静静看这世界</div>
                <div class="mui-media-body">静静看这世界</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">静静看这世界</div>
                <div class="mui-media-body">静静看这世界</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7411.jpg">
                <div class="mui-media-body">幸福就是可以一起睡觉</div>
                <div class="mui-media-body">幸福就是可以一起睡觉</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">静静看这世界</div>
                <div class="mui-media-body">静静看这世界</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7411.jpg">
                <div class="mui-media-body">Color of SIP CBD</div>
                <div class="mui-media-body">Color of SIP CBD</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">静静看这世界</div>
                <div class="mui-media-body">静静看这世界</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">静静看这世界</div>
                <div class="mui-media-body">静静看这世界</div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7411.jpg">
                <div class="mui-media-body">幸福就是可以一起睡觉</div>
                <div class="mui-media-body">幸福就是可以一起睡觉</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/7463.jpg">
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 小圆点 -->
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <!-- 本月排行榜 -->
    <div class="current-mouth">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-">
          <a href="#">
            <div class="mui-media-body body-title">本月畅销</div>
            <img class="mui-media-object" src="../assets/images/7411.jpg">
            <div class="mui-media-body body-warp">Color of SIP CBD</div>
            <div class="mui-media-body">Color of SIP CBD</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="mui-media-body body-title">本月好评</div>
            <img class="mui-media-object" src="../assets/images/7463.jpg">
            <div class="mui-media-body body-warp">静静看这世界</div>
            <div class="mui-media-body">静静看这世界</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="mui-media-body body-title">本月新书</div>
            <img class="mui-media-object" src="../assets/images/7463.jpg">
            <div class="mui-media-body body-warp">静静看这世界</div>
            <div class="mui-media-body">静静看这世界</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
      </ul>
    </div>
    <br>
    <br>
  </div>
</template>
<style>
.app-shop {
  background-color: #fff;
}
.app-shop a {
  text-decoration: none;
}

.app-shop
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: #000;
  border-bottom: 2px solid #007aff;
  background: #fff;
}

.app-shop .mui-control-item {
  background-color: #fff;
  color: #000;
}
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  width: 94px;
  height: 124px;
}
.app-shop .mui-table-view li {
  width: 33.33333%;
}
.app-shop .mui-table-view li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.app-shop .mint-swipe {
  margin-top: 1px;
  height: 100px;
}
.app-shop img {
  width: 100%;
  height: 100%;
}
.app-shop .mui-slider {
  margin-top: 15px;
}
.app-shop .mui-table-view.mui-grid-view {
  font-size: 0;
  display: block;
  width: 100%;
  /* padding: 0 10px 10px 0; */
  padding: 10px;
  white-space: normal;
}

.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell {
  font-size: 17px;
  display: inline-block;
  margin-right: 0;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  background: none;
}
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
  margin: 0;
}

.app-shop .mui-slider-indicator {
  position: relative;
  bottom: 0px;
  width: 100%;
  text-align: center;
  background: none;
}

.app-shop .current-mouth {
  position: absolute;
  width: 100%;
}
.current-mouth .mui-table-view.mui-grid-view {
  padding: 0px;
  margin: 0px;
}


.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(1) {
  border-top: 3px solid orangered;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;
}
.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(2) {
  border-top: 3px solid green;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;

}
.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(3) {
  border-top: 3px solid blue;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;
}
.current-mouth .mui-table-view-cell a{
  background-color: #f6faf9;
}

.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(1)
  .mui-media-body.body-title {
  font-size: 1.4rem;
  font-family: "黑体";
  font-weight: bold;
  color: orangered;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(2)
  .mui-media-body.body-title {
  font-size: 1.4rem;
  font-family: "黑体";
  font-weight: bold;
  color: green;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(3)
  .mui-media-body.body-title {
  font-size: 1.4rem;
  font-family: "黑体";
  font-weight: bold;
  color: blue;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(1)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: orangered;
  width: 70%;
   height: 38px;
  line-height: 38px;
  margin: 10px auto;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(2)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: green;
  width: 70%;
  height: 38px;
  line-height: 38px;
  margin: 10px auto;
}

.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(3)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: blue;
  width: 70%;
  height: 38px;
  line-height: 38px;
  margin: 10px auto;
}
</style>
<script>
import searchTop from "../components/Search.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    mui.init();
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  components: {
    searchTop
  }
};
</script>