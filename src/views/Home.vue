<template>
  <div class="app-home">
    <div class="mui-input-row mui-search">
      <h4 class="search-title">原创</h4>
      <input type="search" class placeholder>
      <span class="mui-icon mui-icon-bars"></span>
      <span class="mui-icon mui-icon-search"></span>
    </div>
    <mt-navbar>
      <mt-tab-item id="1">精选</mt-tab-item>
      <mt-tab-item id="2">悬疑</mt-tab-item>
      <mt-tab-item id="3">女性</mt-tab-item>
      <mt-tab-item id="4">幻想</mt-tab-item>
      <mt-tab-item id="5">文艺</mt-tab-item>
    </mt-navbar>
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
      <p class="font8">
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
            排行
          </div>
        </li>
        <li class>
          <div class="nav-item">
            <span class></span>
            推荐
          </div>
        </li>
        <li class>
          <div class="nav-item">
            <span class></span>
            分类
          </div>
        </li>
      </ul>
    </div>

    <book-list></book-list>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>

<script>
import bookList from "../components/BookList.vue";
export default {
  data() {
    return {
      value: ""
    }
  },
  components: {
    bookList
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
  /* font-family:"汉仪旗黑"; */
}
.app-home .mint-navbar.mint-tab-item-label {
  font-size: 18px;
  color: #ddd;
}
.app-home .mint-swipe {
  height: 100px;
}
.app-home img {
  width: 100%;
  height: 100%;
}
.app-home .mui-search {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.app-home .mui-search input[type="search"] {
  background-color: #fff;
}
.app-home .mui-search .search-title {
  width: 20%;
  display: inline-block;
  line-height: 34px;
  color: black;
}
.app-home .message {
  padding: 10px 10px 10px 20px;
  display: flex;
  justify-content: flex-start;
  /* border-bottom: 1px solid #bbb; */
}
.app-home .font8 {
  font-size: 8px;
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

/* .app-home .mui-table-view-cell_ {
  width: 95px;
  height: 40px;
  margin: 3px;
  display: inline-block;
  border: 1px solid #ddd;
}
.app-home .mui-media-body {
  background-color: #fff;
  width: 100%;
  height: 100%;
} */

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
</style>

