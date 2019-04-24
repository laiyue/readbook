<template>
  <div class="app-personal-center">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">我的
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart ">
              <span class="mui-badge">5</span></span>
              </h1>
    </header>
    <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-notice"></span> 提醒
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-rank"></span> 阅读时长
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-custom"></span>
            订阅的专栏连载
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-cart"></span>
            购买的电子书
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
            喜欢的短篇
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-peoples"></span>关注的作者
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-university"></span>阅读评委
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-prech"></span>余额
          </a>
          <span class="mui-badge mui-badge-right">￥0.00</span>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-find"></span>推荐票
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-gift"></span>
            礼券
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-gift"></span>
            礼物
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-topic"></span>阅读报告
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-custom"></span>帮助中心
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a id="icon-gear"><span class="mui-icon mui-icon-gear"></span>设置</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.app-personal-center .mui-table-view-cell {
  text-align: left;
}
.app-personal-center .mui-table-view {
  margin: 15px 0px;
}
.app-personal-center .mui-table-view:before {
  height: 0;
}
.app-personal-center .mui-table-view:after {
  height: 0;
}
 .app-personal-center .mui-bar .mui-title {
  text-align: left;
  left: 10px;
  width: 100%;
}
.mui-title .mui-badge{
    background: #42b983;
    font-size: 9px;
    padding: 0px 4px;
}


.app-personal-center .mui-bar .mui-title .mui-icon-extra-cart{
   margin-left:75%; 
}
 .app-personal-center .mui-badge-right {
    /* font-size: 12px; */
    line-height: 1;
    display: inline-block;
    padding: 0;
    color: #333;
    border-radius: 0;
    background:none;
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>