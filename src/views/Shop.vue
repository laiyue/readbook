<template>
  <div class="app-shop">
    <div class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一个图文表格) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/003_115.png">
                <div class="mui-media-body">
                  <p>静静看这世界</p>
                  <p>作者</p>
                </div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/003_116.png">
                <div class="mui-media-body">
                  <p>静静看这世界</p>
                  <p>作者</p>
                </div>
              </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
              <a href="#">
                <img class="mui-media-object" src="../assets/images/003_117.png">
                <div class="mui-media-body">
                  <p>静静看这世界</p>
                  <p>作者</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.app-shop .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  width: 74px;
  height: 104px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    mui.init();
  }
};
</script>