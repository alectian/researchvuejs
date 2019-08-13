<template>
  <div id="app">
    <!--
      指令是vue模板中最常用的一项功能，
      它带有v-前缀，
      指令的主要职责就是当其表达式的值改变时，
      相应地将某些行为应用到DOM上
     -->
     <!--
      当show的值为true时，
      div元素会被自动插入，
      为false时会被移除，

      数据驱动DOM是vue的核心理念，所以不到万不得已时不要主动操作DOM
      比如循环渲染、显示与隐藏等。

      -->
    <div v-if="show">闪烁 v-if指令</div>

    <!-- v-bind的基本用途是动态更新HTML元素上的属性，比如id、class等 -->
    <div>
      v-bind指令
      <a v-bind:href="url">链接</a>
      <img v-bind:src="imgUrl"/>
      <!-- 渲染后的结果为
       <a href="https://www.github.com"〉链接</ a>
       <img src="http://xxx.xxx .xx/img.png">
       -->
    </div>

    <!-- v-on用来绑定事件监听器，这样就能做一些交互了 -->
    <div>
      v-on指令
      <div v-if="close">显示一段文本</div>
      <button v-on:click="handleClose">点击隐藏</button>
    </div>


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
    mounted() {
      setInterval(()=>{
        this.show = !this.show
      },1000)
    },
    methods:{
      handleClose(){
        this.close = !this.close
      }
    }
  }
</script>
