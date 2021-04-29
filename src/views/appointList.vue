
<template>
    <div class="appointList">
        <van-tabs v-model="active">
            <van-tab title="未处理">
                <AppList/>
            </van-tab>
            <van-tab title="已完成">
                
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppList from './components/AppList.vue'
@Component({
    components:{
        AppList
    }
})
export default class appointList extends Vue {
    private active:Number = 0;
}
</script>

<style lang="scss" scoped>
.appointList{
    width:100%;
    height:100%;
    background: #f5f6f8;
}
</style>