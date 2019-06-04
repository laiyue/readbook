<template>
  <div class="app-Serialization-list">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">
       
        <span class="mui-icon mui-icon-arrowthinleft" @click="goback"></span>
      </h1>
       <div class="mui-search">
          <input type="search" class="mui-input-clear" placeholder>
        </div>
    </header>

    <div class="list-content">
      <!-- <div class="mui-input-row mui-search">
      <input type="search" class="mui-input-clear" placeholder>
      </div>-->
      <mt-swipe class="mint-swipe" :auto="0">
        <mt-swipe-item>
          <div class="swipe-ser-list">
            <div class="swipe-ser-item">
              <img src="../assets/images/003_2.png">
              <div class="ser-item-right">
                <div class="right-clo">
                  <p class="font14 fontcolorblack">山青卷白云：女翻译与王维</p>
                  <p class="font12">青溪客</p>
                </div>
                <div class="right-clo-star">
                  <!-- <a id="icon-star"> -->
                  <span class="mui-icon mui-icon-star colorRed">
                    <span class="font14">8.4</span>
                  </span>
                  <!-- </a> -->
                  <!-- <p>8.4</p> -->
                </div>
              </div>
            </div>
            <div class="swipe-ser-item">
              <img src="../assets/images/003_2.png">
              <div class="ser-item-right">
                <div class="right-clo">
                  <p class="font14 fontcolorblack">山青卷白云：女翻译与王维</p>
                  <p class="font12">青溪客</p>
                </div>
                <div class="right-clo-star">
                  <!-- <a id="icon-star"> -->
                  <span class="mui-icon mui-icon-star colorRed">
                    <span class="font14">8.4</span>
                  </span>
                  <!-- </a> -->
                  <!-- <p>8.4</p> -->
                </div>
              </div>
            </div>
            <div class="swipe-ser-item">
              <img src="../assets/images/003_2.png">
              <div class="ser-item-right">
                <div class="right-clo">
                  <p class="font14 fontcolorblack">山青卷白云：女翻译与王维</p>
                  <p class="font12">青溪客</p>
                </div>
                <div class="right-clo-star">
                  <!-- <a id="icon-star"> -->
                  <span class="mui-icon mui-icon-star colorRed">
                    <span class="font14">8.4</span>
                  </span>
                  <!-- </a> -->
                  <!-- <p>8.4</p> -->
                </div>
              </div>
            </div>
            <div class="swipe-ser-item">
              <img src="../assets/images/003_2.png">
              <div class="ser-item-right">
                <div class="right-clo">
                  <p class="font14 fontcolorblack">山青卷白云：女翻译与王维</p>
                  <p class="font12">青溪客</p>
                </div>
                <div class="right-clo-star">
                  <!-- <a id="icon-star"> -->
                  <span class="mui-icon mui-icon-star colorRed">
                    <span class="font14">8.4</span>
                  </span>
                  <!-- </a> -->
                  <!-- <p>8.4</p> -->
                </div>
              </div>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style>
.app-Serialization-list {
  height: 330px;
  background-color: #fff;
  margin: 10px auto;
}
.app-Serialization-list .mui-bar .mui-title {
  text-align: left;
  left: 10px;
  width: 100%;
}
.app-Serialization-list .list-content {
  height: 100%;
  margin-top: 44px;
}
.app-Serialization-list .search-input {
  width: 60%;
}
.app-Serialization-list div .mint-swipe {
  height: 100%;
}
.app-Serialization-list .mint-swipe-item,
.app-Serialization-list.is-active {
  /* width: 100%; */
  display: flex;
  justify-content: center;
}
/* swipe-ser-list swipe-ser-item */
.mint-swipe-item .swipe-ser-list {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
}
.mint-swipe-item .swipe-ser-list .swipe-ser-item {
  display: inline-block;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  margin: 10px 0;
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
    return {};
  },
  methods: {
    goback() {
      this.$router.push({ path: "/home" });
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
