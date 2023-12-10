<template>
  <div>
    <div id="wechat" @click="wechat()">
      <span class="glyphicon glyphicon-envelope"></span>
    </div>
    <div id="phone" @click="phone()">
      <span class="glyphicon glyphicon-earphone"></span>
    </div>
    <div id="GoTop" @click="GoTop()">
      <span class="glyphicon glyphicon-chevron-up"></span>
    </div>
    <div>
    <div id="wechartToast" v-show="wechatShow">
        <span style="padding-left: 50px;">微信</span><span @click="closeWechat" class="glyphicon glyphicon-remove close"></span>
        <div class="wechat_img">
          <img src="../assets/img/wechat2.png" class="rounded mr-2" alt="...">
        </div>
        <div style="text-align: center;">
          <span style="font-size:24px">missyouleo</span>
        </div>
    </div>
    <div id="phoneToast" v-show="phoneShow">
        <span>電話</span><span @click="closePhone" class="glyphicon glyphicon-remove close"></span>
        <div style="text-align: center;">
          <span style="font-size:14px">03-5830-6228</span>
        </div>
    </div>
    
</div>
  </div>
  
</template>
<script>
export default {
  name: "GoTopHome",
  data() {
    return {
      flag: false,
      wechatShow: false,
      phoneShow:false
    };
  },
  methods: {
    wechat() {
      this.wechatShow = true;
      this.phoneShow = false;
    },
    phone() {
      this.phoneShow = true;
      this.wechatShow = false;
    },
    GoTop() {
      this.phoneShow = false;
      this.wechatShow = false;
      // (function smoothscroll() {
      //   var currentScroll =
      //     document.documentElement.scrollTop || document.body.scrollTop;
      //   if (currentScroll > 0) {
      //     window.requestAnimationFrame(smoothscroll);
      //     window.scrollTo(0, currentScroll - currentScroll / 10);
      //   }
      // })();
      this.$emit('top-event', '');
      // this.$parent.toTop()
    },
    closeWechat() {
      this.wechatShow = false
    },
    closePhone() {
      this.phoneShow = false
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99999999;
  cursor: pointer;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
#GoTop > span {
  display: block;
  /* width: 100%;
  height: 100%; */
  color: rgb(8, 162, 233);
  font-size: 30px;
}
#phone {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 72px;
  z-index: 99999999;
  cursor: pointer;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
#phone > span {
  display: block;
  /* width: 100%;
  height: 100%; */
  color: rgb(8, 162, 233);
  font-size: 30px;
}
#wechat {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 124px;
  z-index: 99999999;
  cursor: pointer;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
#wechat > span {
  display: block;
  /* width: 100%;
  height: 100%; */
  color: rgb(8, 162, 233);
  font-size: 30px;
}
#wechartToast {
  background-color:#46b8da;
  width: 140px;
  height: 134x;
  z-index: 99999999;
  bottom: 20px;
  right: 72px;
  position: fixed;
}
#wechartToast > span {
  font-size: 18px;
  height: 26px;
} 
#wechartToast > img {
  height: 94px;
  width: 90px;
}
.wechat_img {
  display: flex;
  justify-content: center;
  width: 140px;
  height: 90px
}

#phoneToast {
  background-color: #46b8da;
  width: 140px;
  z-index: 99999999;
  bottom: 73px;
  right: 72px;
  position: fixed;
}
#phoneToast > span {
  font-size: 18px;

}
.close {
  margin-top: 3px;
  float: right;
}
</style>
