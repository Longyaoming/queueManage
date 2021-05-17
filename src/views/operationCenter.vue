
<template>
  <div class="operationCenter">
    <Nodata v-if="listData.length === 0">暂无数据</Nodata>
    <div else class="list">
        <div class="item" v-for="(item,index) of listData" :key="index" @click="goSeal(item)">
            {{item.orgName}}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nodata from '@/components/noData.vue'
@Component({
    components:{
        Nodata
    }
})
export default class operationCenter extends Vue {
    private listData:any = [];
    mounted () {
        this.getList();
    }

    async getList(){
        try{
            let result = await (this as any).$http('/opration','');
            console.log(result.data.orgs);
            this.listData = result.data.orgs ? result.data.orgs : []; 
        }catch(err){
            console.log(err)
        }
    }

    goSeal(item:any){
        this.$router.replace({name:"aseal",params:{info:item}});
    }
}
</script>

<style lang="scss" scoped>
.operationCenter{
    padding: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .list{
        .item{
            background: #ffffff;
            margin: 5px 0;
            padding: 10px;
            box-sizing: border-box;
            border: 1px #ddd solid;
        }
    }
}
</style>
