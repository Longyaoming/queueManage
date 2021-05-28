<template>
  <div class="myTree">
    <div class="title">
          {{dataLists.label}}
          <span v-if="isfolder"> [ {{isOpens ? '-' : '+'}} ] </span>
    </div>
    <ul v-if="isfolder"> 
        <!-- <myTree v-for="dataItem in dataLists.children" :dataLists="dataItem" :key="dataItem.label"></myTree> -->
        <myTree :dataLists="dataLists" ></myTree>
    </ul>
    
  </div>
</template>

<script lang="ts">
import { Vue,Prop,Component } from 'vue-property-decorator'

@Component
export default class Mytree extends Vue{
    @Prop() dataLists:any;

    private isOpens:boolean = false;

    private get isfolder(){
        return this.dataLists.children && this.dataLists.children.length;
    }

}
</script>

<style lang="scss" scoped>
.myTree{
    width: 100%;
    height: 100%;
}
</style>