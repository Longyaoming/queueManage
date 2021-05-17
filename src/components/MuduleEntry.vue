<template>
  <div class="moduleEntry" 
    :style="{
        backgroundColor: setColor,
    }"
    @click="touchEntry">
    <img :src="urlofimg"/>
    <div class="title">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
      
  },
})

export default class ModuleEntry extends Vue {
    
    @Prop(String) readonly urlofimg !: string; 
    @Prop({type:String,default:'#ffffff'}) readonly bgColor !: string; 

    private get setColor(){
        if( this.bgColor ){
            return `#${this.bgColor}`
        }else{
            return '#ffffff'
        }
    }

    @Emit('click') touchEntry(){ return; }
    mounted () {
    //    console.log("接受到的颜色是：",this.bgColor); 
    }
    
}
</script>
<style lang="scss" scoped>
.moduleEntry{
    padding:10px 15px;
    border-radius: 10px;
    display: flex;
    font-size: 18px;
    color: #ffffff;
    align-items: center;
    margin: 20px 0;

    img{
        height: 90px;
    }
    .title{
        flex: 1;
        text-align: center;
        font-size: 20px;    
    }
}
</style>
