
<template>
    <div class="credentialsDetails">
        <TopHeader center bgColor="dcddde" color="438d31" fontSize="18px">该凭据已失效</TopHeader>
        <!-- 字段内容区域 -->
        <div class="content">
            <LymCell title="业务类型" value="公司放款审核" lineHeight="40px" borderBottom></LymCell>
            <LymCell title="办理业务时间" value="2021-03017 19:20:05" lineHeight="40px" borderBottom></LymCell>
            <LymCell title="预约人" value="xxx" lineHeight="40px" borderBottom></LymCell>
            <LymCell title="该时段预约人数" value="1" lineHeight="40px" borderBottom></LymCell>
            <LymCell title="凭据编号" value="1000000000023131" lineHeight="40px" borderBottom></LymCell>
            <LymCell title="预约时间" value="2021-03017 19:20:05" lineHeight="40px" borderBottom></LymCell>
        </div>
        <div class="btnWrap">
            <div class="queueBtn" @click="queue">
                排号
            </div>
        </div>

        <!--底部-->
        <div class="footerTip" >
            <div>提示说明：</div>
            <div>1.排号前，可以点击"所有人数"查看各时段排队人数情况；</div>
            <!-- <div>2.若对统一业务重复排号，则之前排的号码自动作废；</div> -->
            <div>2.若您排号后不能前去办理业务，请自行退号，避免扰乱正常的业务秩序。</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from '@/components/TopHeader.vue'
import LymCell from '@/components/LymCell.vue'
@Component({
    components:{
        TopHeader,LymCell
    }
})
export default class CredentialsDetails extends Vue {
    //点击排号
    queue(){
        console.log("点击排号");
        //跳转到选择业务列表页面
        this.$router.replace({name:'appointment'});
    }
}
</script>

<style lang="scss" scoped>
.credentialsDetails{
    width:100%;
    height:100%;

    .content{
        padding: 10px;
        box-sizing: border-box;
    }
}
.btnWrap{
    @include flex(flex-end, end);
    padding: 10px;
    .queueBtn{
        padding: 10px 25px;
        background: burlywood;
        color: #ffffff;
        border-radius: 5px;
        margin-right: 10px;
    }
}
.footerTip {
    color: #888;
    line-height: 0.64rem;
    letter-spacing: 0px;
    padding: 10px;
	margin: 0px 10px;
    border-radius: 10px;
    background: rgb(220, 221, 222);
}
</style>

