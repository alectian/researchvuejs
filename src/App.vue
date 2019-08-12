<template>
  <div id="app">
    <input v-model="book" placeholder='输入文本'>
    <!-- 插值表达式 -->
    <h1>数据绑定{{ book }}</h1>
    <div>{{ date }}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        book:'<vue>',
        date:new Date()
      }
    },
    mounted() {
      var _this = this
      this.timer = setInterval(()=>{
        //每秒更新一次
        _this.date = new Date()
      }, 1000)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>
