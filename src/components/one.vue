<template>
    <div id="one">

       <div id="div1"></div>
      <div v-for="v in tupian"class="body">

        <img :src="v.gimgurl" class="img" />
        <br />
        <span style="font-size:20px ;">{{v.gdname}}</span><br />
        <span style="font-size: 18px;">￥{{v.price}}</span>
      </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
  export default{
    name:"one",
    components:{HelloWorld},
    data:function(){
      return{
          shangpin:[],
          tupian:[],
          tup:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

      }
    },
   methods:{
      fun1:function(){
        var ob=this;
        $.ajax({
          url:"http://127.0.0.1:8082/mgj/ajax/aa",
          data:{},
          success:function(r){
            ob.shangpin=r
          }
        })
     },
     fun2:function(pn){
       var ob=this;

       $.ajax({
         url:"http://127.0.0.1:8082/mgj/ajax/ac",
         data:{pn:pn},
         success:function(y){
           console.log(y);
           ob.tupian=y;

            for(var v in ob.tupian){
              ob.tupian[v].gimgurl = "../../static/mgjtu/"+ob.tupian[v].gimgurl
            }
         }
       })
     }
   },
   mounted(){
      this.fun2(15);
   }
  }
</script>

<style>
  .img{
    width: 200px;
    height: 300px;
    cursor: pointer;
  }

  .body{
    display: inline-block;
    margin: 50px;

  }
  #div1{
    height: 150px;
    width: 100%;
  }
</style>
