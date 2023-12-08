<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">
      <label style="margin-top:15px">フォームでのお問い合わせ</label>
      <label style="font-size:20px">下記フォームにご入力の上、ご送信ください。</label>
      <label style="font-size:20px">後ほど弊社スタッフからご返信させていただきます。</label>
    </div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form" :model="info">
              <div class="form-group">
                <label for="name" class="col-sm-4 control-label">お名前</label>
                <div class="col-sm-8 col-xs-10">
                  <input type="text" class="form-control" id="name" v-model="info.userName" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="name" class="col-sm-4 control-label">ふりがな</label>
                <div class="col-sm-8 col-xs-10">
                  <input type="text" class="form-control" id="name" v-model="info.userName2" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-4 control-label">メールアドレス</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" v-model="info.email" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-4 control-label">電話番号</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" v-model="info.phone" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-4 control-label">ご希望の時間</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" v-model="info.reserveTime" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-4 control-label">ご相談内容</label>
                <div class="col-sm-8">
                  <textarea class="form-control" v-model="info.content" rows="8" placeholder=""></textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-offset-2 col-sm-10 control-label">当社個人情報に同意いただける場合は「同意する」にチェックを付け「入力内容の確認」ボタンをクリックしてください。</label>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-4 col-sm-8">
                  <button type="submit" @click="commit" class="btn btn-primary btn-block">入力内容の確認</button>
                </div>
              </div>
            </form>
          </div>          
          <!-- <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import * as api from '../api/api'
export default {
  name: "ContactUs",
  data() {
    return {
      info: {
        userName: ''
      }
    };
  },
  methods: {
    async commit() {
      let res = await api.addContact(this.info);
      alert("提交成功")
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
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  /* line-height: 150px; */
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  display: flex;
  flex-direction: column;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

