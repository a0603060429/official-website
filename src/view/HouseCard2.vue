<template>
    <div class="row" style="width: 100%;margin: 0 auto;background-color: #eee;">
        <div class="col-sm-6 col-md-4" style="display:flex;width:100%;flex-wrap:wrap;justify-content: center;gap: 0 50px;">
            <div v-for="(item,index) in dataList" :key="index" style="width:30%;height:320px;margin:20px 0">
                <div class="thumbnail" style="display:flex;height:100%;border-radius: 28px;box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);">
                    <div style="width:50%;height:100%;padding:10px;">
                        <img :src=item.image style="width:100%;height:100%;max-width:none;border-radius:12px;" alt="">
                    </div>
                    <div class="caption" style="width:50%;position: relative;">
                        <div>
                            <H4 class="col-sm-12"><b>{{item.name}}</b></H4>
                            <p class="col-sm-12">{{item.address}}</p>
                            <!-- <p>{{item.transportation}}</p> -->
                            <p class="col-sm-12" v-for="(k) in (item.transportation || '').split(',', 2)">{{k}}</p>
                            <span class="card_tag">間取&nbsp;&nbsp;&nbsp;{{item.floorPlan}}</span>
                            <span class="card_tag">専有面積&nbsp;&nbsp;&nbsp;{{item.area}}</span>
                            <span class="card_tag">所在階&nbsp;&nbsp;&nbsp;{{item.floor}}</span>
                            <span class="card_tag">築年数&nbsp;&nbsp;&nbsp;{{item.year}}</span>
                            <span class="card_tag">構造&nbsp;&nbsp;&nbsp;{{item.structure}}</span>
                        </div>
                        <div class="price_div">
                            <span class="price">
                                {{isPriceShow? '¥' + (item.price? item.price : '') : '¥&nbsp;????'}}
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
            <div id="d" v-if="isPlaceholderShow" style="width:30%;height:300px;margin:20px 0">
                <div class="thumbnail_noborder" style="display:flex;height:100%;">
                </div>
            </div>
            <div id="d" v-if="isPlaceholderShow2" style="width:30%;height:300px;margin:20px 0">
                <div class="thumbnail_noborder" style="display:flex;height:100%;">
                </div>
            </div>
            <button v-if="isLoginShow" type="button" class="btn btn-default login_btn" @click="toLogin">登录查看更多房产信息...</button>
        </div>
    </div>
</template>

<script>
import * as api from '../api/api'

export default {
  name: "",
  data() {
    return {
      dataList: [],
      isPlaceholderShow: false,
      isPlaceholderShow2:false,
      isPriceShow: false,
      isLoginShow: false
    }
  },
  created() {
    let token = localStorage.getItem('house_token');
    if (token) {
        this.isPriceShow = true
    } else {

    }
    this.loadData();
  },
  methods: {
    async loadData(){
        let res = await api.getRealEstateDatas({realEstateType:2});
        let datas = res.data.data.records
        if (!this.isPriceShow) {
            if (datas && datas.length >= 9) {
                this.isLoginShow = true
                datas = datas.slice(0,9);
            }
        }
        let length = datas.length
        if (length % 3 == 1) {
            this.isPlaceholderShow = true
            this.isPlaceholderShow2 = true
        }
        if (length % 3 == 2) {
            this.isPlaceholderShow2 = true
        }
        this.dataList = datas
    },
    toLogin() {
        this.$router.push({name:'Login'})
    }
  },
  mounted() {
    
  }
}


</script>

<style scoped>
.price_div {
    position: absolute;
    bottom: 10px;
    left: 20px;
}
.price {
    font-size: 24px;
    color: #287dfa;
    text-align: right;
    font-weight: bold;
    /* cursor: pointer; */
}
.thumbnail_noborder {
    display: block;
    padding: 4px;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #eee;
    border-radius: 4px;
    -webkit-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out;
}
.sp_text2{
    margin-left: 40px;
}
.tag_div {
    max-height: 44px;
    /* overflow: hidden; */
    margin-left: 14px;
}
.card_tag {
    display: inline-block;
    height: 18px;
    padding: 2px 4px;
    font-size: 12px;
    line-height: 1;
    color: #ff6f00;
    border-radius: 2px;
    border: 1px solid rgba(255,111,0,.5);
    box-sizing: border-box;
    margin-right: 8px;
    margin-bottom: 4px;
    margin-left: 14px;
}
.login_btn {
    background-color: rgb(40, 125, 250);
    color: rgb(255, 255, 255);
    font-size: 24px;
    padding: 14px;
    margin-bottom: 20px;
}
</style>
