<template>
  <div class="component-recommand">
    <div class="title">
      <button type="button" class="mui-btn">重磅推荐</button>
    </div>
    <div class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) of recommend_booklist" :key="i" >
             <router-link :to="'/ReadBookDetail/'+item.id">
                <img class="mui-media-object mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
                <div class="mui-media-body">
                  <p>
                    <b class="mui-ellipsis">{{item.book_title}}</b>
                    <br>
                    <span class="mui-ellipsis font12">{{item.book_author_names.replace(',','')}}</span>
                  </p>
                  <p class="mui-ellipsis">{{item.abstract}}</p>
                  <p class>

                    <span  v-for="(kind,j) of item.kind_names.substring(0,item.kind_names.lastIndexOf(',')).split(',')"
                    :key="j" class="bgcolorred"> {{kind}} </span>&nbsp;
                    <!-- <span class="bgcolorred">家庭故事</span> -->
                  </p>
                </div>
             </router-link>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="(item,i) of recommend_booklist" :key="i" >
             <router-link :to="'/ReadBookDetail/'+item.id">
                <img class="mui-media-object mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
                <div class="mui-media-body">
                  <p>
                    <b class="mui-ellipsis" >{{item.book_title}}</b>
                    <br>
                    <span class="mui-ellipsis font12">{{item.book_author_names.replace(',','')}}</span>
                  </p>
                  <p class="mui-ellipsis">{{item.abstract}}</p>
                  <p class>
                    <!-- <span class="bgcolorred">女性成长</span>&nbsp;
                    <span class="bgcolorred">家庭故事</span> -->
                    <span  v-for="(kind,j) of item.kind_names.substring(0,item.kind_names.lastIndexOf(',')).split(',')"
                    :key="j" class="bgcolorred"> {{kind}} </span>&nbsp;
                  </p>
                </div>
             </router-link>
            </li>
          </ul>
        </div>
        <div class="mui-slider-item">
          <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="(item,i) of recommend_booklist" :key="i" >
              <router-link :to="'/ReadBookDetail/'+item.id">
                <img class="mui-media-object mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
                <div class="mui-media-body">
                  <p>
                    <b class="mui-ellipsis" >{{item.book_title}}</b>
                    <br>
                    <span class="mui-ellipsis font12">{{item.book_author_names.replace(',','')}}</span>
                  </p>
                  <p class="mui-ellipsis">{{item.abstract}}</p>
                  <p class>
                    <!-- <span class="bgcolorred">女性成长</span>&nbsp;
                    <span class="bgcolorred">家庭故事</span> -->
                    <span  v-for="(kind,j) of item.kind_names.substring(0,item.kind_names.lastIndexOf(',')).split(',')"
                    :key="j" class="bgcolorred"> {{kind}} </span>&nbsp;
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view">
             <li class="mui-table-view-cell mui-media" v-for="(item,i) of recommend_booklist" :key="i" >
             <router-link :to="'/ReadBookDetail/'+item.id">
                <img class="mui-media-object mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
                <div class="mui-media-body">
                  <p>
                    <b class="mui-ellipsis" >{{item.book_title}}</b>
                    <br>
                    <span class="mui-ellipsis font12">{{item.book_author_names.replace(',','')}}</span>
                  </p>
                  <p class="mui-ellipsis">{{item.abstract}}</p>
                  <p class>

                    <span  v-for="(kind,j) of item.kind_names.substring(0,item.kind_names.lastIndexOf(',')).split(',')"
                    :key="j" class="bgcolorred"> {{kind}} </span>&nbsp;
                    <!-- <span class="bgcolorred">家庭故事</span> -->
                  </p>
                </div>
             </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <br>
    <!-- 签约新作 -->
    <div class="Signing">
      <div class="signing-title">
        <p>
          <span>签约新作</span>
          <span>
            <router-link to="/Book/历史">更多</router-link>
            <span class="mui-icon mui-icon-arrowright"></span>
          </span>
        </p>
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,i) of booklist" :key="i">
          <router-link :to="'/ReadBookDetail/'+item.id">
            <img class="mui-media-object mui-pull-left" v-lazy="item.img_url" :src="item.img_url">
            <div class="mui-media-body">
              <p>
                <b class="mui-ellipsis">{{item.book_title}}</b>
                <br>
              </p>
              <p class="mui-ellipsis">推荐语：{{item.abstract}}</p>

              <p class="three">
                <span class="three-author mui-ellipsis">{{item.book_author_names.replace(',','')}}</span>
                &nbsp;
                <a href="#">
                  <span
                    v-for="(kind,j) of item.kind_names.substring(0,item.kind_names.lastIndexOf(',')).split(',')"
                    :key="j"
                    class="bgcolorwhite"
                  >{{kind}}</span>
                  &nbsp;
                  <span class="bgcolorange">新作</span>
                </a>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      booklist: [
        {
          book_title: "",
          book_author_names: "",
          img_url: "",
          abstract: "",
          kind_names: "",
          book_id: ""
        }
      ],
      recommend_booklist: [
        {
          book_title: "",
          book_author_names: "",
          img_url: "",
          abstract: "",
          kind_names: "",
          book_id: ""
        }
      ]
    };
  },
  created() {
    this.getRecommends();
  },
  methods: {
    getbooklist() {
      var url = `${
        this.$router.baseurl
      }/readbookapi/getBykindname?kindname=历史&pageindex=3&pagesize=3`;
      this.axios.get(url).then(res => {
        this.booklist = res.data.data;
      });
    },
    getRecommends() {
      var url = `${
        this.$router.baseurl
      }/readbookapi/getBykindname?kindname=历史&pageindex=1&pagesize=2`;
      this.axios.get(url).then(res => {
        this.recommend_booklist = res.data.data;
      });
    }
  },
  mounted() {
   
    var gallery = mui(".mui-slider");
    gallery.slider({
      interval: 0 //自动轮播周期，若为0则不自动播放，默认为0；
    });
     this.getbooklist();
    
  }
};
</script>

<style scoped>
.component-recommand {
  height: auto;
}
.component-recommand .mui-table-view {
  background: #f7fbfa;
}
.component-recommand .mui-slider {
  background: #f7fbfa;
  padding-bottom: 15px;
}
.component-recommand .title {
  text-align: left;
  padding: 0px 15px 0px 15px;
  background: #f7fbfa;
}

.component-recommand .title button {
  height: 25px;
  margin: 0px;
  font-size: 0.75rem;
  background: #bb996c;
  border: none;
  color: #fff;
}

.component-recommand .mui-table-view-cell {
  height: 140px;
  padding: 10px;
}
.Signing {
  background: #f7fbfa;
}
.Signing .mui-table-view-cell {
  height: 115px;
}
.bgcolorange {
  background: orange;
  color: #fff;
}
.bgcolorwhite {
  background: #fff;
  color: #000;
}
.Signing .three {
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
}
.Signing .three {
  font-size: 0.75rem;
}
.Signing .three a span {
  border-radius: 20px;
  padding: 2px 5px;
}
.signing-title {
  color: #7cd4be;
  padding: 0px 15px;
  padding-top: 20px;
  background: #f7fbfa;
}
.signing-title p {
  margin: 0px;
}
.signing-title span:nth-child(1) {
  color: #000;
  font-weight: 1000;
}
.signing-title span:nth-child(2) {
  color: #7cd4be;
  font-size: 0.75rem;
}
.signing-title span:nth-child(2) .mui-icon {
  font-size: 1rem;
  color: #7cd4be;
}
.signing-title p {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.component-recommand .mui-table-view .mui-media-object {
  line-height: 100px;
  max-width: 65px;
  height: 100px;
  margin: 10px;
}

.component-recommand .mui-table-view .mui-media,
.mui-table-view .mui-media-body {
  overflow: hidden;
  text-align: left;
  padding: 10px 10px 0px 10px;
}
.component-recommand .mui-ellipsis {
  /* overflow: hidden; */
  white-space: normal;
  font-size: 12px;
  color: #000;
  max-height: 42px;
}
.component-recommand .bgcolorred {
  background: crimson;
  color: #fff;
  padding: 2px 3px;
  font-size: 0.75rem;
}
.component-recommand .mui-table-view:before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 0;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
.component-recommand .mui-table-view-cell:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 15px;
  height: 0;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  background-color: #c8c7cc;
}
</style>