<template>
  <div class="app-readbookdetail">
    <div class="readbookdetail-content">
      <!--静态图片-->
      <!-- <img id="img1" src="../assets/images/qingxike.jpg"> -->
      <img id="img1" :src="bookinfo.img_url">
      <div class="filter"></div>
    </div>
    <div class="book-title">
      <!-- <h4>山青卷白云：女翻译与王维</h4> -->
       <h4>{{bookinfo.book_title}}</h4>
      <div class="book-author">
        <p>
          <img class="img" src="../assets/images/head.jpg" alt>
          <!-- <span>青溪客</span> -->
          <span class="mui-ellipsis">{{bookinfo.book_author_names=bookinfo.book_author_names.length>6?bookinfo.book_author_names.substring(0,6)+'...':bookinfo.book_author_names}}</span>
        </p>

        <p>描写盛唐气象不落俗套，以史实为基础的大胆想像颠覆了传统的诗人形象，带你穿越到一个活灵活现的唐朝。</p>
        <br>
        <p>
          <span class="stars-active">
            <span class="stars-active-child"></span>
          </span>
        </p>
        <br>
        <p class="title-icons">
          <span class="mui-icon mui-icon-bars"></span>
          <span class="bgcolor-green">历史小说</span>
          <span class="mui-icon mui-icon-compose"></span>
          <span class="bgcolor-green">历史言情</span>
        </p>
        <br>
        <br>
        <p class="title-footer">
          <span>约 291,795</span>
          <span>4,356 订阅 | 338,054 阅读</span>
        </p>
      </div>
      <div class="book-context">
        <h4>简介</h4>
        <p>精通波斯语的女翻译闯入大诗人王维的生活。她在爱恨纠葛中，把21世纪介绍给唐朝。</p>
        <h4>目录</h4>
        <p class="lastest">
          <span class="bgcolor-orange">最新</span>（八三）茫茫天意为谁留
        </p>
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">（一）满园春色属群仙</li>
          <li class="mui-table-view-cell">（二）玉碗盛来琥珀光</li>
        </ul>
      </div>
    </div>

    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <span class="mui-tab-label bottom-label">评论</span>
      </a>
      <a class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
        <span class="mui-tab-label bottom-label">送花</span>
      </a>
      <a class="mui-tab-item">
        <span class="mui-icon mui-icon-pulldown"></span>
        <span class="mui-tab-label bottom-label">下载</span>
      </a>
      <a class="mui-tab-item bgcolor-6" href="javascript:;">
        订阅
        <!-- <button class="bottom-btn bgcolor-6">订阅</button> -->
      </a>
      <a href="javascript:;" class="mui-tab-item bgcolor-7">
        阅读
        <!-- <button class="bottom-btn bgcolor-7">阅读</button> -->
      </a>
    </nav>
  </div>
</template>
<style scoped>
.app-readbookdetail{
  font-size: 0.875rem;
}
.app-readbookdetail .book-author p {
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 0px;
  color: #8f8f94;
  background-color: #f7fbfa;
}
.app-readbookdetail .readbookdetail-content {
  position: relative;
  background-color: #f7fbfa;
}
.app-readbookdetail #img1 {
  width: 100%;
  height: 160px;
}
.app-readbookdetail .filter {
  /* margin-left: -20px; */
  width: 100%;
  height: 80px;
  filter: blur(10px);
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(245, 235, 235, 0.8),
    rgba(245, 235, 235, 1)
  );
  top: 100px;
}
.app-readbookdetail .book-title {
  position: absolute;
  top: 130px;
  padding-bottom: 58px;
}
.app-readbookdetail .book-title .book-author {
  background-color: #f7fbfa;
}

.app-readbookdetail .book-title .book-author p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: none;
  background-color: #f7fbfa;
}
.app-readbookdetail .book-title .book-author img {
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin: 5px;
}
.app-readbookdetail .stars-active {
  background: url("../assets/images/stars.svg") no-repeat;
  height: 13px;
  width: 73px;
  display: inline-block;
}
.app-readbookdetail .stars-active-child {
  background: url("../assets/images/stars.svg") no-repeat;
  height: 13px;
  width: 73px;
  background-position: -14.6px -17px;
  display: inline-block;
}
.app-readbookdetail .bgcolor-green {
  background: #6da7bc;
  color: #fff;
  border-radius: 20px;
  padding: 2px 8px;
}
.app-readbookdetail .title-icons {
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 0px;
  color: #8f8f94;
  background-color: #f7fbfa;
  line-height: 1rem;
}
.app-readbookdetail .title-icons span {
  margin: 5px;
}
.app-readbookdetail .title-icons .mui-icon {
  font-size: 1.2rem;
}
.app-readbookdetail .book-title .book-author .title-footer {
  display: flex;
  justify-content: space-between;
}
/* .book-context {
  padding: 10px;
} */
.app-readbookdetail .book-context p {
  font-size: 0.75rem;
  text-align: left;
  padding: 10px;
}
.app-readbookdetail .book-context h4 {
  text-align: left;
  padding: 15px 0px;
  background-color: #ebf0f3;
  padding: 10px;
}
.app-readbookdetail .book-context .mui-table-view .mui-table-view-cell {
  text-align: left;
  background-color: #f5f9f8;
  font-size: 0.875rem;
}
.app-readbookdetail .book-context .mui-table-view-cell:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0px;
  height: 1px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.app-readbookdetail .book-context .lastest {
  font-size: 0.875rem;
  height: 30px;
  padding: 10px;
  color: #000;
}

.app-readbookdetail .bgcolor-orange {
  background: orange;
  color: #fff;
  padding: 2px 3px;
  font-size: 0.75rem;
}
.app-readbookdetail .bgcolor-6 {
  background-color: #7cd4be;
  color: #fff;
}
.app-readbookdetail .bgcolor-7 {
  background-color: #5cc9ac;
  color: #fff;
}
.app-readbookdetail .mui-bar-tab .mui-tab-item:nth-child(4),
.app-readbookdetail .mui-bar-tab .mui-tab-item:nth-child(5) {
  display: table-cell;
  overflow: hidden;
  width: 5px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app-readbookdetail .mui-bar .mui-icon {
  font-size: 18px;
  position: relative;
  z-index: 20;
  padding-top: 10px;
  padding-bottom: 10px;
}
.app-readbookdetail .mui-bar {
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
  -webkit-box-shadow: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
<script>
export default {
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
      }
    };
  },
  created(){
    this.getBookInfo();
  },
  methods: {
    getBookInfo() {
      var bookid = this.$route.params.bookid;
      var url = `${this.$router.baseurl}/readbookapi/getById?bid=${bookid}`;
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
    }
  }
};
</script>


