<template>
  <div class="app-home">
    <search-top title="原创"></search-top>
    <!-- <nav-bar></nav-bar> -->
    <div id="slider" class="mui-slider" v-scroll="navScroll">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll" ref="nav">
          <a
            class="mui-control-item"
            :data-key="i"
            v-for="(item,i) of kindlist"
            :key="i"
            :data-kindname="item.kind_name"
            @click="changeTab"
          >{{item.kind_name}}</a>
        </div>
      </div>
      <!-- <div
        id="sliderProgressBar"
        :style="prossbarStyle"
        style="width:70px;"
        class="mui-slider-progress-bar mui-col-xs-2"
      ></div>-->
    </div>
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
    <div class="mui-table-view message">
      <p class="font12">
        <span>新</span>2019年3月影视行业推荐月报发布
      </p>
    </div>
    <div class="mui-table-view mui-grid-view mui-grid-9">
      <p class="card-content">
        <span class="num-card font16">5</span>
        <span class="num-card font16">4</span>
        <span class="num-card font16">6</span>
        <span class="num-card font16">7</span>
        <span class="num-card font16">6</span>&nbsp;位作者正在豆瓣阅读写作
        <span class="mui-icon-extra mui-icon-extra-arrowrightcricle"></span>
      </p>
      <ul class="nav-tab">
        <li class>
          <div class="nav-item">
            <span class></span>
            <!-- <img src="../assets/images/icon01.png" alt> -->
            排行
          </div>
        </li>
        <li class>
          <div class="nav-item">
            <span class></span>
            <!-- <img src="../assets/images/icon02.png" alt> -->
            推荐
          </div>
        </li>
        <li class>
          <div class="nav-item">
            <span class></span>
            <!-- <img src="../assets/images/icon03.png" alt> -->
            分类
          </div>
        </li>
      </ul>
    </div>
    <recommend-component></recommend-component>
    <bottom></bottom>
  </div>
</template>

<script>
//import bookList from "../components/BookList.vue";
import navBar from "../components/NavBar.vue";
import shop from "../views/Shop.vue";
import searchTop from "../components/Search.vue";
import bottom from "../components/Bottom.vue";
import recommendComponent from "../components/recommand.vue";

export default {
  data() {
    return {
      value: "",
      num: 0,
      navStyle: "transform: translate3d(0px, 0px, 0px) translateZ(0px);",
      curKindName: "悬疑",
      prossbarStyle: "transform: translate3d(0px, 0px, 0px) translateZ(0px);",
      kindlist: [{ kind_name: "", kind_id: 0 }]
    };
  },
  components: {
    // bookList,
    navBar,
    shop,
    searchTop,
    bottom,
    recommendComponent
  },
  created() {
    this.getkind();
    //  mui.init();
  },
  methods: {
    getkind() {
      var url = this.$router.baseurl + "/readbookapi/getKindName";
      this.axios.get(url).then(res => {
        if (res.data.msg && res.data.msg === "请登录") {
          this.$router.push({ path: "login" });
        } else {
          this.kindlist = res.data.data;
        }
      });
    },
    changeTab(e) {
      this.curKindName = e.target.dataset.kindname;
    },
    navScroll(evt, el) {
      if (window.scrollY > 42) {
        el.style = "position: fixed;top:0px;z-index:100;";
      } else if (window.scrollY < 42) {
        el.style = "position:relative;";
      }
      //return window.scrollY > 100
    }
  },
  mounted() {
    mui.init();
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.app-home {
  background-color: #ebf0f3;
  padding-bottom: 50px;
}

.app-home .mui-segmented-control.mui-scroll-wrapper .mui-control-item {
  position: relative;
  display: inline-block;
  width: 70px;
  padding: 0;
  border: 0;
  background: #f7fbfa;
}
.app-home
  .mui-segmented-control.mui-scroll-wrapper
  .mui-control-item
  .mui-active {
  position: relative;
}
.app-home
  .mui-segmented-control.mui-scroll-wrapper
  .mui-control-item.mui-active::after {
  content: "";
  height: px;
  width: 70px;
  position: absolute;
  top: 35px;
  left: 0;
  bottom: 0;
  background-color: #007aff;
  border: 1rpx solid #007aff;
}

.app-home .mui-table-view {
  background: #f7fbfa;
}

.app-home .mint-swipe {
  /* margin-top: 10px; */
  height: 100px;
}
.app-home img {
  width: 100%;
  height: 100%;
}

.app-home .message {
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: flex-start;
  /* border-bottom: 1px solid #bbb; */
}
.app-home .font12 {
  font-size: 12px;
}
.app-home .font16 {
  font-size: 18px;
  font-weight: bold;
}

.app-home .message p > span {
  display: inline-block;
  padding: 1px 2px;
  height: 14px;
  line-height: 14px;
  font-size: 5px;
  color: #fff;
  background-color: #f00;
  border: none;
  margin-right: 5px;
}

.app-home .card-content {
  padding: 15px;
  font-size: 8px;
  line-height: 20px;
  background-color: #ebf0f3;
}
.app-home .num-card {
  padding: 1px 3px;
  margin: 2px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
}

.app-home .mui-icon-extra-arrowrightcricle:before {
  font-size: 16px;
}

.app-home .nav-tab {
  display: flex;
  justify-content: center;
  padding: 0px 10px 10px 10px;
  background-color: #ebf0f3;
}
.app-home .nav-tab li {
  flex: 1;
  line-height: 40px;
  height: 40px;
  font-size: 14px;
  color: #000;
  border-radius: 3%;
  margin: 3px;
  background-color: #fff;
}
.app-home .mui-bar {
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

