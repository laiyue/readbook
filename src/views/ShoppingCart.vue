<template>
  <div class="app-shopping-cart">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-arrowthinleft mui-pull-left"></a>
      <h1 class="mui-title">购物车</h1>
    </header>

    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media mui-checkbox mui-left"
        v-for="(item,i) of list"
        :key="i"
      >
        <input
          name="checkbox"
          type="checkbox"
          class="input-checkbox"
          :value="item.id"
          v-model="checkAllList"
        >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.book_title}}
            <p class="mui-ellipsis">{{item.book_author_names}}</p>
            <p class="mui-ellipsis">
              ￥
              <s>48.99</s> 15.99
            </p>
          </div>
        </a>
      </li>
    </ul>
    <div class="cart-bottom">
      <nav class="mui-bar mui-bar-tab">
        <span class="mui-tab-item mui-checkbox mui-left">
          <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
          <input
            name="checkbox"
            class="input-checkbox"
            :checked="checked"
            type="checkbox"
            @click="checkAll"
            v-model="checked"
          >
          <span class="mui-tab-label bottom-label">全选</span>
        </span>

        <a class="mui-tab-item bgcolor-6" href="javascript:;">
          <span>8 部</span>
          <br>
          <span class="color-7">￥202.95元</span>
        </a>
        <a href="javascript:;" class="mui-tab-item bgcolor-7">
          确认购买
          <!-- <button class="bottom-btn bgcolor-7">阅读</button> -->
        </a>
      </nav>
    </div>
  </div>
</template>
<style>
.app-shopping-cart a {
  text-decoration: none;
  color: #000;
}
.app-shopping-cart {
  background-color: #f7f7f7;
  padding-top: 44px;
  padding-bottom: 55px;
}
.app-shopping-cart .mui-title {
  text-align: left;
  padding: 0px 10px;
}

.app-shopping-cart .list-img {
  height: 70px;
  width: 45px;
}

.app-shopping-cart .mui-table-view-cell.mui-checkbox.mui-left,
.mui-table-view-cell.mui-radio.mui-left {
  padding-left: 38px;
}
.app-shopping-cart .mui-table-view .mui-media-object {
  line-height: 62px;
  max-width: 43px;
  height: 62px;
}
.app-shopping-cart .mui-table-view .mui-media,
.mui-table-view .mui-media-body {
  overflow: hidden;
  text-align: left;
}
.mui-table-view-cell > a:not(.mui-btn) {
  margin: -11px 5px;
  padding: 10px;
}
.app-shopping-cart .cart-bottom .mui-checkbox.mui-left input[type="checkbox"],
.mui-radio.mui-left input[type="radio"] {
  margin: 0px -10px;
}
.app-shopping-cart .mui-checkbox input[type="checkbox"]:checked:before,
.mui-radio input[type="radio"]:checked:before {
  color: #5cc9ac;
}
.app-shopping-cart .mui-checkbox.mui-left input[type="checkbox"],
.mui-radio.mui-left input[type="radio"] {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.app-shopping-cart .mui-checkbox input[type="checkbox"]:before,
.mui-radio input[type="radio"]:before {
  font-size: 24px;
}

.app-shopping-cart .mui-bar-nav {
  top: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #fff;
}

.app-shopping-cart .color-7 {
  color: #5cc9ac;
  font-weight: 600;
}
.app-shopping-cart .bgcolor-7 {
  background-color: #5cc9ac;
  color: #fff;
}
.app-shopping-cart .mui-bar-tab .mui-tab-item:nth-child(2) {
  font-size: 0.875rem;
  text-align: right;
  padding: 10px;
}
.app-shopping-cart .mui-bar-tab .mui-tab-item:nth-child(3) {
  display: table-cell;
  overflow: hidden;
  width: 3px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app-shopping-cart .mui-bar {
  background-color: #f7f7f7;
  box-shadow: 0px 0px 1px 0px #ddd;
  -webkit-box-shadow: 0px 0px 1px 0px #ddd;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.app-shopping-cart .cart-bottom .mui-bar .mui-icon {
  font-size: 18px;
  position: relative;
  z-index: 20;
  padding-top: 10px;
  padding-bottom: 10px;
}
.app-shopping-cart .cart-bottom .mui-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  height: 44px;
  padding-right: 0px;
  padding-left: 0px;
  border-bottom: 0;
  /* background-color: #f7f7f7; */
}
</style>
<script>
import { Toast } from "mint-ui";
import store from '@/store'
export default {
  props: ["kindname"],
  store,
  data() {
    return {
      curKindName: "",
      pageindex: 1,
      pageszie: 10,
      pagecount: 1,
      display: "",
      checkAllList: [],
      checked: false,
      list: [{ id: "", book_title: "", book_author_names: "", img_url: "" }]
    };
  },
  created() {
    console.log(store.state.count);
    this.getbooklist();
  },
  methods: {
    getbooklist() {
      //this.curKindName = this.kindname;
      console.log(this.$router.baseurl);
      this.curKindName = this.$route.params.kindname;
      var url = `${
        this.$router.baseurl
      }/readbookapi/getBykindname?kindname=历史&pageindex=${
        this.pageindex
      }&pagesize=5`;
      this.axios.get(url).then(res => {
        // console.log(res.data.data);
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
    },
    checkAll(e) {
      //console.log(e.currentTarget.checked);
      if (this.checked) {
        this.checkAllList = [];
      } else {
        this.list.forEach(item=>{
          this.checkAllList.push(item.id);
        })
      }
    }
  },
  watch: {
    checkAllList(newVal, oldVal) {
      if (this.checkAllList.length === this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
