<template>
  <div class="app-book-detail">
    <!-- 顶部导航 -->
    <div class="mui-input-row mui-search">
      <div class="search-title">
        <span class="mui-icon mui-icon-arrowthinleft" @click="goback"></span>电子书
      </div>
      <div class="search-right">
        <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
      </div>
    </div>
    <!-- 图书信息 -->
    <div class="book-intro">
      <div class="book-left">
        <h4>{{bookinfo.book_title}}</h4>
        <p>
          ★★★★★ 暂无评分
          <span class="mui-icon mui-icon-help"></span>
        </p>
        <p class="span-12">
          <a>
            <span class="color-7">★ 7.7</span>
            <span>{{bookinfo.rating_cnt}} 评价 | {{bookinfo.publisher}}</span>
          </a>
        </p>
        <p>{{bookinfo.book_author_names}} 著</p>
        <p>图书/虚构</p>
        <p>新星出版社/2019-04</p>
        <p>{{bookinfo.round_word_count}}</p>
        <p class="span-price">
          <span>￥</span>
          <s>27.99</s>
          <span>21.79</span>
        </p>
      </div>
      <div class="book-right">
        <img :src="bookinfo.img_url" alt>
      </div>
    </div>
    <div class="mui-table-view message">
      <p class="font12">
        <span>特价</span>今日特价 截止至：2019-05-14 02：00
      </p>
    </div>
    <div class="book-intro-detail">
      <h4>简介</h4>
      <div class="book-intro-text">{{bookinfo.abstract}}</div>
    </div>
    <div class="book-bottom">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-gift bottom-icon"></span>
          <span class="mui-tab-label bottom-label">礼物</span>
        </a>
        <a class="mui-tab-item">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart bottom-icon"></span>
          <span class="mui-tab-label bottom-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="javascript:;">
          <button class="bottom-btn bgcolor-6" @click="buy">购买</button>
        </a>
        <a href="javascript:;" class="mui-tab-item">
          <button class="bottom-btn bgcolor-7">试读</button>
        </a>
      </nav>
    </div>
  </div>
</template>
<style>
.app-book-detail .mui-table-view {
  margin: 0;
  padding: 0;
}
.app-book-detail a {
  text-decoration: none;
  color: #000;
}
.app-book-detail {
  font-size: 1rem;
}
.app-book-detail .mui-search {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: #fff;
}
.app-book-detail .mui-search .search-title {
  width: auto;
  display: inline-block;
  line-height: 2rem;
  color: black;
  font-size: 1.2rem;
  height: 2rem;
  font-family: "Avenir";
  font-weight: 1000;
}
.app-book-detail .mui-search .mui-icon {
  margin: 0.72rem 0.5rem;
  font-size: 1.5rem;
}
.app-book-detail .mui-search .mui-icon-arrowthinleft {
  font-weight: 1000;
}
.app-book-detail .mui-icon-help {
  font-size: 16px;
}
.app-book-detail .mui-icon-help::before {
  color: #f00;
}
.book-intro {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem;
}
.book-intro .book-left h4 {
  text-align: left;
  font-size: 1.2rem;
}
.book-intro .book-left p {
  line-height: 22px;
  height: 22px;
  font-size: 0.875rem;
  margin: 0;
  text-align: left;
}
.book-intro .book-right img {
  width: 5.5rem;
  height: 8.5rem;
  margin: 5px;

}
.app-book-detail .message {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-start;
}
.app-book-detail .font12 {
  font-size: 12px;
  margin: 0;
}
.app-book-detail .bottom-icon {
  font-size: 1.2rem;
  margin: 0;
}
.app-book-detail .bottom-label {
  font-size: 0.8rem;
}
.app-book-detail .message p > span {
  display: inline-block;
  padding: 0 5px;
  height: 16px;
  line-height: 16px;
  font-size: 0.8rem;
  color: #fff;
  background-color: #f00;
  border: none;
  margin-right: 5px;
  border-radius: 4px 4px 0px 4px;
}
.app-book-detail .bottom-btn {
  width: 95%;
  height: 70%;
}
.book-intro-detail h4 {
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem 1rem;
}
.book-intro-detail .book-intro-text {
  font-size: 0.875rem;
  color: black;
  padding: 0.5rem 1rem;
  text-align: left;
}

.book-bottom .mui-bar.mui-bar-tab {
  bottom: 0;
  display: table;
  width: 100%;
  height: 40px;
  padding: 0;
  table-layout: fixed;
  border-top: 0;
  border-bottom: 0;
  -webkit-touch-callout: none;
}
.app-book-detail .book-bottom .mui-bar-tab .mui-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: auto;
  padding-top: 0;
  padding-bottom: 0;
}
.bgcolor-7 {
  background-color: #7cd4be;
  color: #fff;
}
.color-7 {
  color: #7cd4be;
}
.bgcolor-6 {
  background-color: #6aa8b8;
  color: #fff;
}

.book-intro .book-left .span-12 {
  margin: 0.5rem 0;
  text-align: left;
}

.span-12 a {
  line-height: 20px;
  height: 20px;
  border: 1px solid #ddd;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}
.span-12 a span {
  font-size: 0.8rem;
}
.span-price span:nth-child(1) {
  font-size: 1rem;
  font-weight: 1000;
  color: #7cd4be;
}
.span-price s {
  font-size: 1rem;
  font-weight: 1000;
  color: #ddd;
}
.span-price span:nth-child(3) {
  font-size: 1rem;
  font-weight: 1000;
  color: #7cd4be;
}
</style>
<script>
import searchTop from "../components/Search.vue";
import store from '@/store'

// {"id":1,"book_id":108430815,"book_title":"摇滚侦探","url":"/ebook/108430815/","img_url":"https://img3.doubanio.com/view/ark_article_cover/retina/public/108430815.jpg?v=1552635833","kind_ids":"508,","kind_names":"悬疑,","book_author_ids":"/author/63740042/,","book_author_names":"杨林,","add_date":"2019-05-03T16:00:00.000Z"}
export default {
  store,
  data() {
    return {
      bookinfo: {
        book_id: "",
        book_title: "",
        img_url: "",
        book_author_names: "",
        fixed_price: 0.0,
        price: 39.0,
        cover_url: "",
        category_text: "",
        agent: "",
        promotion_end_time: "",
        author: "",
        round_word_count: 0,
        abstract: "",
        publisher: "",
        rating_cnt: ""
      },
      msg:store.state.count
    };
  },
  created() {
    var book_id = this.$route.query.book_id;
    var url = `${this.$router.baseurl}/readbookapi/getById?bid=${book_id}`;
    this.axios.get(url).then(result => {
      if (result.data.code == 1) {
        var obj = result.data.data[0];
        this.bookinfo.rating_cnt = obj.rating_cnt;
        this.bookinfo.publisher = obj.publisher;
        this.bookinfo.round_word_count = obj.round_word_count;
        this.bookinfo.abstract = obj.abstract;
        this.bookinfo.book_id = obj.book_id;
        this.bookinfo.book_title = obj.book_title;
        this.bookinfo.img_url = obj.img_url;
        this.bookinfo.book_author_names = obj.book_author_names
          .toString()
          .substring(0, obj.book_author_names.length - 1);
      } else {
        console.log(result.data);
      }
    });
  },
  methods: {
    goback() {
      console.log(window.location.hash);
    },
    buy(){
    store.commit("increase");
    }
  },
  components: {
    searchTop
  }
};
</script>


