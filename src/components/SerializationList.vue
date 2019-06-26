<template>
  <div class="app-Serialization-list">
    <header class="mui-bar mui-bar-nav">
      <span class="mui-action-back mui-icon mui-icon-arrowthinleft mui-pull-left"></span>
      <span class="mui-icon mui-icon-search mui-pull-right"></span>
      <input type="text" class="mui-input-clear" placeholder="全部作品">
    </header>
    <h5 class="list-label">热门搜索</h5>
    <div class="swipe-ser-list">
      <div class="swipe-ser-item" v-for="(item,i) of list" :key="i">
        <img :src="item.img_url">
        <div class="ser-item-right">
          <div class="right-clo">
            <p class="font12 fontcolorblack mui-ellipsis">{{item.book_title}}</p>
            <p
              class="font11 mui-ellipsis"
            >{{item.book_author_names=item.book_author_names.length>6?item.book_author_names.substring(0,6).replace(',',''):item.book_author_names.replace(',','')}}</p>
          </div>
          <div class="right-clo-star">
            <!-- <a id="icon-star"> -->
            <span class="mui-icon mui-icon-star colorRed">
              <span class="font14">8.4</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.app-Serialization-list {
  background-color: #f7fbfa;
  padding-top: 40px;
}
.app-Serialization-list .list-label {
  text-align: left;
  padding: 10px 15px;
  background-color: #ebf0f3;
}
.app-Serialization-list .mui-bar .mui-title {
  text-align: left;
  left: 10px;
  width: 100%;
}
/* .app-Serialization-list .list-content {
  height: 100%;
} */
.app-Serialization-list .search-input {
  width: 60%;
}
.app-Serialization-list .mui-input-clear {
  width: auto;
  height: 100%;
  border: none;
}
.app-Serialization-list .mui-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  height: 44px;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 0;
  background-color: #fff;
  /* -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .85);
    box-shadow: 0 0 1px rgba(0, 0, 0, .85); */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
/* swipe-ser-list swipe-ser-item */
.app-Serialization-list .swipe-ser-list {
  width: 100%;
  height: 100%;
  position: relative;
  /* padding: 0px 10px 10px 10px; */
}
.swipe-ser-list .swipe-ser-item {
  display: inline-block;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  /* border-bottom: 1px solid #ddd; */
  margin: 0;
  padding: 2px 10px 2px 15px;
  position: relative;
  /* -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(0, 0, 0, .5); */
}

.swipe-ser-list .swipe-ser-item::after {
 content: "";
  height: 1px;
  width: 500%;
  position: absolute;
  top: 100%;
  left: 0;
  bottom: 0;
  background-color: #ddd;
  border: 1rpx solid #ddd;
  -webkit-transform: scale(0.2); 
  transform: scale(0.2);
  -webkit-transform-origin: left top;
   transform-origin: left top; 
}

.right-clo {
  height: auto;
  display: flex;
  flex-direction: column;
  flex: 3.5;
  padding-left: 10px;
}
.swipe-ser-list .swipe-ser-item > img {
  height: 40px;
  width: 9%;
  margin: auto;
}
.ser-item-right {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 5px;
}
.ser-item-right p {
  text-align: left;
  line-height: 12px;
}
.font14 {
  font-size: 14px;
}
.font12 {
  font-size: 12px;
}
.font11 {
  font-size: 0.6rem;
}
.fontcolorblack {
  color: #000;
}
.colorRed {
  color: red;
}
.right-clo-star .mui-icon {
  font-size: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      pagecount: 1,
      list: []
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      var url = `${
        this.$router.baseurl
      }/readbookapi/getBykindname?kindname=历史&pageindex=${
        this.pageindex
      }&pagesize=7`;
      this.axios.get(url).then(res => {
        if (this.list.length > 1 && this.pageindex > 1) {
          this.list = this.list.concat(res.data.data);
        } else {
          this.list = res.data.data;
        }
        this.pagecount = parseInt(res.data.pagecount);
      });
    }
  },
  mounted() {
    var gallery = mui(".mui-slider");
    gallery.slider({
      interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  }
};
</script>
