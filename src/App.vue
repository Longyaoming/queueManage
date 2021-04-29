<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  name:"app",
  data(){
    return {

    }
  }
}
</script>

<style lang="scss">
@import './lib/css/customConfig.scss';
@import "./lib/css/reset.css";

html,body {
  width:100%;
  height:100%;
  overflow: hidden;
}
.app{
  @include hw(100vh, 100vw);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  font-size: 12px;
  background:#f5f5f5;
}
</style>