// todulist 测试项目
<template>
  <div class="xbmtodilist_app">
    <input type="text" v-model="newtext" v-on:keyup.enter="addtext" >
    <ul v-for="item in items">
      <input type="checkbox" v-on:click="subtext(item)"><li v-bind:class="{isclass:item.style}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
const STORAGE_KEY="todos-vuejs"
export default {
  name: 'xbmtodilist_app',
  data(){
    return{
      newtext:"",
      items:this.fetch()
    }
  },
  methods:{
    addtext:function(){
      this.items.push({
        name:this.newtext,
        style:false
      }),
      this.newtext=""
    },
    subtext:function(item){
      item.style=!item.style
    },
    // 获取localStorage存储内容
    fetch(){
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    // 存储数据进localStorage
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
  },
  watch:{
    items:{
      handler:function(items){
        this.save(items)
      },
      deep:true
    }
  }

}
</script>

<style>
.xbmtodilist_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{
  list-style-type: none;
}
.isclass{
  color: red
}
</style>
