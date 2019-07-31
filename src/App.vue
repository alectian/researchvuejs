<template>
  <div id="app">
    <input v-model="name" placeholder='你的名字'>
    <h1>你好{{ name }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: ""
    }
  }
}
</script>