<template>
  <div class="app-book-list">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-arrowthinleft mui-pull-left"></a>
      <h1 class="mui-title">推荐</h1>
    </header>
    <div class="mui-slider" v-scroll="navScroll">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item">热门</a>
          <a class="mui-control-item">新作</a>
          <a class="mui-control-item">经典</a>
          <a class="mui-control-item">短篇</a>
        </div>
      </div>
    </div>
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        :data-book_id="item.id"
        @click="getDetail"
        v-for="(item,i) of list"
        :key="i"
      >
        <a href="javascript:;">
          <img class="mui-pull-left list-img" v-lazy="item.img_url" :src="item.img_url">
          <div class="mui-media-body">
            <h4>{{item.book_title}}</h4>
            <span>{{item.book_author_names}}</span>
            <p class="mui-ellipsis">
              {{item.abstract}}
              <!-- 描写盛唐气象不落俗套，以史实为基础的大胆颠覆了传统的诗人形象，带你穿越到一个活灵活现的唐朝 -->
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
.app-book-list a {
  text-decoration: none;
  color: #000;
}
.app-book-list {
  border: none;
  background-color: #fff;
  padding-top: 50px;
}
.app-book-list .mui-title {
  text-align: left;
  padding: 0px 10px;
}
.app-book-list .mui-slider {
  background-color: #fff;
}
.app-book-list .mui-table-view {
  border: 0px;
  background-color: #f7fbfa;
}

/* .app-book-list .mui-pull-left {
  height: 55px;
  width: 65px;
} */

.app-book-list .list-img {
  height: 95px;
  width: 65px;
}

.app-book-list .mui-media-body span {
  font-size: 12px;
  color: #bbb;
  margin: 2px;
}
.app-book-list .mui-media-body h4 {
  font-size: 14px;
  margin: 2px;
}
.app-book-list .mui-media-body p {
  margin: 2px;
  padding-left: 2px;
  font-size: 12px;
  white-space: normal;
  max-height: 42px;
}
.app-book-list .mui-media-body {
  padding: 10px 2px 10px 10px;
  text-align: left;
}
.app-book-list .mui-bar-nav {
  top: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #fff;
}
.app-book-list .mui-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  height: 44px;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 0;
  background-color: #f7f7f7;
  box-shadow: none;
  -webkit-box-shadow: none;
  /* -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    box-shadow: 0 0 1px rgba(0, 0, 0, .85); */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
}

.app-book-list
  .mui-slider
  .mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  border-bottom: 0;
  position: relative;
}
.app-book-list
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
</style>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["kindname"],
  data() {
    return {
      curKindName: "",
      pageindex: 1,
      pageszie: 10,
      pagecount: 1,
      display: "",
      list: [{ book_title: "", book_author_names: "", img_url: "" }]
    };
  },
  created() {
    this.getbooklist();
  },
  methods: {
    getbooklist() {
      //this.curKindName = this.kindname;
      this.curKindName = this.$route.params.kindname;
      var url = `${this.$router.baseurl}/readbookapi/getBykindname?kindname=${
        this.curKindName
      }&pageindex=${this.pageindex}&pagesize=10`;
      this.axios.get(url).then(res => {
        if (this.list.length > 1 && this.pageindex > 1) {
          this.list = this.list.concat(res.data.data);
        } else {
          this.list = res.data.data;
        }
        this.pagecount = parseInt(res.data.pagecount);
      });
    },

    navScroll(evt, el) {
      if (window.scrollY > 20) {
        el.style = "position: fixed;top:0px;z-index:100;";
      } else if (window.scrollY < 42) {
        el.style = "position:relative;";
      }
      //return window.scrollY > 100
    },
    getDetail(e) {
      var book_id = e.currentTarget.dataset.book_id;
      this.$router.push({
        path: "/BookDetail",
        query: {
          book_id: book_id
        }
      });
    }
  },
  watch: {
    kindname() {
      this.pageindex = 1;
      this.getbooklist();
    },
    pagecount() {
      if (this.pageindex >= this.pagecount) {
        this.display = "display:none";
      } else {
        this.display = "display:block";
      }
    }
  }
};
</script>
