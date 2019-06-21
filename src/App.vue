<template>
  <div id="app">
    <!-- <div class="section"> -->
      <router-view/>
    <!-- </div> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
a {
	text-decoration: none;
	color: #333;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}

img {
	border: 0;
	max-width: 100%;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}

/* =================================初始化字体设置====================================================== */
html { font-size:100px; }
/* @media(max-width:1630px){ html { font-size: 84.375px; } } */
/* @media(max-width:1500px){ html { font-size: 84.375px; } } */
/* @media(max-width:1360px){ html { font-size: 84.375px; } } */
/* @media(max-width:991px){ html { font-size: 84.375px; } } */
/* @media(max-width:767px){ html { font-size: 84.375px; } } */
@media(max-width:540px){ html { font-size:84.375px; } } /*Android常用宽度*/
@media(max-width:480px){ html { font-size:75px; } }		/*Android常用宽度*/
@media(max-width:414px){ html { font-size:64.69px; } }  /*i6Plus,i7Plus宽度*/  
@media(max-width:375px){ html { font-size:58.59px; } }	/*i6,i7宽度*/
@media(max-width:360px){ html { font-size:56.25px; } }	/*Android常用宽度*/
@media(max-width:320px){ html { font-size:50px; } }		/*i5宽度*/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
