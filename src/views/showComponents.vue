<template>
    <div class="showComponents">
        <div class="title">
            <div class="primaryBtn">自定义按钮</div>
            <div class="primaryBtn">树形图</div>
            <div class="primaryBtn">弹出层</div>
            <div class="primaryBtn">自定义动画</div>
        </div>
        <div class="content">
            <!-- <keep-alive>
                <component :is="currComponents"></component>
            </keep-alive> -->
            <!-- <component :is="currComponents"></component> -->
            <myTree :dataLists="dataList"></myTree>


        </div>
        
    </div>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator';

import myButton from '@/views/components/myButtons/index.vue'
import myPop from '@/views/components/myPop/index.vue'
import myLoading from '@/views/components/myLoading/index.vue'
import myTree from '@/views/components/myTree/index.vue'
@Component({
    components:{
        myButton,myPop,myLoading,myTree
    }
})
export default class ShowComponents extends Vue{
    // private currComponents:String = "myTree";
    private dataList = {
            label:"tree菜单",
            children: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            }]
        }
    // public clickBtn(index:Number) {
    //     console.log(index);
    //     switch (index) {
    //         case 1:
    //             this.currComponents = "myButton"
    //             break;
    //         case 2:
    //             this.currComponents = "myTree"
    //             break;
    //         case 3:
    //             this.currComponents = "myPop"
    //             break;
    //         case 4:
    //             this.currComponents = "myLoading"
    //             break;
    //         default:
    //             break;
    //     }
    //     console.log(this.currComponents);
    // }
}
</script>

<style lang="scss" scoped>
.showComponents{
    width: 100%;
    height: 100%;
    background: #ffffff;
    .title{
        width:100%;
        height:30px;
        background: #ffffff;
        @include flex(space-around, center);
    }
    .content{
        width: 100%;
        height:calc(100% - 30px);
        background:#f5f5f5;
    }
}
</style>