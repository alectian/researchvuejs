<template>
  <div id="app">
    姓名：{{ fullName }}
    <button @click="changename">改名</button>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        firstName:'alec',
        lastName:'tian'
      }
    },
    methods:{
      changename(){
        this.fullName = 'lina-wang'
      }
    },
    computed:{
      /*
        计算属性缓存：
        计算属性是依赖缓存的，
        一个计算属性所依赖的数据发生变化时，
        它才会重新取值
        
        使用计算属性还是methods取决于你是否需要缓存，
        当遍历大数组和做大量计算时，
        应当使用计算属性，
        除非你不希望得到缓存
      */
      fullName: {
        get: function(){
          return this.firstName + '-' + this.lastName
        },
        set:function(newValue){
          var names = newValue.split('-')
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
    }
  }
</script>
