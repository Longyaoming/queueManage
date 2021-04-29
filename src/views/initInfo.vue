<template>
  <div class="home">
    <TopHeader left>大家好</TopHeader>
    <div class="content">
      <MuduleEntry @click="touchEntry(1)" bgColor="43b6cb" :urlofimg="oppointmentImg">预约业务</MuduleEntry>
      <MuduleEntry @click="touchEntry(2)" bgColor="2fb497" :urlofimg="auditImg">审核通道</MuduleEntry>
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
   
   touchEntry(index : Number){
     switch (index) {
       case 1:
         this.$router.push({name:"appointment"})
         console.log("跳转到预约业务");
         break;
       case 2:
         console.log("跳转到审核业务");
         break;
       default:
         break;
     }
   }
}
</script>

<style lang="scss" scoped>
.content{
  padding:0 10px;
}
</style>
