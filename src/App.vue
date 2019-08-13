<template>
  <div id="app">
    <!-- 语法糖 -->
    
    <!-- v-bind缩写 -->
    <a v-bind:href="url">链接</a>
    <a :href="url">链接</a>
    
    <img v-bind:src="imgUrl"/>
    <img :src="imgUrl"/>
    
    <!-- v-on缩写 -->
    <button v-on:click="handleClose">按钮</button>
    <button @click="handleClose">按钮</button>
    
  </div>
</template>

<script>
  export default{
    data(){
      return{
        show:false,
        close:true,
        url:'https://www.baidu.com',
        imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2174909441,2495215020&fm=26&gp=0.jpg'
      }
    },
    methods:{
      handleClose(){
        this.close = !this.close
      }
    }
  }
</script>
