<template>
 <div class="page login-page">
    <div class="container d-flex align-items-center">
        <div class="form-holder has-shadow">
            <div class="row">
                <div class="col-lg-6">
                    <div class="info d-flex align-items-center">
                        <div class="content">
                            <div class="logo">
                            <h1>欢迎登录</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 bg-white">
                    <div class="form d-flex align-items-center">
                        <div class="content">
                            <form role="form" :model="userInfo">
                              <div class="form-group">
                                  <label for="username">用户名</label>
                                  <br />
                                  <input id="username" type="text" name="userName" v-model="userInfo.userName" placeholder="用户名" class=" form-control">
                              </div>
                              <div class="form-group">
                                  <label for="password">密码</label>
                                  <br />
                                  <input id="password" type="password" name="password" required v-model="userInfo.password" data-msg="请输入密码" placeholder="密码" class=" form-control">
                              </div>
                            </form>
                            <div id="alert" v-show="visible" class="alert alert-danger" role="alert">
                                {{message}}
                              </div>
                            <button id="login" @click="commit()" class="btn btn-primary">登录</button>
                            <br />
                            <small>没有账号?</small><a href="/#/register" class="signup">&nbsp;注册</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import * as api from '../api/api'
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        userName: '',
        password: '',
      },
      visible:false,
      message: ''
    };
  },
  methods: {
    async commit() {
      console.log(this.userInfo)
      let res = await api.login(this.userInfo);
      console.log(res)
      // alert("提交成功")
      if (res.data.code == 200) {
        let token = res.data.data
        this.$store.commit('setToken', token)
        this.$router.push({name:'home'})
      } else {
        this.message = "用户名或密码错误"
        this.visible = true;
        setInterval(this.hide, 3000);
      }
    },
    hide() {
      this.message = ""
      this.visible = false
    }
  },
  mounted() {
    // var map = new BMap.Map("map"); // 创建地图实例
    // var point = new BMap.Point(116.301841,40.156506); // 创建点坐标
    // map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var marker = new BMap.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中
    // var opts = {
    //   width: 50, // 信息窗口宽度
    //   height: 10, // 信息窗口高度
    //   title: "黄元公寓" // 信息窗口标题
    // };
    // var infoWindow = new BMap.InfoWindow(
    //   "我的家",
    //   opts
    // ); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    // var wow = new WOW();
    // wow.init();
  }
};
</script>
<style scoped>
.page {
    background: #EEF5F9;
}
.login-page {
    position: relative;
}
.login-page::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    background: url(../assets/img/p_big3.jpg);
    background-size: cover;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
}
.login-page .container {
    min-height: 100vh;
    z-index: 999;
    padding: 100px;
    position: relative;
}
.login-page .form-holder {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 50px;
}
.login-page .form-holder .info, .login-page .form-holder .form {
    min-height: 70vh;
    padding: 40px;
    height: 100%;
}
.login-page .form-holder div[class*='col-'] {
    padding: 0;
}

.login-page .form-holder .info {
  background: rgba(121, 106, 238, 0.9);
  color: #fff;
}

.login-page .form-holder .info h1 {
  font-size: 2.5em;
  font-weight: 600;
}

.login-page .form-holder .info p {
  font-weight: 300;
}

.login-page .form-holder .form .form-group {
  position: relative;
  margin-bottom: 30px;
}

.login-page .form-holder .form .content {
  width: 100%;
}

.login-page .form-holder .form form {
  width: 100%;
  max-width: 400px;
}

.login-page .form-holder .form #login, .login-page .form-holder .form #register {
  margin-bottom: 20px;
  cursor: pointer;
}

.login-page .form-holder .form a.forgot-pass, .login-page .form-holder .form a.signup {
  font-size: 0.9em;
  color: #85b4f2;
}

.login-page .form-holder .form small {
  color: #aaa;
}

.login-page .form-holder .form .terms-conditions label {
  cursor: pointer;
  color: #aaa;
  font-size: 0.9em;
}

.login-page .copyrights {
  width: 100%;
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
}

@media (max-width: 991px) {
  .login-page .info, .login-page .form {
    min-height: auto !important;
  }
  .login-page .info {
    padding-top: 100px !important;
    padding-bottom: 100px !important;
  }
}
.bg-white {
  background: #fff !important;
}
.d-flex {
    display: flex;
    align-items: center;
}
#login {
    color: color-yiq(#796AEE);
    background-color: #796AEE;
    border-color: #796AEE;
}
.form-control {
  border: 1px solid #ccc;
}
</style>