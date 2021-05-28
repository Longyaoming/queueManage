<template>
  <div class="home">
    <TopHeader left>大家好</TopHeader>
    <div class="content" v-my-lazy>
      <MuduleEntry @click="touchEntry(1)" bgColor="43b6cb" :urlofimg="oppointmentImg">预约业务预约业务审核通</MuduleEntry>
      <MuduleEntry @click="touchEntry(2)" bgColor="2fb497" :urlofimg="auditImg">审核通道审核通道</MuduleEntry>
      <MuduleEntry @click="touchEntry(3)" bgColor="2fb497" :urlofimg="auditImg">自定义组件</MuduleEntry>
        <!-- <div style="width: 100%;height: 99vh;background: red"></div>
        <div style="width: 100%;height: 50vh;background: orange"></div>
        <div style="width: 100%;height: 36vh;background: yellow"></div>
        <div style="width: 100%;height: 102vh;background: green"></div>
        <div style="width: 100%;height: 14vh;background: cyan"></div>
        <div style="width: 100%;height: 50vh;background: blue"></div>
        <div style="width: 100%;height: 100vh;background: purple"></div> -->
    </div> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from '@/components/TopHeader.vue'
import MuduleEntry from '@/components/MuduleEntry.vue'

@Component({
  components: {
    TopHeader,MuduleEntry
  },
})
export default class Home extends Vue {
   private oppointmentImg = require("@/assets/img/mainimg_two.jpg")
   private auditImg = require("@/assets/img/mainimg_one.jpg")
   private list:any []= [];
   //点击挑战到对应模块
   touchEntry(index : Number){
     switch (index) {
       case 1:
         this.$router.push({name:"appointment"})
         console.log("跳转到预约业务");
         break;
       case 2:
         console.log("跳转到审核业务");
         break;
        case 3:
          this.$router.push({name:"showComponents"})
       default:
         break;
     }
   }

   
   mounted(){
    
   }
   
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height:100%;
  .content{
    width: 100%;
    height: 100%;
    padding:10px;
    box-sizing: border-box;
    overflow: auto;
  }
}

</style>
