<template>
  <div class="apps">
  <XBtodilist></XBtodilist>
  </div>
</template>

<script>  
import XBtodilist from './components/xbm_todilist'
export default {
  name: 'apps',
  data(){
    return{
    }
  },
  components:{
    XBtodilist
  }
}
</script>

<style>
.apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
