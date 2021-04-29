
<template>
  <div class="listItem">
    <div class="header">
        <div>预约人：xxxx</div>
        <div>2021-03-10 10:00</div>
    </div>
    <BusinessItem borderBottom borderTop></BusinessItem>
    <div class="footer">备注：无</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BusinessItem from '@/components/BusinessItems.vue'

@Component({
    components:{
        BusinessItem
    }
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.listItem{
    margin:10px;
    background: #ffffff;
    padding:0px 10px;
    border-radius: 8px;

    .header, .footer{
        width: 100%;
        height: 30px;
        @include flex(space-between, center)
    }
    .businessItem{
        padding:0px;
    }
}
</style>


