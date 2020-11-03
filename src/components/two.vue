<template>
  <div id="two">
  <HelloWorld></HelloWorld>
  <one></one>

  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  import one from '@/components/one'
  export default{
    name:"two",
    components:{HelloWorld,one},
    data:function(){
      return{


      }
    },
    methods:{

    }

  }
</script>

<style>
</style>
