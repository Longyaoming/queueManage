
<template>
  <div class="aseal">
    <div class="wrap">
        <lym-cell lineHeight="40px" title="所选中心" :value="parmInfo.orgName" borderBottom/>
        <lym-cell lineHeight="40px" title="办理份数/笔数" borderBottom>
            <van-field type="digit" v-model="info.dealNum" placeholder="请输入办理份数/笔数" />
        </lym-cell>
        <lym-cell lineHeight="40px" title="办理时间段" borderBottom>
            <div @click="showPop()">{{ info.dealPeriod }}</div>
        </lym-cell>
        <lym-cell lineHeight="40px" title="备注">
            <van-field
                v-model="info.beiZhu"
                rows="2"
                autosize
                type="textarea"
                maxlength="40"
                placeholder="请输入备注"
                show-word-limit
                />
        </lym-cell>

        <div class="btnWrap">
            <div class="queueBtn" @click="queue">
                排号
            </div>
        </div>
    </div>

    <!--底部-->
    <div class="footerTip" >
        <div>提示说明：</div>
        <div>1.排号前，可以点击"所有人数"查看各时段排队人数情况；</div>
        <!-- <div>2.若对统一业务重复排号，则之前排的号码自动作废；</div> -->
        <div>2.若您排号后不能前去办理业务，请自行退号，避免扰乱正常的业务秩序。</div>
        <div style="height:30px;width:100%;"></div>
    </div>

    <!--弹窗-->
    <van-popup
    v-model="show"
    position="bottom"
    closeable
    :style="{ height: '50%' }"
    >
    <div class="dateWrap">
        <div class="header">
            <span>请选择时间段</span>
        </div>
        <div class="dateList">
            <div @click="confirm(item)" class="dateItem" v-for="(item,index) of dateList" :key="index">
                {{ item.value }}
            </div>
        </div>
    </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Mixins, Component, Vue } from 'vue-property-decorator';
import LymCell from '@/components/LymCell.vue'
import getDatePeriod from '@/mixins/getDatePeriod.vue'
import TopHeader from '@/components/TopHeader.vue'

@Component({
    components:{
        LymCell,TopHeader
    }
})
export default class Aseal extends Mixins( getDatePeriod ) {

    private info:any = {
        dealNum: 1, //办理份数
        dealPeriod: "请选择时间段",   //时间段
        beiZhu: "",    //备注
    }
    private parmInfo:any = "";  //路由传递过来的值
    private show:Boolean = false;   //是否打开弹窗

    mounted () {
        //获取路由传递过来的值
        console.log(this.$route.params.info);
        this.parmInfo = this.$route.params.info;
    }
    //打开时间段弹窗
    showPop(){
        this.show = true;
    }
    //点击确认按钮
    confirm(item:any){
        this.info.dealPeriod = item.value;
        this.show = false;
    }

    //点击排号
    queue(){
        this.$router.replace({name:'credentialsDetails',params:{info:this.info}})
    }
}
</script>

<style lang="scss" scoped>
.aseal{
    width:100%;
    height:100%;
    padding:10px;
    box-sizing: border-box;
    .wrap{
        width:100%;
        background: #ffffff;
        border-radius: 8px;
        padding:10px;
        box-sizing: border-box;
        .btnWrap{
            @include flex(center, center);
            padding: 10px;
            .queueBtn{
                padding: 10px 25px;
                background: cornflowerblue;
                color: #ffffff;
                border-radius: 5px;
            }
        }
    }
    .van-cell{
        background: #f2f3f5;
        padding: 10px;
        height: 100%;
        font-size: 14px;
        width: 100%;
    }
    ::v-deep .van-popup__close-icon--top-right{
        top: 10px;
        right: 20px;
    }
}
.dateWrap{
    width:100%;
    height:100%;
    overflow: hidden;

    .header{
        height:40px;
        @include flex(center,center);
        font-size: 16px;
        color: #333;
        overflow: scroll;
    }
    .dateList{
        width:100%;
        height:calc(100% - 40px);
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        overflow: scroll;
        .dateItem{
            background: skyblue;
            margin: 6px;
            width: 30%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
        }
    }
}
.footerTip {
	margin-top: 30px;
	color: #888;
	line-height: 24px;
    letter-spacing: 0px;
    padding:0 15px;
}
</style>

