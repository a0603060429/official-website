<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <label style="font-size:30px">お問い合わせ</label>
      <!-- <img src="@/assets/img/logo_white.png" alt="logo图"> -->
    </div>
    <p class="title">お電話でのお問い合わせ</p>
    <p class="address_tel_fax">
      <span>TEL：03-5830-6228</span>
    </p>
    <p class="email_wx">
      <span>受付時間　10:00～19:00　　定休日　水曜日</span>
    </p>
    <p><span>※弊社指定の夏季・年末年始等の休日については、弊社HPのお知らせをご確認ください。</span></p>
    <!-- <p class="copy">Copyright &copy; 2018 - {{ new Date().getFullYear() }} 公司名称</p> -->
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  /* width: 95px; */
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

