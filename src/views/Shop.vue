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
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="(item,i) of booklist"
              :key="i"
              data-book_id="item.book_id" @click="getDetail"
            >
              <a href="javascript:;" >
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.book_title}}</div>
                <div class="mui-media-body">作者:{{item.book_author_names}}</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="(item,i) of booklist"
              :key="i"
              :data-book_id="item.book_id" @click="getDetail"
            >
              <a href="javascript:;" >
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.book_title}}</div>
                <div class="mui-media-body">作者:{{item.book_author_names}}</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view mui-grid-view">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="(item,i) of booklist2"
              :key="i"
              :data-book_id="item.book_id" @click="getDetail"
            >
              <a href="javascript:;" >
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.book_title}}</div>
                <div class="mui-media-body">作者:{{item.book_author_names}}</div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li
              class="mui-table-view-cell mui-media mui-col-xs-6"
              v-for="(item,i) of booklist2"
              :key="i"
              data-book_id="item.book_id" @click="getDetail"
            >
              <a href="javascript:;" >
                <img class="mui-media-object" :src="item.img_url">
                <div class="mui-media-body">{{item.book_title}}</div>
                <div class="mui-media-body">作者:{{item.book_author_names}}</div>
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
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="mui-media-body body-title">本月畅销</div>
            <img class="mui-media-object" :src="booklist3[0]['img_url']">
            <div class="mui-media-body body-warp">{{booklist3[0]['book_title']}}</div>
            <div class="mui-media-body">{{booklist3[0]['book_author_names']}}</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="mui-media-body body-title">本月好评</div>
            <img class="mui-media-object" :src="booklist3[1]['img_url']">
            <div class="mui-media-body body-warp">{{booklist3[1]['book_title']}}</div>
            <div class="mui-media-body">{{booklist3[1]['book_author_names']}}</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="mui-media-body body-title">本月新书</div>
            <img class="mui-media-object" :src="booklist3[2]['img_url']">
            <div class="mui-media-body body-warp">{{booklist3[2]['book_title']}}</div>
            <div class="mui-media-body">{{booklist3[2]['book_author_names']}}</div>
            <div class="mui-media-body body-btn">TOP 30</div>
          </a>
        </li>
      </ul>
    </div>
    <bottom></bottom>
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
  width: 5rem;
  height: 7.5rem;
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
  padding: 10px;
  margin: 0px;
}
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 0.8rem;
  line-height: 0.9rem;
  display: block;
  width: 100%;
  height: 0.9rem;
  margin-top: 0.5rem;
  text-overflow: ellipsis;
  color: #333;
}

.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(1) {
  border-top: 3px solid #f6ad77;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;
}
.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(2) {
  border-top: 3px solid #87ca8e;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;
}
.current-mouth .mui-table-view.mui-grid-view .mui-table-view-cell:nth-child(3) {
  border-top: 3px solid #6dbde1;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: #f6faf9;
  padding-bottom: 2rem;
}
.current-mouth .mui-table-view-cell a {
  background-color: #f6faf9;
}

.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(1)
  .mui-media-body.body-title {
  font-size: 1.1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #f6ad77;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(2)
  .mui-media-body.body-title {
  font-size: 1.1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #87ca8e;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(3)
  .mui-media-body.body-title {
  font-size: 1.1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #6dbde1;
  line-height: 2rem;
  height: 2rem;
  margin: 1rem 0;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(1)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: #f6ad77;
  width: 70%;
  height: 38px;
  line-height: 38px;
  margin: 10px auto;
  font-size: 1rem;
  font-weight: 650;
}
.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(2)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: #87ca8e;
  width: 70%;
  height: 38px;
  line-height: 38px;
  margin: 10px auto;
  font-size: 1rem;
  font-weight: 650;
}

.current-mouth
  .mui-table-view.mui-grid-view
  .mui-table-view-cell:nth-child(3)
  .mui-media-body.body-btn {
  background-color: #fff;
  color: #6dbde1;
  width: 70%;
  height: 38px;
  line-height: 38px;
  margin: 10px auto;
  font-size: 1rem;
  font-weight: 650;
}
</style>
<script>
import searchTop from "../components/Search.vue";
import bottom from "../components/Bottom.vue";
export default {
  data() {
    return {
      booklist: [{ book_title: "", img_url: "", book_author_names: "" }],
      booklist2: [{ book_title: "", img_url: "", book_author_names: "" }],
      booklist3: [
        { book_title: "", img_url: "", book_author_names: "" },
        { book_title: "", img_url: "", book_author_names: "" },
        { book_title: "", img_url: "", book_author_names: "" }
      ],
      pageindex: 1,
      pagesize: 3
    };
  },
  created() {
    //console.log(1);
    let url = `http://laiycoder.com:3000/booklist/booklist? this.pageindex}&pagesize=${
      this.pagesize
    }`;
    this.axios.get(url).then(res => {
      if (res.data.code == -1 && res.data.msg == "请登录") {
        this.$router.push({ path: "login" });
      } else {
        this.booklist = res.data.data;
      }

      //console.log(this.booklist);
    });
    let url02 = `http://laiycoder.com:3000/booklist/booklist?pageindex=2&pagesize=${
      this.pagesize
    }`;
    this.axios.get(url02).then(res => {
      if (res.data.code == -1 && res.data.msg == "请登录") {
        this.$router.push({ path: "login" });
      } else {
        this.booklist2 = res.data.data;
      }
    });
    let url03 = `http://laiycoder.com:3000/booklist/booklist?pageindex=3&pagesize=${
      this.pagesize
    }`;
    this.axios.get(url03).then(res => {
      if (res.data.code == -1 && res.data.msg == "请登录") {
        this.$router.push({ path: "login" });
      } else {
        this.booklist3 = res.data.data;
      }
    });
  },
  methods: {
    getDetail(e) {
      var book_id=e.currentTarget.dataset.book_id;
      //console.log(book_id);
        this.$router.push({
        path: "/BookDetail",
        query: {
          book_id: book_id
        }
      });
    }
  },
  components: {
    searchTop,
    bottom
  }
};
</script>