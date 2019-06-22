<template>
  <div class="app-readbookdetail">
    <header id="header" class="mui-bar mui-bar-transparent">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">
        <span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
        <span class="mui-icon mui-icon-more"></span>
      </h1>
    </header>
    <div class="readbookdetail-content">
      <!--静态图片-->
      <img id="img1" src="../assets/images/qingxike.jpg">
      <div class="filter"></div>
    </div>
    <div class="book-title">
      <h4>山青卷白云：女翻译与王维</h4>
      <div class="book-author">
        <p>
          <img class="img" src="../assets/images/head.jpg" alt>
          <span>青溪客</span>
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
  </div>
</template>
<style scoped>
.app-readbookdetail .mui-title {
  width: 85%;
  text-align: right;
}
.book-author p {
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 0px;
  color: #8f8f94;
  background-color: #f7fbfa;
}
.readbookdetail-content {
  position: relative;
  background-color: #f7fbfa;
}
#img1 {
  width: 100%;
  height: 160px;
}
.filter {
  margin-left: -20px;
  width: 130%;
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
.book-title {
  position: absolute;
  width: 100%;
  top: 130px;
}
.book-title .book-author {
  background-color: #f7fbfa;
}

.book-title .book-author p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: none;
  background-color: #f7fbfa;
}
.book-title .book-author img {
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin: 5px;
}
.stars-active {
  background: url("../assets/images/stars.svg") no-repeat;
  height: 13px;
  width: 73px;
  display: inline-block;
}
.stars-active-child {
  background: url("../assets/images/stars.svg") no-repeat;
  height: 13px;
  width: 73px;
  background-position: -14.6px -17px;
  display: inline-block;
}
.bgcolor-green {
  background: #6da7bc;
  color: #fff;
  border-radius: 20px;
  padding: 2px 8px;
}
.title-icons {
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 0px;
  color: #8f8f94;
  background-color: #f7fbfa;
  line-height: 1rem;
}
.title-icons span {
  margin: 5px;
}
.title-icons .mui-icon {
  font-size: 1.2rem;
}
.book-title .book-author .title-footer {
  display: flex;
  justify-content: space-between;
}
/* .book-context {
  padding: 10px;
} */
.book-context p {
  font-size: 0.75rem;
  text-align: left;
  padding: 10px;
}
.book-context h4 {
  text-align: left;
  padding: 15px 0px;
  background-color: #ebf0f3;
  padding: 10px;
}
.book-context .mui-table-view .mui-table-view-cell {
  text-align: left;
  background-color: #f5f9f8;
  font-size: 0.875rem;
}
.book-context .mui-table-view-cell:after {
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
.book-context .lastest {
  font-size: 0.875rem;
  height: 30px;
  padding: 10px;
  color: #000;

}

.bgcolor-orange {
  background: orange;
  color: #fff;
  padding: 2px 3px;
  font-size: 0.75rem;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>


