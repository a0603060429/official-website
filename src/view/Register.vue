<template>
    <div class="page login-page">
      <div class="container d-flex align-items-center">
        <div class="form-holder has-shadow">
          <div class="row">
            <div class="col-lg-6">
              <div class="info d-flex align-items-center" style="align-items: center;">
                <div class="content">
                  <div class="logo">
                    <h1>欢迎注册</h1>
                  </div>
                </div>
              </div>
            </div>
            <!-- Form Panel    -->
            <div class="col-lg-6 bg-white">
              <div class="form d-flex align-items-center">
                <div class="content">
                    <form role="form" :model="info">
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="account">用户名:</label>
                            <div class="col-sm-8">
                                <input id="account" type="text"  v-model="info.account" name="account" placeholder="" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="password">密码:</label>
                            <div class="col-sm-8">
                                <input id="password" type="password" v-model="info.password" name="password" placeholder=""  class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="confirmPassword">确认密码:</label>
                            <div class="col-sm-8">
                                <input id="confirmPassword" type="password" v-model="info.confirmPassword" name="confirmPassword" placeholder="" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="username">お名前:</label>
                            <div class="col-sm-8">
                            <input id="userName" class="form-control" v-model="info.userName" type="text" name="userName" placeholder=""   >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="userName2">ふりがな:</label>
                            <div class="col-sm-8">
                            <input id="userName2" class="form-control" v-model="info.userName2" type="text" name="userName2" placeholder="" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="email">メールアドレス:</label>
                            <div class="col-sm-8">
                            <input id="email" class="form-control" v-model="info.email" name="email" placeholder=""   >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="phone">電話番号:</label>
                            <div class="col-sm-8">
                            <input id="phone" v-model="info.phone" class="form-control" type="text" name="phone" placeholder="" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="reserveTime">ご希望の時間:</label>
                            <div class="col-sm-8">
                            <input id="reserveTime" class="form-control input-material"  v-model="info.reserveTime" name="reserveTime" placeholder=""   >
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label" for="content">ご相談内容:</label>
                            <div class="col-sm-8">
                                <textarea class="form-control" v-model="info.content" rows="8" placeholder=""></textarea>
                                <!-- <textarea id="register-password" class="input-material" type="password" name="registerPassword" placeholder=""   > -->
                            </div>
                        </div>
                    </form>
                    <div class="form-group">
                        <button id="regbtn" @click="commit()" class="btn btn-primary">注册</button>
                    </div>
                    <div id="alert" v-show="visible" class="alert alert-danger" role="alert">
                      {{message}}
                    </div>
                  <small>已有账号?</small><a href="/#/login" class="signup">&nbsp;登录</a>
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
  name: "Register",
  data() {
    return {
      info: {
        account: '',
        password: '',
      },
      visible: false,
      message: ''
    };
  },
  methods: {
    async commit() {
        if (this.info.password !== this.info.confirmPassword) {
          this.message = "两次输入密码不一致"
          this.visible = true;
          setInterval(this.hide, 3000);
          return;
        }
        if (this.info.password == '') {
          this.message = "密码不能为空"
          this.visible = true;
          setInterval(this.hide, 3000);
          return;
        }
        if (this.info.account == '') {
          this.message = "用户名不能为空"
          this.visible = true;
          setInterval(this.hide, 3000);
          return;
        }

        

        let res = await api.register(this.info);
        if (res.data.code == 200) {
          this.$router.push({name:'Login'})
        } else {
          this.message = "注册失败，请稍后再试~"
          this.visible = true;
          setInterval(this.hide, 3000);
          return;
        }
    },
    hide() {
      this.message = ""
      this.visible = false
    }
  },
  mounted() {
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
    min-height: 120vh;
    z-index: 999;
    padding: 40px;
    position: relative;
}
.login-page .form-holder {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 50px;
}
.login-page .form-holder .info, .login-page .form-holder .form {
    min-height: 100vh;
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
    /* align-items: center; */
}
#regbtn {
    color: color-yiq(#796AEE);
    background-color: #796AEE;
    border-color: #796AEE;
}
.form-control {
  border: 1px solid #ccc;
}
</style>