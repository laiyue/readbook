<template>
  <div class="app-book-detail">
    <!-- 顶部导航 -->
    <div class="mui-input-row mui-search">
      <div class="search-title">
        <span class="mui-icon mui-icon-arrowthinleft"></span>电子书
      </div>
      <div class="search-right">
        <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
      </div>
    </div>
    <!-- 图书信息 -->
    <div class="book-intro">
      <div class="book-left">
        <h4>书的标题</h4>
        <p>
          ★★★★★ 暂无评分
          <span class="mui-icon mui-icon-help"></span>
        </p>
        <p class="span-12">
          <a>
            <span class="color-7">★ 7.7</span>
            <span>222 评价 | 豆瓣读书</span>
          </a>
        </p>
        <p>陆秋槎 著</p>
        <p>图书/虚构</p>
        <p>新星出版社/2019-04</p>
        <p>约115,000字</p>
        <p class="span-price">
          <span>￥</span>
          <s>27.99</s>
          <span>21.79</span>
        </p>
      </div>
      <div class="book-right">
        <img
          src="https://img3.doubanio.com/view/ark_article_cover/retina/public/108170826.jpg?v=1552027429"
          alt
        >
      </div>
    </div>
    <div class="mui-table-view message">
      <p class="font12">
        <span>特价</span>今日特价 截止至：2019-05-14 02：00
      </p>
    </div>
    <div class="book-intro-detail">
      <h4>简介</h4>
      <div class="book-intro-text">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </div>
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
          <button class="bottom-btn bgcolor-6">购买</button>
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
  line-height: 20px;
  font-size: 1rem;
  margin: 0;
  text-align: left;
}
.book-intro .book-right img {
  width: 5rem;
  height: 7.2rem;
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
  font-size: 0.7rem;
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
.span-price span:nth-child(1){
  font-size: 1rem;
  font-weight: 1000;
  color: #7cd4be;
}
.span-price s{
  font-size: 1rem;
  font-weight: 1000;
  color: #ddd;
}
.span-price span:nth-child(3){
  font-size: 1rem;
  font-weight: 1000;
  color: #7cd4be;
}
</style>
<script>
import searchTop from "../components/Search.vue";
// {
//     "fixed_price":15999,
//     "works_count":9,
//     "price":3999,
//     "cover_url":"https://img3.doubanio.com/view/ark_article_cover/retina/public/115410646.jpg?v=1557717069",
//     "category_text":"图书 / 虚构",
//     "agent":"新星出版社",
//     "purchased":false,
//     "promotion_end_time":"2019-05-21",
//     "author":"埃勒里·奎因 埃勒里·奎因（Ellery Queen） 埃勒里·奎因（Ellery Queen）",
//     "items_price":12992,
//     "round_word_count":"约 1,536,000 字",
//     "can_sale":true,
//     "in_cart":false,
//     "purchased_items_count":0,
//     "average_rating":4.3,
//     "promotion_url":"/promotion/74712/",
//     "rating_cnt":78,
//     "item_cover_urls":[
//         
//     ],
//     "promotion_remark":"限时特价",
//     "title":"埃勒里·奎因侦探小说“国名系列”全集（套装共9册）",
//     "promotion":true,
//     "abstract":"侦探小说黄金时代的巅峰之作
// “国名系列”最后一案
// 埃勒里·奎因最艰难的抉择！
// 魔术般的犯罪手法，一气呵成的推理过程，尽显逻辑之美！"
// }
export default {
  data() {
    return {
      bookinfo:{fixed_price:0.00,price:39.00,cover_url:'',category_text:''
      ,agent:'',promotion_end_time:'',author:'',round_word_count:0}
      
    };
  },
  created(){
    var book_id=this.route.query.book_id
    ;
    console.log(book_id);
    // var url=`https://read.douban.com/j/bundle/${book_id}/`;
    // this.axios.get(url)
    // .then(result=>{
    //   console.log(result);
    // })
  },
  components: {
    searchTop
  }
};
</script>


