<template>
  <div id="app">
    <!-- v-pre跳过这个元素和她的子元素的编译过程 -->
    <span v-pre>
      {{这个内容不被编译}}
      <div>
        <!-- 这个元素的内容会直接输出 -->
        {{ isOK ? '确定' : '取消' }}
      </div>
    </span>
    <div>
      <!-- 这个元素会进行编译 -->
      <!-- 
        vue只支持单个表达式，不支持流程控制，
        另外，在表达式中不能使用用户自定义的全局变量，
        只能使用vue白名单内的全局变量，
        例如，Math和Date
       〈!一这是语旬，不是表达式 一 〉
        {{ var book = ’Vue.js实战’ }} 
       〈!一不能使用流控制，要使用三元运算 一〉 
        {{ if (ok) return msg ))
       -->
      {{ isOK ? '确定' : '取消' }}
    </div>
  </div>
</template>

<script>
  export default {
    data:{
      isOK: false
    }
  }
</script>
