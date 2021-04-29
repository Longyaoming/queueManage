
<template>
  <div class="lymButton">
     <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LymButton extends Vue {
    
}
</script>

<style lang="scss" scoped>
.lymButton{
    padding:10px;
    box-sizing: border-box;
    color:#ffffff;
}
</style>

