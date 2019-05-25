<template>
  <div class="app-book-list" ref="viewBox">
    <ul class="mui-table-view" >
      <li class="mui-media btn-golden-box">
        <div class="mui-media-body">
          <a href="javascript:;" class="btn-golden">重磅推荐</a>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media" :data-book_id="item.id" @click="getDetail" v-for="(item,i) of list" :key="i">
        <a href="javascript:;"  >
          <img class="mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
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
    <p>
      <span @click="loadMore" :style="display" ref="loadmore">没有更多了</span>
    </p>
  </div>
</template>
<style>
.app-book-list {
  /* margin: 10px 5px 50px 5px !important; */
  border: none;
  background-color: #fff;
}

.app-book-list .mui-table-view {
  border: 0px;
}
.app-book-list .btn-golden {
  display: inline-block;
  width: 65px;
  text-align: center;
  height: 22px;
  line-height: 22px;
  color: #fff;
  background-color: #b99a6b;
  font-size: 10px;
  border-radius: 5%;
  margin: 5px 5px 0px 5px;
}
.app-book-list .mui-pull-left {
  height: 95px;
  width: 65px;
}

.app-book-list .mui-pull-left img {
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
</style>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["kindname"],
  data() {
    return {
      loadmore:this.$refs.loadmore,
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
      this.curKindName = this.kindname;
      var url = `http://laiycoder.com:3000/readbookapi/getBykindname?kindname=${
        this.curKindName
      }&pageindex=${this.pageindex}&pagesize=4`;
      this.axios.get(url).then(res => {
        if (this.list.length > 1 && this.pageindex > 1) {
          Toast("加载中...");
          this.list = this.list.concat(res.data.data);
        } else {
          this.list = res.data.data;
        }
        this.pagecount = parseInt(res.data.pagecount);
      });
    },
    loadMore() {
      this.pageindex += 1;
       
      this.getbooklist();
    },
    handleScroll(e) {
     
      //var loadmore=this.$refs.loadmore;
      var deviceH=window.outerHeight;
      var eleH=this.loadmore.getBoundingClientRect().top;
      if(eleH<=deviceH-81){
        this.loadMore();
      }
      
    },
     getDetail(e) {
      var book_id=e.currentTarget.dataset.book_id;
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
  },
  mounted() {
    this.loadmore=this.$refs.loadmore;
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
