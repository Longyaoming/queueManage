<template>
    <div class="common_header"
         :style="{
             'backgroundColor':setBgColor,
             'color':setColor,
             'fontSize':setFontsize
         }"

         :class="{
            'text-left': left,
            'text-center' : center,
         }">
         <slot></slot>
    </div>
</template>

<script lang="ts">
import { Provide, Component, Vue, Prop } from 'vue-property-decorator';


@Component({})
export default class Home extends Vue {
    //内部文字
    @Prop({type:[Boolean], default:false}) readonly left !: boolean;
    @Prop({type:[Boolean], default:false}) readonly center !: boolean;
    @Prop({type:[String], default:'none'}) readonly bgColor !: String;
    @Prop({type:[String], default:'none'}) readonly color !: String;
    @Prop({type:[String], default:'12px'}) readonly fontSize !: String;

    //配置背景颜色
    private get setBgColor(){
        if( this.bgColor ){
            return `#${this.bgColor}`
        }else{
            return 'none'
        }
    }

    //配置字体颜色
    private get setColor(){
        if(this.color){
            return `#${this.color}`
        }else{
            return '';
        }
    }

    //配置字体颜色
    private get setFontsize(){
        if(this.fontSize){
            return this.fontSize;
        }else{
            return '12px';
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin hw ($height, $width){
    width: $width;
    height: $height;
}
@mixin flex ($justify, $align){
    display: flex;
    justify-content: $justify;
    align-items: $align;
}

.common_header {
    @include hw(50px, 100%);
    @include flex(center,center);
	background: #fff;
    box-shadow: 0px 3px #ddd;
    font-size:12px;
}
.text-left{
    justify-content: flex-start;
    text-indent: 20px;
}
.text-center{
    justify-content: center;
}
</style>
