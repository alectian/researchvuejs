<template>
  <div id="app">
   {{ reverseText }}
  </div>
</template>

<script>
  export default{
    data(){
      return{
        text:'123,456'
      }
    },
    // 计算属性
    /*
    所有的计算属性都以函数的形式写在computed内，
    最终返回计算结果
    在一个计算属性里可以完成各种复杂的逻辑，
    包括运算、函数调用等，
    只要是最终返回一个结果就可以，
    
    除了以上简单的用法，计算属性还可以依赖多个vue实例的数据，
    只要其中任一数据变化，计算属性就会重新执行，视图也会更新
    */
    computed:{
      reverseText: function(){
        return this.text.split(',').reverse().join(',')
      }
    }
  }
</script>
