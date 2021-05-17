
<template>
  <div class="appointment">
    <!-- 预约菜单 -->
    <div class="top_main" @click="goAppointment">
        <div class="top_title">我的排号凭证</div>
        <img :src="banner">
        <div class="top_title_empty"></div>
    </div>

    <!-- 业务列表 -->
    <div class="businessWrap">
      <div class="dateNav">
        <div class="title">业务排号选择</div>
        <div class="timeSelect" @click="selectTime">
          <span>{{dateTime}}</span>
          <van-icon size="16px" name="calendar-o" />
        </div>
      </div>
      <div class="businessList">
        <BusinessItem @click.native="confirmBusiness(item.bussType)" v-for="(item,index) of dataList" :key="index"
          :kindPicture="item.kindPicture"
          :busitypeName="item.busitypeName"
          :busistartTime="item.busistartTime"
          :busistopTime="item.busistopTime"
          :bussType="item.bussType"
          borderBottom
        >
          <template v-slot:info>
            开放排号时间：
          </template>
        </BusinessItem>
      </div>
    </div>
    <van-calendar style="height:70%;" v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script lang="ts">
import { Mixins, Component, Vue } from 'vue-property-decorator';
import BusinessItem from '@/components/BusinessItems.vue'
import getBusinessData from '@/mixins/getBusinessData.vue'
import  { formatDate }  from '@/lib/js/util' 

@Component({
  components:{
    BusinessItem,
  }
})
export default class Appointment extends Mixins( getBusinessData ) {
    private banner = require("@/assets/img/top_appointment2.png");
    private dateTime = "请选择日期";
    private show = false; //默认不展开

    //点击时间打开日历
    private selectTime(){
      this.show = true;
    }

    //选择时间
    private onConfirm(date:any):void{
      let time = formatDate(date);
      this.dateTime = time;
      this.show = false;
    }

    //点击进入信用运营中心列表
    private confirmBusiness(val:String):void{
      this.$router.replace({name: "operationCenter"});
    }

    //点击进入我的排号列表
    private goAppointment():void{
      this.$router.push({name: "appointList"})
    } 
}
</script>

<style lang="scss" scoped>
@mixin flex($justify, $align){
   display: flex;
   justify-content: $justify;
   align-items: $align;
};
.appointment{
  width:100%;
  height:100%;
  box-sizing: border-box;
  padding:10px;
  color: #999;
  overflow: scroll;
}
.top_main {
  background: #fff;
  border-radius: 10px;
  img{
    width: 100%;
  }
}
.top_title {
  @include flex(flex-start, center);
  font-size: 14px;
  text-indent: 20px;
  height: 30px;
}
.top_title_empty{
  width:100%;
  height:10px;
}
.businessWrap{
  background: #fff;
  border-radius: 10px 10px 0 0;
  margin-top:10px;

  .dateNav{
    @include flex(flex-start, center);
    flex-direction: row;
    font-size: 14px;
    height: 30px;
    border-bottom: 1px #ddd solid;
    padding: 0 10px;
    .title{
      flex:1;
    }
    .timeSelect{
      @include flex(center,center);
      span{
        margin-right:5px;
      }
    }
  }
}
</style>

