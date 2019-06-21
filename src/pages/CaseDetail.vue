<template>
  <div class="caseDetail">
    <div class="topnav">
      <div class="top">
        <div class="case-logo"><a href="/" title=""><img src="../assets/logoBlack.png"></a></div>
        <!-- 导航切换按钮 -->
        <div class="navBtn" @click="showNav">
					<img src="../assets/navBtn.png" alt="">
				</div>
      </div>
  </div>
  
	<div class="caseContent">
		<div class="prevBtn" @click="back">
			返回列表
		</div>
		<div class="left">
			<img v-for="(item,index) in this.case.img" :key="index" :src="item.url" alt="">
			<!-- <img src="../assets/newsBg.png" alt="">
			<img src="../assets/newsBg.png" alt=""> -->
			<div class="white"></div>
			<div class="text">
				<p>
					{{this.case.details}}
				</p>
			</div>
		</div>
		<div class="right">
			<div class="t1">
				{{this.case.name}}
			</div>
			<div class="t2">
				{{this.case.address}}
			</div>
		</div>
	</div>

  <!-- 网页脚部 -->
  <page-bottom></page-bottom>
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
import PageBottom from '../components/footer/PageBottom.vue'
export default {
  name: 'CaseDetail',
  components: {
    PageBottom
  },
  data() {
    return {
			isShowNav: false,
			case: ''
    }
	},
	created() {
		this.case = JSON.parse(sessionStorage.getItem('case'))
		console.log(this.case)
	},
  methods: {
		back(){
			this.$router.push({
				path: '/case'
			})
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

<style lang="scss" scoped>
  .caseDetail{
  width: 100%;
  height: 100%;
  .topnav{
    width: 100%;
    // position: fixed;
    // left: 0;
    // top: 0;
    height: 186px;
    background: #fff;
    z-index: 9;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    .top {
      width: 100%;
      float: left;
      height: 26px;
      padding: 0 60px;
      .case-logo {
        float: left;
        width: 204px;
        margin-top: 20px;
      }
      .navBtn{
        background: #dedede;
      }
    }
  }
.caseContent{
	width: 100%;
	height: auto;
	margin-bottom: 0.6rem;
	border-top: 2px solid #eaeaea;
	font-size: 0;
	position: relative;
	.prevBtn{
		width: 0.6rem;
    height: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    font-size: 0.12rem;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    position: absolute;
    top: 0;
    right: 10%;
    z-index: 999;
    cursor: pointer;
		}
	.left{
		width: 75.2%;
		height: auto;
		margin: 0;
		display: inline-block;
		background: #f7f7f7;
		height: auto;
		vertical-align: top;
		img{
			width: 100%;
			height: auto;
			padding: 0 7.6%;
			margin-bottom: 0.22rem;
		}
		.white{
			width: 100%;
			height: 0.4rem;
			background: #fff;
		}
		.text{
			width: 100%;
			height: auto;
			padding: 0 7.6%;
			font-size: 0.18rem;
			color: #6a6c69;
			line-height: 0.4rem;
			background: #f7f7f7;
		}
	}
	.right{
		width: 24.5%;
		height: 3.06rem;
		margin: 0;
		display: inline-block;
		vertical-align: top;
		.t1{
			width: 100%;
			// height: 0.54rem;
			// line-height: 0.54rem;
			font-size: 0.24rem;
			padding-left: 0.73rem;
			margin-top: 1.25rem;
			border-left: 3px solid #696969;
			background: url('../assets/ll.png') no-repeat left center;
		}
		.t2{
			width: 100%;
			padding-left: 0.75rem;
			font-size: 0.16rem;
			margin-top: 0.23rem;
			color: #cdcdcd;
		}
	}
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
						color: #337ab7;
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
