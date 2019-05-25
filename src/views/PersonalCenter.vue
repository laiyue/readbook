<template>
  <div class="app-personal-center">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">
        我的
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">5</span>
        </span>
      </h1>
    </header>

    <div class="mui-content">
      <div class="user-info">
        <img :src="headImg" alt>
        <span class="nickname">{{nickname}}</span>
        <span class="mui-icon mui-icon-compose" @click="editinfo"></span>
      </div>
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
            <span class="mui-icon-extra mui-icon-extra-rank"></span>
            阅读时长
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
            <span class="mui-icon-extra mui-icon-extra-peoples"></span>
            关注的作者
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-university"></span>
            阅读评委
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-prech"></span>
            余额
          </a>
          <span class="mui-badge mui-badge-right">￥0.00</span>
        </li>
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-find"></span>
            推荐票
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
            <span class="mui-icon-extra mui-icon-extra-topic"></span>
            阅读报告
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a>
            <span class="mui-icon-extra mui-icon-extra-custom"></span>
            帮助中心
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a id="icon-gear">
            <span class="mui-icon mui-icon-gear"></span>
            设置
          </a>
        </li>
      </ul>
    </div>
    <bottom></bottom>
  </div>
</template>
<style>
.app-personal-center{
  font-size: 14px;
}
.app-personal-center .user-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-content: center;
  height: 3.75rem;
  line-height: 3.75rem;
  padding: 0.75rem;
  background-color: #fff;
}
.app-personal-center .user-info img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #42b983;
}
.app-personal-center .user-info span {
  line-height: 2.5rem;
  height: 2.5rem;
  color: #42b983;
}
.app-personal-center .user-info .nickname {
  margin-left: 1rem;
  vertical-align: middle;
  color: #42b983;
  border: 0px;
}

.app-personal-center .mui-table-view-cell {
  text-align: left;
}

.app-personal-center .mui-icon-extra {
  font-size: 18px;
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
.mui-title .mui-badge {
  background: #42b983;
  font-size: 9px;
  padding: 0px 4px;
}

.app-personal-center .mui-bar .mui-title .mui-icon-extra-cart {
  margin-left: 75%;
}
.app-personal-center .mui-badge-right {
  /* font-size: 12px; */
  line-height: 1;
  display: inline-block;
  padding: 0;
  color: #333;
  border-radius: 0;
  background: none;
}
</style>
<script>
import bottom from "../components/Bottom.vue";
export default {
  data() {
    return {
      nickname: "",
      headImg: ""
    };
  },
  created() {
    this.axios
      .get("http://laiycoder.com:3000/readbookapi/getuserinfo")
      .then(res => {
        console.log(res.data);
        if (res.data.msg == "请登录") {
          this.$router.push({ path: "login" });
        } else {
          this.nickname = res.data.user.nickname;
          this.headImg =
            "http://laiycoder.com:3000" +
            res.data.user.head_img.replace("/public", "");
        }
      });
  },
  methods: {
    editinfo() {
      this.$router.push({
        path: "/Editinfo",
        query: {
          nickname: this.nickname,
          head_img: this.headImg
        }
      });
    }
  },
  components: {
    bottom
  }
};
</script>