<template>
  <div id="app">
    <!--
      vue支持在{{}}插值的尾部添加一个管道符号 | 对数据进行过滤，
      经常用于格式化文本
      比如，字母全大写，货币千位使用逗号分隔符等
      过滤规则是自定义的，通过给vue实例添加选项filters来设置，
     -->
    {{ date | formatDate }}
  </div>
</template>

<script>
  var padDate = function(value) {
    return value < 10 ? '0' + value : value
  }
  export default{
    data() {
      return {
        date: new Date()
      }
    },
    filters:{
      formatDate: (value)=>{
        var date = new Date(value);
        var year= date .getFullYear() ;
        var month= padDate(date.getMonth() + 1) ;
        var day= padDate(date .getDate());
        var hours= padDate(date .getHours());
        var minutes = padDate (date .getMinutes ());
        var seconds = padDate (date .getSeconds ());
        var str = year + '-' + month + '-' + day + ' ' + hours + ':' +minutes + ':' + seconds
        return str//将整理好的数据返回出去
      },
      /*
      过滤器应当用于处理简单的文本转换，
      如果要实现更为复杂的数据变换，
      应该使用计算属性
      */
    },
    mounted() {
      var _this = this
      this.timer = setInterval(()=>{
        _this.date = new Date()
      }, 1000)
    },
    beforeDestroy(){
      if (this.timer) {
        clearInterval(this.timer)//在vue实例销毁前，清除定时器
      }
    }
  }
</script>
