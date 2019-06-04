<template>
  <div class="app-login">
    <!-- <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">登录</h1>
    </header>-->
    <div class="mui-content">
      <br>
      <h6 class="title">使用豆瓣账号登录</h6>
      <br>
      <div class="mui-input-row">
        <input
          type="text"
          v-model="
        nickname"
          class="color_01 font_c_01"
          placeholder="邮箱/手机号"
        >
      </div>
      <div class="mui-input-row">
        <input type="password" v-model="pwd" class="color_01 font_c_01" placeholder="密码">
      </div>
      <div class="content-right">
        <a id="forgetPassword">忘记密码?</a>
      </div>
      <div class="mui-content-padded">
        <input type="button" @click="login" class="loginbutton" value="登录">
        <br>
        <div class="link-area">
          <a id="reg">注册账号</a>
          <span class="spliter">
            |
            <a href>直接使用</a>
          </span>
        </div>
      </div>
      <div class="mui-content-padded oauth-area">
        <h6 class="font_c_01">使用第三方账号登录</h6>
        <br>
        <img src="../assets/images/icon_ww.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      nickname: "",
      pwd: ""
    };
  },
  created(){
    
  },
  methods: {
    login() {
      if (this.nickname != "" && this.pwd != "") {
        var url = `http://laiycoder.com:3000/readbookapi/login?nickname=${
          this.nickname
        }&pwd=${this.pwd}`;
        this.axios(url).then(res => {
          console.log(res.data);
          if(res.data.code===-1){
            Toast("用户名或密码错误");
          }else if(res.data.code===1){
            this.$router.push({ path: "home" });
          }
        });
      } else {
        Toast("用户名与密码不能为空");
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #f7f9f8;
  font-size: 0.9rem;
}
.app-login,
a,
span,
h1,
button {
  color: #68aab6;
  background-color: #f7f9f8;
}
.mui-content {
  background-color: #f7f9f8;
  height: 100%;
}
.content-right {
  text-align: right;
  margin-right: 5%;
}
.content-right a {
  color: #757575;
}
.color_01 {
  background-color: #e7eded;
}
.font_c_01 {
  color: #bec1c2;
}

.mui-input-row input {
  border: none;
  width: 90%;
  height: 40px;
  /* font-size: 13px; */
}
.mui-content-padded .loginbutton {
  width: 85%;
  height: 40px;
  color: #fff;
  background-color: #68aab6;
  border: none;
  margin: 10px;
}
.link-area .spliter {
  margin: 5px;
}
.link-area .spliter a {
  margin-left: 5px;
}
.title {
  color: #000;
}

.oauth-area {
  position: fixed;
  top: 450px;
  left: 50%;
  transform: translate(-53%, 0);
}

/* .app-login .mui-input-row .mui-input-clear ~ .mui-icon-clear, .mui-input-row .mui-input-speech ~ .mui-icon-speech, .mui-input-row .mui-input-password ~ .mui-icon-eye {
    font-size: 20px;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 30px;
    width: 38px;
    height: 38px;
    text-align: center;
    color: #999;
} */
.app-login .mui-password>span{
   /* right: 30px; */
   line-height: 0;
}

</style>
