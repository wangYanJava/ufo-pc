<template>
<div class="homeBox">
  <div class="home">
    <!-- logo -->
    <div class="pz_top hidden-xs">
      <div class="top">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <banner></banner>
		<!-- 右侧固定联系方式 -->
		<div class="rightFixed">
			<ul>
				<li>
						<img src="../assets/weixinIco.png" alt="">
						<div class="ewm">
								<p><img src="../assets/lianxima.png" title="" alt="" /></p>
						</div>
				</li>
				<li class="smile"><a href="javascript:;" class="r_tel1">
								<img src="../assets/smile.png" alt="">
								<h4><img src="../assets/smile.png" alt="">
										<p>18615777604</p>
								</h4>
						</a></li>
				<li class="phone"><a href="javascript:;" class="r_tel2">
								<img src="../assets/qqIco.png" alt="">
								<h4><img src="../assets/qqIco.png" alt="">
										<p>028-85521744</p>
								</h4>
						</a></li>
				<li class="last" @click="scroll(0,0)"><a href="javascript:;">
					<img src="../assets/topIco.png"
										alt=""></a></li>
			</ul>
		</div>
		<!-- 切换导航页面按钮 -->
		<div class="navBtn" @click="showNav">
      <img src="../assets/navBtn.png" alt="">
    </div>
    <!-- 左侧导航栏 -->
      <ul class="leftnav">
        <li data-menuanchor="1" class="first" @click="scroll(0,0)"><a href="javascrip:viod(0)" title="蔚蓝公装">1<span>蔚蓝公装</span></a></li>
        <li data-menuanchor="2" @click="scroll(0,910)"><a href="javascrip:viod(0)" title="案例">2<span>案例</span></a></li>
        <li data-menuanchor="3" @click="scroll(0,1840)"><a href="javascrip:viod(0)" title="服务">3<span>服务</span></a></li>
        <li data-menuanchor="4" @click="scroll(0,2764)"><a href="javascrip:viod(0)" title="客户">4<span>客户</span></a></li>
        <li data-menuanchor="5" @click="scroll(0,3662)"><a href="javascrip:viod(0)" title="联系">5<span>联系</span></a></li>
    </ul>
    <!-- 手机可见菜单 -->
    <!-- <div class="pz_top visible-xs">
        <div class="top">
            <div class="logo"><a href="/" title=""><img class="img-responsive" src="../assets/logo.png"></a></div>
            <div class="menulist">
                <li class="l1 first" id="wap_3"><a class="l1_a" href="/list/10/" target="_self" title="案 例">案 例</a></li>
                <li class="l1" id="wap_2"><a class="l1_a" href="/page/2.htm" target="_self" title="我 们">我 们</a></li>
                <li class="l1" id="wap_5"><a class="l1_a" href="/list/5/" target="_self" title="客 户">客 户</a></li>
            </div>
        </div>
    </div> -->

    <!-- 案例 -->
    <home-case></home-case>
		<!-- 服务 -->
		<Service></Service>
		<!-- 客户 -->
		<customer></customer>
		<!-- 联系 -->
		<contact></contact>
  </div>
	<!-- 默认隐藏的导航页 -->
	<div class="navPage" :class="isShowNav? 'navPageShow' : ''">
		<div class="closed" @click="closeNav">
			<div class="logo"><a href="/" title=""><img src="../assets/logo.png" alt="" title=""></a></div>
			<div class="pf_menu_btn"><img src="../assets/close.jpg" alt=""></div>
		</div>
		<div id="navSlide" class="ph_menu">
            <div class='nav_box'>
                <li class="nli l1" id="nav_1">
                    <p><span @click="toHome"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="首 页">首 页<i>Home</i></a></span></p>
                </li>
                <li class="nli l2" id="nav_2">
                    <p><span @click="toCasePage"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="我 们">案 例<i>Case</i></a></span>
                    </p>
                </li>
                <li class="nli l3" id="nav_3">
                    <p><span @click="toService"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="案 例">服 务<i>Service</i></a></span></p>
                </li>
								<li class="nli l5" id="nav_5">
                    <p><span @click="toCurpartner"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="客 户">客 户<i>Customer</i></a></span>
                    </p>
                </li>
                <li class="nli l6" id="nav_6">
                    <p><span @click="toNews"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="新 闻">新 闻<i>News</i></a></span></p>
                </li>
								<li class="nli l4" id="nav_4">
                    <p><span @click="toAbout"><a href="javascrip:viod(0)" target="_self" class="l1_a" title="服 务">我 们<i>About</i></a></span></p>
                </li>
            </div>
        </div>
	</div>
</div>
</template>

<script>
import Banner from '../components/home/Banner.vue'
import HomeCase from '../components/home/HomeCase.vue'
import Service from '../components/home/Service.vue'
import Customer from '../components/home/Customer.vue'
import Contact from '../components/home/Contact.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    HomeCase,
    Service,
    Customer,
    Contact,
	},
	data() {
		return{
			isShowNav: false
		}
	},
	methods: {
		// 滚动条
		scroll(x,y){
			window.scroll(x,y);
		},
		// 鼠标滑过按钮显示导航页
		showNav(){
			this.isShowNav = true
		},
		// 鼠标滑过按钮隐藏导航页
		closeNav(){
			this.isShowNav = false
		},
		toHome(){
			this.$router.push({
				path: '/',
				name: 'Home'
			})
		},
		toCasePage(){
			this.$router.push({
				path: '/case',
				name: 'Case'
			})
		},
		toService(){
			this.$router.push({
				path: '/service',
				name: 'ServicePage'
			})
		},
		toCurpartner(){
			this.$router.push({
				path: '/curpartner',
				name: 'Curpartner'
			})
		},
		toNews(){
			this.$router.push({
				path: '/news',
				name: 'News'
			})
		},
		toAbout(){
			this.$router.push({
				path: '/about',
				name: 'About'
			})
		}
	}
}
</script>

<style lang="scss">
.homeBox{
	width: 100%;
	height: 100%;
	.home{
		width: 100%;
		position: relative;
		.pz_top{
			float: left;
			width: 100%;
			position: absolute;
			left: 0;
			top: 45px;
			z-index: 80;
			-webkit-transition: all 0.3s ease-out 0s;
			-moz-transition: all 0.3s ease-out 0s;
			-o-transition: all 0.3s ease-out 0s;
			transition: all 0.3s ease-out 0s;
			.top{
				width: 100%;
				float: left;
				height: 26px;
				padding: 0 60px;
				.logo {
					float: left;
					width: 204px;
					margin-top: 0px;
					img{
						width: 100%;
    				float: left;
					}
				}
			}
		}
		.logo{
			position: absolute;
			z-index: 99;
		}
	}
	.navPage{
		.closed{
			width: 100%;
			height: 120px;
			float: left;
			padding: 0.4rem 0.4rem 0 0.6rem;
			.logo{
				float: left;
    		margin-top: 7px;
				width: 2.04rem;
				img{
					width: 100%;
    			float: left;
				}
			}
			.pf_menu_btn{
				float: right;
				cursor: pointer;
				width: 40px;
				margin-right: 30px;
				img{
					width: 100%;
					float: left;
					-webkit-transition: all 0.3s ease-out 0s;
					-moz-transition: all 0.3s ease-out 0s;
					-o-transition: all 0.3s ease-out 0s;
					transition: all 0.3s ease-out 0s;
				}
			}
			.pf_menu_btn:hover{
				img{
					transform: rotate(180deg);
				}
			}
		}
		.ph_menu {
			position: absolute;
			left: 0;
			top: 120px;
			height: 100%;
			width: 100%;
			text-align: left;
			overflow: hidden;
			border-top: solid 1px #353536;
			.nav_box {
				width: 100%;
				position: relative;
				height: 100%;
				.nli {
					float: left;
					position: relative;
					height: 100%;
					width: 16.666%;
					border-right: solid 1px #353536;
					p{
						span{
							float: left;
							width: 100%;
							padding-top: 56px;
							text-align: center;
							-webkit-transition: all 0.3s ease-out 0s;
							-moz-transition: all 0.3s ease-out 0s;
							-o-transition: all 0.3s ease-out 0s;
							transition: all 0.3s ease-out 0s;
							.l1_a {
								float: left;
								width: 100%;
								color: #fff;
								font-size: 24px;
								line-height: 32px;
								padding: 0 10px;
								position: relative;
								i{
									display: block;
									width: 100%;
									font-size: 14px;
									color: #aeaeae;
									line-height: 18px;
									text-transform: uppercase;
									font-style: normal;
								}
							}
						}
					}
				}
				.nli:hover{
					.l1_a {
						color: #299df4;
						font-weight: bold;
						i{
							font-weight: normal;
						}
					}
					span {
						padding-top: 78px;
					}
				}
			}
		}
	}
	.navPageShow{
		left: 0;
	}
}
</style>
<style>
.rightFixed{
	position: fixed;
	right: 31px;
	top: 50%;
	margin-top: -101px;
	z-index: 8;
}
.rightFixed ul {
	width: 50px;
	float: left;
	background: #474747;
}
.rightFixed ul li {
	width: 50px;
	height: 51px;
	float: left;
	border-top: solid 1px #575757;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	text-align: center;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
.rightFixed ul li:nth-child(1){
	border-top: 0;
}
.rightFixed ul li img{
	float: left;
}
.rightFixed ul li a img{
	float: left;
	height: 0.5rem;
	vertical-align: middle;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
.rightFixed ul li h4 {
    position: absolute;
    right: -100px;
    top: 0;
    width: 173px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: white;
    font-size: 16px;
    font-family: Arial;
    opacity: 0;
    z-index: 2;
    letter-spacing: 1px;
    background: url('../assets/blueBg.png') no-repeat center center;
    background-size: 100% 100%;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
}
.rightFixed ul li h4 p {
	display: inline-block;
}
.rightFixed ul li:hover {
	overflow: visible;
	background: url('../assets/blueBg.png') no-repeat center center;
	background-size: 100% 100%;
}
.rightFixed ul .last:hover {
	background: none;
}
.rightFixed ul li:hover h4 {
	right: 0;
	opacity: 1;
}
.rightFixed ul li .ewm {
	position: absolute;
	right: 0px;
	top: 50%;
	margin-top: -56px;
	width: 121px;
	text-align: center;
	height: 112px;
	background: url('../assets/right6.png') no-repeat center center;
	opacity: 0;
	z-index: 1;
	padding: 10px 18px 10px 10px;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
.rightFixed ul li .ewm img {
	width: 100%;
	float: left;
	height: auto;
	margin: 0;
	-moz-border-radius: 0px;
	-webkit-border-radius: 0px;
	-khtml-border-radius: 0px;
	border-radius: 0px;
}
.rightFixed ul li:hover .ewm {
	right: 110%;
	opacity: 1;
}
.rightFixed ul li.smile img {
	width: 0.2rem !important;
	height: auto;
	margin-top: 0.12rem;
  margin-left: 0.13rem;
}
.rightFixed ul li.phone img {
	width: 0.2rem !important;
	height: auto;
	margin-top: 0.12rem;
  margin-left: 0.13rem;
}
.rightFixed ul li h4 img {
    width: 0.45rem !important;
    max-width: none;
}
.rightFixed ul li.last img {
	width: 50%;
	height: auto;
	margin-top: 0.12rem;
  margin-left: 0.13rem;
}
.navBtn{
      position: fixed;
      cursor: pointer;
      right: 0.5rem;
      top: 0.5rem;
      width: 0.4rem;
      height: 0.32rem;
      text-align: center;
      display: block;
      z-index: 82;
      margin-top: 20px;
      background: #f7f7f7ee;
      -webkit-transition: all 0.3s ease-out 0s;
      -moz-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
    }
.navBtn img{
	margin: 0.08rem 0.1rem;
  float: left;
}
.navPage{
	position: fixed;
	width: 100%;
	height: 100%;
	left: -100%;
	top: 0;
	display: block !important;
	float: left;
	z-index: 101;
	background: rgba(0,0,0,0.8);
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
.leftnav {
	position: fixed;
	left: 0.35rem;
	top: 50%;
	z-index: 9;
	width: 0.8rem;
	margin-top: -1.3rem;
}
.home .leftnav:before {
	content: '';
	width: 0.01rem;
	height: 90%;
	background: #ccc;
	opacity: 0.6;
	position: absolute;
	left: 50%;
	top: -95%;
}
.home .leftnav:after {
	content: '';
	width: 0.01rem;
	height: 90%;
	background: #ccc;
	opacity: 0.6;
	position: absolute;
	left: 50%;
	bottom: -95%;
}
.home .leftnav li {
	width: 100%;
	height: 52px;
	float: left;
	text-align: center;
	overflow: hidden;
	position: relative;
}
.home .leftnav li:before {
	content: '';
	width: 0;
	height: 1px;
	background: white;
	position: absolute;
	left: 50%;
	bottom: 0;
	opacity: 0.4;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
}
.home .leftnav li a {
	display: block;
	width: 100%;
	height: 1.04rem;
	line-height: 0.52rem;
	font-size: 0.16rem;
	color: #78777c;
	-webkit-transition: all 0.5s ease-out 0s;
	-moz-transition: all 0.5s ease-out 0s;
	-o-transition: all 0.5s ease-out 0s;
	transition: all 0.5s ease-out 0s;
}
.home .leftnav li a span {
	display: block;
	width: 100%;
	float: left;
	color: #299df4;
}
.leftnav li:hover a,
.leftnav li.active a {
	margin-top: -0.52rem;
}
.leftnav li.active a {
	color: white;
	font-weight: bold;
}
.leftnav li.active:before {
	width: 0.23rem;
	margin-left: -0.12rem;
}
.leftnav li a {
	display: block;
	width: 100%;
	height: 100%;
}
/*.leftnav li.first a span{ font-size:12px;font-family: 'OPENSANS-LIGHT';}*/
.leftnav.white:before,
.leftnav.white:after {
	background: #d1d1d1;
	opacity: 1;
}
.leftnav.white li a {
	color: #78777c;
}
.leftnav.white li.active a {
	color: #333;
}
.leftnav.white li:before {
	background: #d1d1d1;
	opacity: 0.4;
}
@media screen and (max-width:767px) {
	.leftnav {
		display: none !important;
	}
}
</style>

