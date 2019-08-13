<template>
  <div id="app">
    总价：{{ prices }}
  </div>
</template>

<script>
  export default{
    data(){
      return{
        package1:[
          {
            name:'iPhone',
            price:7199,
            count:2
          },{
            name:'iPad',
            price:2888,
            count:1
          },{
            name:'Mac',
            price:19199,
            count:10
          },{
            name:'Pod',
            price:1250,
            count:20
          }
        ],
        package2:[
          {
            name:'Google',
            price:1000,
            count:51
          },{
            name:'Glass',
            price:12888,
            count:13
          },{
            name:'Phone',
            price:5000,
            count:19
          },{
            name:'Robot',
            price:3000000,
            count:44
          }
        ]
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
      prices: function(){
        var price = 0
        for (var i = 0; i<this.package1.length; i++) {
          price += this.package1[i].price*this.package1[i].count
        }
        for (var i = 0; i<this.package2.length; i++) {
          price += this.package2[i].price*this.package2[i].count
        }
        return price
      }
    }
  }
</script>
