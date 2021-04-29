
<template>
  <div class="noData">
    <img :src="nodataImg"/>
    <div>
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class noData extends Vue {
    private nodataImg = require("@/assets/img/nodata1.jpg")
}
</script>

<style lang="scss" scoped>
.noData{
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #c0c5d3;
    img{
        width:50%;
        font-size: 14px;
    }
}
</style>

