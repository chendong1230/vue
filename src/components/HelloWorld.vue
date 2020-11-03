<template>
  <div class="HelloWorld">
    <router-link to="/HelloWorld/one"></router-link>
    <div class="container-fluid" id="top">
      <div class="row">
        <div class="col-lg-8">

        </div>
        <div class="col-lg-1 top-right">
          <router-link to="#" class="color">首页</router-link>
          &emsp;&emsp;&emsp;
          <font>|</font>

        </div>
        <div class="col-lg-1 top-right">
          <router-link to="#" class="color">商城</router-link>
          &emsp;&emsp;
          <font>|</font>
        </div>
        <div class="col-lg-1 top-right divv">
          <router-link to="#" class="color">我的订单</router-link>
          &emsp;&emsp;
          <font>|</font>
        </div>
        <div class="col-lg-1 top-right divv right" @mouseenter="mouseenter" @mouseleave="mouseleave">
          <font class="color font">关于我们</font>
          &emsp;&emsp;
          <span id="span"></span>
        </div>

      </div>
      <div id="xiala" @mouseenter="mouseenter" @mouseleave="mouseleave">

      </div>
      <div class="row">
        <div class="col-lg-1">
        </div>
        <div class="col-lg-2">
          <img src="../../static/tu/190102_088f4i166l4gkl08k297h5kk8690i_260x200.png" class="imgmgj" />
        </div>

        <div class="col-lg-5">
          <input type="text" id="sousuo" />
          <button class="btnss glyphicon glyphicon-search ssan" @focus="moo()"@mousedown="moo2()" @mouseup="moo3()"></button>
        </div>
        <div class="col-lg-4"></div>

      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
  import one from '@/components/one'
  export default {

    name: "HelloWorld",
    data() {
      return {


      }
    },
    methods: {
      mouseenter: function() {
        $("#xiala").css("display", "inline-block")
      },
      mouseleave: function() {
        $("#xiala").css("display", "none")
      },
      moo:function(){
        $(".btnss").css("outline","none")
      },
      moo2:function(){
        $(".btnss").css("box-shadow","-1px -1px 1px black")
      },
      moo3:function(){
        $(".btnss").css("box-shadow","1px 1px 1px black")
      }

    },
    mounted() {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css");
  #top {
    width: 100%;
    height: 40px;
    border: 1px solid gainsboro;
    position: absolute;
    top: 0px;
    padding: 0px;
  }
  .row{
    position: relative;
    z-index: 0;
  }
  .top-right {
    line-height: 35px;
    font-size: 12px;

  }

  .color {
    color: darkgray;
    text-decoration: none;
  }

  .divv {
    padding: 0;
  }

  #span {
    width: 5px;
    height: 5px;
    border: 5px solid;
    border-color: darkgray white white white;
    position: relative;
    top: 8px;
    right: 20px;
  }

  .font {
    cursor: pointer;
  }

  #xiala {
    width: 800px;
    height: 350px;
    border: 1px solid darkgray;
    border-radius: 15px;
    background-color: white;
    position: absolute;
    right: 50px;
    top: 37px;
    display: none;
    z-index: 3;
  }


  .right {
    margin-left: -5px;
  }

  .row {
    padding: 0px;
  }

  .imgmgj {
    width: 160px;
    height: 120px;
    position: relative;
    top: 20px;

  }

  #sousuo {
    width: 500px;
    height: 50px;
    margin-top: 50px;
  }
  .ssan{

    width: 50px;
    height: 50px;

  }
  .btnss{
    position: relative;
    top: 2px;
    border: 1px solid darkgray;
    border-radius: 10px;
    box-shadow: -1px -1px 1px black;
  }


</style>
