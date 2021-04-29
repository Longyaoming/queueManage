
<template>
  <div class="lymCell" :style="{'lineHeight':lineHeight}" :class="{'borderBottom':borderBottom}">
    <div class="defaultTitle">{{title}}：</div>
    <div class="defaultVal flex1">
        <span v-if='value'>{{value}}</span>
        <slot else> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class LymCell extends Vue {
    @Prop({type:String,default:""}) title !:string;     //标题名字
    @Prop({type:String}) value :any;    //value值
    @Prop({type:Boolean}) borderBottom!: boolean;   //是否增加底部线条
    @Prop({type:String, default:'20px'}) lineHeight!: String;   //是否增加底部线条
}
</script>

<style lang="scss" scoped>
.lymCell{
    box-sizing: border-box;
    padding:10px;
    font-size:14px;
    display: flex;
    align-items: center;
}
.borderBottom{
    border-bottom:1px #ddd solid;
}
.flex1{
    flex:1;
}
</style>

