<template>
    <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <HeaderHome></HeaderHome>
        <div class="swiper_png">
          <div class="swiper_content">
            <h1>不動産のことならニューフロントにお任せください</h1>
            <p>不動産買取・再販・賃貸の専門家マンション・一戸建・土地・投資用ビル等</p>
          </div>
        </div>
      </div>
      <div class="section">
          <div class="company">
            <!-- <div class="company_left">
                <img class="company_img" src="@/assets/img/img1.jpg" alt="">
            </div> -->
            <div class="company_right">
              <h2 class="company_introduce">
                会社概要
              </h2>
              <p>会社名：株式会社ニューフロントNewfront Co.,LTD</p>
              <p>中文社名：新岸线房产投资有限公司</p>
              <p>所在地：〒100-0005東京都台東区上野7-7-11伸栄ビル</p>
              <p>TEL：03-5830-6228</p>
              <p>TEL：03-5830-6228</p>
              <p>会社設立：2011年8月31日</p>
              <p>代表者：代表取締役　牛　建強</p>
              <p>資本金：2,000万円</p>
              <p>免許番号：東京都知事（2）第100125号</p>
              <p>所属協会：公益社団法人全日本不動産協会東京都本部</p>
              <p>取引銀行:	三井住友銀行上野支店</p>
              <p>三井住友銀行上野支店</p>
              <p>事業内容：</p>
              <p>不動産売買及び仲介</p>
              <p>不動産賃貸及び仲介</p>
              <p>不動産コンサルティング業</p>
              <p>不動産管理</p>
              <p>インボイス登録番号T5013201018383</p>
              <a href="/#/contactus?index=6" class="btn btn-lg btn-info">联系我们</a>
            </div>
          </div>
      </div>
      <div class="section">
        <div class="section3_title text-center">
          <p>代表挨拶</p>
        </div>
        <div class="represent">
          <div>
            <p>株式会社にニューフロントのホームページにお越し頂き、誠にありがとうございます。</p>
            <p>まず、株式会社にニューフロントの代表として、これまで当社の成長にご尽力頂いた皆様、そして当社にご興味頂いた皆様に心より感謝と敬意を表します。</p>
            <p>株式会社にニューフロントは創業以来、世界最大3700万人の東京都市圏の有用な不動産情報を、中華圏を中心としたアジアの不動産投資家の皆様に提供することに注力することで、お客様の資産価値最大化に努めてまいりました。東京の不動産を購入することは、アジアの不動産投資家の皆様にとって最も有効な資産運用だと言っても過言ではないと思います。一方で、投資家の皆様は土地勘がない中において大きな不安を抱いているのも事実です。</p>
            <p>それだけに当社は、単に情報提供や物件説明などに限らず、人間としての魅力、つまり誠実さと正義感、そして高い倫理観をもち、いかに信頼に値する企業であるかどうかが求められていると考えております。</p>
            <p>当社の経営理念である「不動産を通じて日本とアジア諸国の架け橋になる」を念頭にお客様の立場に立った誠心誠意の対応を実践することが、お客様にとって付加価値の高いサービスに繋がることと信じております。</p>
            <p>当社は今後も強いチャレンジスピリットを持ち続け、GDP世界2位と3位である中国と日本の架け橋となる道を確かなものにしたいと思っています。不動産業界はマーケット環境の変化が激しい分野であり、当社は、激的な時代の移り変わりや環境変化に対応するため、確固たる継続企業としての地位を確立し、更なる進化発展を遂げていきたいと考えています。</p>
            <p>今後、当社は、アジアの国際資本を有効に運用しながら、新たなビジネスチャンスを開拓していきます。アジアの不動産投資家の皆様が期待する「収益性の高い物件提供」と「クオリティの高い賃貸管理」を両輪として、お客様利益最大化のために、弛まぬ努力をし続ける所存です。</p>
            <p>何卒、今後とも変わらぬご指導ご鞭撻を賜りますよう宜しくお願い申し上げます。</p>
          </div>
          <div>
            <img src="../assets/img/represent.jpg" />
          </div>
        </div>
        <!-- <div class="represent">
                  <p>株式会社にニューフロントのホームページにお越し頂き、誠にありがとうございます。</p>
            <p>まず、株式会社にニューフロントの代表として、これまで当社の成長にご尽力頂いた皆様、そして当社にご興味頂いた皆様に心より感謝と敬意を表します。</p>
          <p>株式会社にニューフロントは創業以来、世界最大3700万人の東京都市圏の有用な不動産情報を、中華圏を中心としたアジアの不動産投資家の皆様に提供することに注力することで、お客様の資産価値最大化に努めてまいりました。東京の不動産を購入することは、アジアの不動産投資家の皆様にとって最も有効な資産運用だと言っても過言ではないと思います。一方で、投資家の皆様は土地勘がない中において大きな不安を抱いているのも事実です。
            それだけに当社は、単に情報提供や物件説明などに限らず、人間としての魅力、つまり誠実さと正義感、そして高い倫理観をもち、いかに信頼に値する企業であるかどうかが求められていると考えております。　
            当社の経営理念である「不動産を通じて日本とアジア諸国の架け橋になる」を念頭にお客様の立場に立った誠心誠意の対応を実践することが、お客様にとって付加価値の高いサービスに繋がることと信じております。　
当社は今後も強いチャレンジスピリットを持ち続け、GDP世界2位と3位である中国と日本の架け橋となる道を確かなものにしたいと思っています。不動産業界はマーケット環境の変化が激しい分野であり、当社は、激的な時代の移り変わりや環境変化に対応するため、確固たる継続企業としての地位を確立し、更なる進化発展を遂げていきたいと考えています。　
今後、当社は、アジアの国際資本を有効に運用しながら、新たなビジネスチャンスを開拓していきます。アジアの不動産投資家の皆様が期待する「収益性の高い物件提供」と「クオリティの高い賃貸管理」を両輪として、お客様利益最大化のために、弛まぬ努力をし続ける所存です。　
何卒、今後とも変わらぬご指導ご鞭撻を賜りますよう宜しくお願い申し上げます。　
          </p>
        </div> -->
      </div>
      <div class="section">
          <div class="section3_title text-center">
            <p>事業案内</p>
          </div>
          <div
            class="col-xs-12 col-sm-6 col-md-3"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <!-- <img class="center-block" :src="item.logo" alt="logo"> -->
              <!-- <p class="text-center">{{item.title}}</p> -->
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>  
          <Footer></Footer>
      </div>
  </full-page>
  <GoTopHome @top-event="toTop"></GoTopHome>
    </div>
</template>
<script>
export default {
    name: 'PageView',
    data() {
        return {
          options: {
            licenseKey: 'YOUR_KEY_HERE',
            afterLoad: this.afterLoad,
            scrollOverflow: true,
            scrollBar: false,
            menu: '#menu',
            navigation: true,
            anchors: ['home'],
            sectionsColor: ['#eee', '#eee', '#eee', '#eee', '#eee', '#eee', '#eee', '#eee', '#eee']
            },
          serverList: [
            {
              logo: require("@/assets/img/tel.png"),
              title: "核心优势1",
              content: "<p>1.不動産売買及び仲介</p><p>投資用不動産</p><p>居住用不動産</p>"
            },
            {
              logo: require("@/assets/img/computer.png"),
              title: "核心优势2",
              content: "<p>2.不動産賃貸及び仲介</p><p>&nbsp</p><p>&nbsp</p>"
            },
            {
              logo: require("@/assets/img/qq.png"),
              title: "核心优势3",
              content: "<p>3.不動産コンサルティング業</p><p>&nbsp</p><p>&nbsp</p>"
            },
            {
              logo: require("@/assets/img/skill.png"),
              title: "核心优势4",
              content: "<p>4.不動産管理</p><p>&nbsp</p><p>&nbsp</p>"
            }
          ]
        }
    },
    methods: {
      toTop() {
        this.$refs.fullpage.api.moveTo('home', 0)
      }
    }
}
</script>
<style scoped>
.swiper_png {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 160px;
  background-image: url(../assets/img/banner1.png);
  background-position: center; /* 居中显示 */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper_content {
  width: 100%;
  color: #ffffff;
  /* margin-top: -200px; */
  background: rgba(51,51,51,.534);
  height: 100%;
  text-align: center;
}
.swiper_content h1 {
  margin-top: 15%;
  font-size: 50px;
}
.swiper_content p {
  font-size: 20px;
  margin-top: 40px;
}
.company {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
}
.company_left {
  flex: 1;
}
.company_left img {
    padding: 100px;
    width: 100%;
    height: 100%;
}
.company_introduce{
  margin: 50px 0;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.company_right {
  flex: 1;
}
.company_right a {
  width: 20%;
}
.section3_title {
  margin: 50px 0;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.section3_content {
  display: flex;
}
.text-center {
  text-align: center;
}
.server-block {
  margin-bottom: 50px;
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
.server-block img {
  width: 48px;
  height: 48px;
}
.server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
.server-block > div {
  color: #ccc;
}
.represent {
  display: flex;
  padding: 0 20%;
}
.represent p {
  text-indent: 2em;
}
</style>

