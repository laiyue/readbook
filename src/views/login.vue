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
        <input type="text" class="color_01 font_c_01" placeholder="邮箱/手机号">
      </div>
      <div class="mui-input-row mui-password">
        <input type="password" class="mui-input-password color_01 font_c_01" placeholder="密码">
      </div>
      <div class="content-right">
        <a id="forgetPassword">忘记密码?</a>
      </div>
      <div class="mui-content-padded">
        <input type="button" class="loginbutton" value="登录">
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
        <img src="../assets/images/icon_ww.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.oauth-area{
  position: absolute;
  top:75%;
  left: 50%;
 transform: translate(-53%,0);
}
</style>
