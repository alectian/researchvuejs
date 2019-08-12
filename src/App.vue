<template>
  <div id="app">
    <input v-model="text" placeholder='输入文本'>
    <h1>数据绑定{{ text }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        text: ''
      }
    }
  }
</script>
