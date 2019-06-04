<template>
  <div class="component-tableft">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">
        <span class="mui-icon mui-icon-arrowthinleft" @click="goback"></span>分类
      </h1>
    </header>
    <div class="mui-content mui-row mui-fullscreen">
      <div class="mui-col-xs-3">
        <div
          id="segmentedControls"
          class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
        >
          <a
            href="#"
            class="mui-control-item"
            v-for="(item,index) of typeList"
            :key="index"
          >{{item.typename}}</a>
          <!-- <a href="#" class="mui-control-item">中文电子书</a>
          <a href="#" class="mui-control-item">英文电子书</a>-->
        </div>
      </div>
      <div
        id="segmentedControlContents"
        class="mui-col-xs-9"
        style="border-left: 1px solid #c8c7cc;"
      >
        <div class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">全部原创写作</li>
            <li
              class="mui-table-view-cell"
              v-for="(item,index) of typeList[0].childrens"
              :key="index"
            >{{item.typename}}</li>
            <!-- <li>言情女性小说</li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mui-row.mui-fullscreen > [class*="mui-col-"] {
  height: 100%;
}

.mui-col-xs-3,
.mui-col-xs-9 {
  overflow-y: auto;
  height: 100%;
}

.mui-segmented-control .mui-control-item {
  line-height: 50px;
  width: 100%;
}

.mui-control-content {
  display: block;
}

.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  background-color: #fff;
}
.component-tableft .mui-bar .mui-title {
  text-align: left;
  left: 10px;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      typeList: [
        {
          typename: "原创写作",
          childrens: [
            { typename: "悬疑小说", count: 3462 },
            { typename: "言情女性小说", count: 3735 },
            { typename: "科幻幻想小说", count: 5836 },
            { typename: "文艺小说", count: 6355 },
            { typename: "青春小说", count: 2306 },
            { typename: "都市小说", count: 2354 },
            { typename: "武侠小说", count: 810 },
            { typename: "历史小说", count: 907 },
            { typename: "故乡小说", count: 918 },
            { typename: "职业故事", count: 270 },
            { typename: "非小说", count: 8934 }
          ]
        },
        {
          typename: "中文电子书",
          childrens: [
            { typename: "小说", count: 10660 },
            { typename: "文学", count: 10189 },
            { typename: "人文社科", count: 9927 },
            { typename: "经济管理", count: 6299 },
            { typename: "科技科普", count: 1775 },
            { typename: "计算机与互联网", count: 3285 },
            { typename: "成功励志", count: 2292 },
            { typename: "生活", count: 2256 },
            { typename: "少儿", count: 1865 },
            { typename: "艺术设计", count: 1833 },
            { typename: "漫画绘本", count: 734 },
            { typename: "教育考试", count: 1931 },
            { typename: "杂志", count: 1999 }
          ]
        },
        {
          typename: "英文电子书",
          childrens: [
            {
              typename: "文学与小说",
              count: 3855,
              en_typename: "Literature&Fiction"
            },
            {
              typename: "传记",
              count: 780,
              en_typename: "Biographies"
            },
            {
              typename: "人文社科",
              count: 767,
              en_typename: "History,Philosophy&SocialSciences"
            },
            {
              typename: "商业管理与经济学",
              count: 242,
              en_typename: "Business&Economics"
            },
            {
              typename: "自助励志",
              count: 458,
              en_typename: "Self-help&Motivation"
            },
            {
              typename: "计算机与互联网",
              count: 15,
              en_typename: "Computer&Internet"
            },
            {
              typename: "科学与技术",
              count: 169,
              en_typename: "Science&Technology"
            },
            {
              typename: "儿童与青少年读物",
              count: 1181,
              en_typename: "Children,Teen&YoungAdult's eBooks"
            },
            {
              typename: "健康，家庭与生活方式",
              count: 704,
              en_typename: "Health,Family&Lifestyle"
            },
            {
              typename: "艺术",
              count: 384,
              en_typename: "Art"
            },
            {
              typename: "旅行",
              count: 57,
              en_typename: "Travel"
            },
            {
              typename: "运动与户外",
              count: 136,
              en_typename: "运动与户外"
            }
          ]
        }
      ]
    };
  },
  created() {},
  methods:{
    goback(){
      this.$router.push({path:"/home"});
    }
  }

};
</script>


