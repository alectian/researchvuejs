<template>
  <div id="app">
    <!--
      v-bind主要用法是动态更新HTML元素上的属性
    -->
    <!-- 
      链接的href属性和图片的src属性都被动态设置了
      当数据变化时，就会重新渲染。
     -->
    <a v-bind:href="link">链接</a>
    <img v-bind:src="src"/>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        link:'https://www.baidu.com',
        src:'assets/logo.png'
      }
    }

  }
</script>
