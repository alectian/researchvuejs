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
        当package1或package2中的商品有任何变化，
        比如购买数量变化或增删商品时，
        计算属性price就会自动更新，
        视图中的总价也会自动变化，
        每一个计算属性都包含一个getter和一个setter，
        默认用法只利用了getter来读取



        在需要的时候，也可以提供一个setter函数，
        当手动修改计算属性的值就像修改一个普通数据那样时，
        就会触发setter函数，执行一些自定义操作
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
