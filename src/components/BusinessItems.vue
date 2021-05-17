
<template>
  <div class="businessItem" :class="{'borderTop':borderTop,'borderBottom':borderBottom}">
    <img :src="kindPicture">
    <div class="item-content">
        <div class="title">{{busitypeName}}</div>
        <div class="info">
            <slot name="info"></slot>
            {{ busistartTime }}至{{ busistopTime }}
        </div>
    </div>
    <van-icon name="arrow" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class BusinessItems extends Vue {
    @Prop(String)  kindPicture !: string;
    @Prop(String)  busitypeName !: string;
    @Prop(String)  busistartTime !: string;
    @Prop(String)  busistopTime !: string;
    @Prop(String)  bussType !: string;
    @Prop({type:Boolean, default:false})  borderTop !: boolean;
    @Prop({type:Boolean, default:false})  borderBottom !: boolean;

    private get setAge(){
        return 
    }
}
</script>

<style lang="scss" scoped>
.businessItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    // border-bottom: 1px #ddd solid;
    @include hw(70px, 100%);

    img{
        @include hw(50px, 50px);
        display: block;
    }
    .item-content{
        @include flex(flex-start, flex-start);
        flex:1;
        flex-direction: column;
        text-indent: 10px;
        height: 50px;

        .title{
            font-weight: 600;
            padding-top:4px;
            @include hw(20px, 100%);
        }
        .info{
            padding-top: 8px;
        }
    }
}
.borderBottom{
    border-bottom: 1px #ddd solid;
}
.borderTop{
    border-top: 1px #ddd solid;
}
</style>

