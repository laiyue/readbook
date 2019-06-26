<template>
  <div class="app-shop">
    <search-top title="书店"></search-top>
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      v-scroll="navScroll"
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
        <img src="../assets/images/7830.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/7833.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/7818.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 滑动图书列表 -->
    <div class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114305377.jpg">
                <div class="mui-media-body fontw">文明的冲突</div>
                <div class="mui-media-body font12">[美]塞缪尔·亨廷顿 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114335234.jpg">
                <div class="mui-media-body fontw">棋王</div>
                <div class="mui-media-body font12">阿城 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114692025.jpg">
                <div class="mui-media-body fontw">青年变革者</div>
                <div class="mui-media-body font12">梁启超（1873—1898）著</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114305377.jpg">
                <div class="mui-media-body fontw">文明的冲突</div>
                <div class="mui-media-body font12">[美]塞缪尔·亨廷顿 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114335234.jpg">
                <div class="mui-media-body fontw">棋王</div>
                <div class="mui-media-body font12">阿城 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114692025.jpg">
                <div class="mui-media-body fontw">青年变革者</div>
                <div class="mui-media-body font12">梁启超（1873—1898）著</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114305377.jpg">
                <div class="mui-media-body fontw">文明的冲突</div>
                <div class="mui-media-body font12">[美]塞缪尔·亨廷顿 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114335234.jpg">
                <div class="mui-media-body fontw">棋王</div>
                <div class="mui-media-body font12">阿城 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114692025.jpg">
                <div class="mui-media-body fontw">青年变革者</div>
                <div class="mui-media-body font12">梁启超（1873—1898）著</div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114305377.jpg">
                <div class="mui-media-body fontw">文明的冲突</div>
                <div class="mui-media-body font12">[美]塞缪尔·亨廷顿 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114335234.jpg">
                <div class="mui-media-body fontw">棋王</div>
                <div class="mui-media-body font12">阿城 著</div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/114692025.jpg">
                <div class="mui-media-body fontw">青年变革者</div>
                <div class="mui-media-body font12">梁启超（1873—1898）著</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <!-- 本月排行榜 -->
    <div class="current-mouth">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 bgcolor-left">
          <a href="#">
            <h5 class="title color-left">本月畅销</h5>
            <img class="mui-media-object" src="../assets/images/114305377.jpg">
            <div class="mui-media-body fontw">文明的冲突</div>
            <div class="mui-media-body font12">[美]塞缪尔·亨廷顿 著</div>
            <button type="button" class="color-left">TOP 30</button>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 bgcolor-center">
          <a href="#">
            <h5 class="title color-center">本月好评</h5>
            <img class="mui-media-object" src="../assets/images/114335234.jpg">
            <div class="mui-media-body fontw">棋王</div>
            <div class="mui-media-body font12">阿城 著</div>
            <button type="button" class="color-center">TOP 30</button>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 bgcolor-right">
          <a href="#" class>
            <h5 class="title color-right">本月新书</h5>
            <img class="mui-media-object" src="../assets/images/114692025.jpg">
            <div class="mui-media-body fontw">青年变革者</div>
            <div class="mui-media-body font12">梁启超（1873—1898）著</div>
            <button type="button" class="color-right">TOP 30</button>
          </a>
        </li>
      </ul>
    </div>
    <!-- 今日特价 -->
    <div class="special-price">
      <h5 class="title">今日特价</h5>
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#">
            <img class="mui-media-object" src="../assets/images/114305377.jpg">
            <div class="mui-media-body fontw">文明的冲突</div>
            <div class="mui-media-body font12">
              <span class="color-green">￥</span>
              <s>79.80</s>&nbsp;
              <span class="color-red">22.80</span>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#">
            <img class="mui-media-object" src="../assets/images/114335234.jpg">
            <div class="mui-media-body fontw">棋王</div>
            <div class="mui-media-body font12">
              <span class="color-green">￥</span>
              <s>79.80</s>&nbsp;
              <span class="color-red">22.80</span>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#">
            <img class="mui-media-object" src="../assets/images/114692025.jpg">
            <div class="mui-media-body fontw">青年变革者</div>
            <div class="mui-media-body font12">
              <span class="color-green">￥</span>
              <s>79.80</s>&nbsp;
              <span class="color-red">22.80</span>
            </div>
          </a>
        </li>
      </ul>
      <button type="button">查看更多</button>
    </div>
    <div class="nav-table">
      <table class="mui-table">
        <tr>
          <td>
            <router-link to="/shop">散文随笔</router-link>
          </td>
          <td>
            <router-link to="/shop">传记回忆</router-link>
          </td>
          <td>
            <router-link to="/shop">外国现当代</router-link>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/shop">电影</router-link>
          </td>
          <td>
            <router-link to="/shop">游戏娱乐</router-link>
          </td>
          <td>
            <router-link to="/shop">时尚美妆</router-link>
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/shop">历史</router-link>
          </td>
          <td>
            <router-link to="/shop">文艺小赏</router-link>
          </td>
          <td>
            <router-link to="/shop">言情</router-link>
          </td>
        </tr>
      </table>
    </div>

    <br>
    <br>
    <bottom></bottom>
  </div>
</template>
<style scoped>
.app-shop {
  background-color: #f7fbfa;
  padding-bottom: 50px;
}
.app-shop a {
  text-decoration: none;
}
.app-shop
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: #000;
  border-bottom: 2px solid #007aff;
  background: #f7fbfa;
  position: relative;
}

.app-shop #sliderSegmentedControl {
  background-color: #f7fbfa;
}
.app-shop
  .mui-table-view.mui-grid-view
  .mui-table-view-cell
  .mui-media-body.fontw {
  font-size: 14px;
  line-height: 14px;
  display: block;
  width: 100%;
  height: 14px;
  margin-top: 8px;
  text-overflow: ellipsis;
  color: #000;
  font-weight: 500;
  margin: 10px 0px;
}
.app-shop
  .mui-table-view.mui-grid-view
  .mui-table-view-cell
  .mui-media-body.font12 {
  font-size: 0.75rem;
  line-height: 0.75rem;
  display: block;
  width: 100%;
  height: 0.75rem;
  margin-top: 8px;
  text-overflow: ellipsis;
  color: #bbb;
  margin: 10px 0px;
}

.app-shop .mui-scroll {
  background: #f7fbfa;
}
.app-shop .mui-scroll .mui-control-item {
  background: #f7fbfa;
}

.app-shop .mui-control-item {
  background-color: #fff;
  color: #000;
}
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  width: 100%;
  height: 9rem;
}
/* .app-shop .mui-table-view li {
  width: 33.33333%;
} */
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
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  padding-bottom: 0.5rem;
}
.app-shop
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active::after {
  content: "";
  /* height: px; */
  width: 115px;
  position: absolute;
  top: 35px;
  left: 0;
  bottom: 0;
  background-color: #007aff;
  border: 1rpx solid #007aff;
}
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell {
  font-size: 17px;
  display: inline-block;
  margin: 0px;
  padding: 10px 10px;
  text-align: center;
  vertical-align: middle;
  background: none;
}

.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn) {
  margin: 0px;
}

.app-shop .mui-table-view.mui-grid-view {
  font-size: 0;
  display: block;
  width: 100%;
  padding: 0px;
  white-space: normal;
}

.app-shop .mui-table-view {
  position: relative;
  margin: 0;
  list-style: none;
  background-color: #fff;
}

.current-mouth .title {
  font-weight: 800;
  margin: 15px auto;
}
.color-left {
  color: #f99e5e;
}
.color-center {
  color: #77c885;
}
.color-right {
  color: #51ade4;
}
.color-green {
  color: #68aab6;
}

.color-red {
  color: #f75d67;
}

.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-left {
  background: #faf2f0;
}
.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-center {
  background: #f1f6f0;
  border-left: 1px solid #f7fbfa;
  border-right: 1px solid #f7fbfa;
}
.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-right {
  background: #f0f5fb;
}
.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell
  button {
  border: none;
}

.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-left::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #51ade4;
}
.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-center::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #77c885;
}

.app-shop
  .current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell.bgcolor-right::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #77c885;
}
.app-shop .current-mouth .mui-table-view::before,
.app-shop .current-mouth .mui-table-view::after {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 0;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}

.special-price,
.special-price .mui-table-view.mui-grid-view {
  background: #f7fbfa;
}

.special-price .mui-table-view::before,
.special-price .mui-table-view::after {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 0;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.special-price button {
  height: 2rem;
  width: 6.5rem;
  font-size: 0.75rem;
  border: none;
  margin: 0px 10px 10px 10px;
  color: #68aab6;
}
.special-price .title {
  font-weight: 800;
  color: #000;
  text-align: left;
  padding: 15px 15px 0px 15px;
  margin: 5px 10px 0px 5px;
  background-color: #f7fbfa;
}
.nav-table .mui-table {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}

.nav-table .mui-table tr td {
  border-left: none;
  border-right: 1px solid #ddd;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  height: 40px;
  width: 33.3333%;
  color: #68aab6;
  font-size: 0.875rem;
}
.nav-table .mui-table tr td:nth-child(3) {
  border-right: none;
}
</style>
<script>
import searchTop from "../components/Search.vue";
import bottom from "../components/Bottom.vue";
export default {
  data() {
    return {
      pageindex: 1,
      pagesize: 3
    };
  },
  methods: {
    navScroll(evt, el) {
      if (window.scrollY > 42) {
        el.style = "position: fixed;top:0px;z-index:100;";
      } else if (window.scrollY < 42) {
        el.style = "";
      }
      //return window.scrollY > 100
    }
  },
  components: {
    searchTop,
    bottom
  },
  mounted() {
    var gallery = mui(".mui-slider");
    gallery.slider({
      interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
};
</script>