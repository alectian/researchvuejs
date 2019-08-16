<template>
  <div id="app">
    <!--
      在数据绑定中，
      最常见的两个需求就是元素的样式名称class和内联样式style的动态绑定，
      他们也是HTML的属性，因此可以使用v-bind指令。
      我们只需要用v-bind计算出表达式的最终字符串就可以，
      不过有时候表达式的逻辑较为复杂，
      使用字符串拼接方法较难阅读和维护，
      所以vue增强了对class和style的绑定
     -->
     <!-- 对象语法 -->
     <!--
     类名active依赖数据isActive，
     当其为true时，
     div会拥有类名Active，为false时则没有
     最终渲染完成的结果是
     <div class="active"></div>
     -->
    <div :class="{ 'active':isActive }"></div>
    <!-- 对象中也可以传入多个属性，
      来动态切换class，
      另外，:class可以与普通class共存 -->
      <div class="static" :class="{ 'active':isActive, 'error':isError }"></div>
      <!--
        :class内的表达式每项为真时，
        对应的class类名就会加载，
        上面渲染后的结果为
        <div class="static active"></div>
      -->
      <!--
       当数据isActive或isError变化时，对应的class类名也会更新，
       比如当isError为true时，渲染后的结果为：
       <div class="static active error"></div>
       -->
       <!--
        当:class的表达式过长或逻辑复杂时，还可以绑定一个计算属性，
        这是一种很友好和常见的用法，一般当条件多余两个时，
        都可以使用data或computed
        -->
      <div :class="classes"></div>

  </div>
</template>

<script>
  import { apirequest } from './request'
  export default{
    data(){
      return{
        isActive: true,
        isError:null
      }
    },
    //使用计算属性完成class绑定
    computed:{
      classes: function(){
        return{
          active: this.isActive && !this.isError,
          'text-fail':this.isError && this.isError.type === 'fail'
        }
      }
    }
  }
</script>
