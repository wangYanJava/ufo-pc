<template>
  <div class="newsDetail">
    <div class="topnav">
      <div class="top">
        <div class="case-logo"><a href="/" title=""><img src="../assets/logoBlack.png"></a></div>
        <!-- 导航切换按钮 -->
        <div class="navBtn" @click="showNav">
          <img src="../assets/navBtn.png" alt="">
        </div>
      </div>
  </div>
  <!-- 新闻标题 -->
  <div class="newsTitle">
    <p class="title1">
      {{this.news.title}}
    </p>
    <p class="date">
      {{this.news.year}}-{{this.news.month}}
    </p>
		<div class="prevBtn" @click="back">
			返回列表
		</div>
  </div>
  <div class="content" >
		<div v-for="(item,index) in newsDetail" :key="index">
			<div class="text"> 
			<p v-for="(it,ind) in item[0].duanluo" :key="ind">
				{{it.p}}	
			</p>
			</div>
			<div class="img">
				<img :src="item[0].image" alt="">
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
                    <p><span @click="toHome"><a href="/#/home" target="_self" class="l1_a" title="首 页">首 页<i>Home</i></a></span></p>
                </li>
                <li class="nli l2" id="nav_2">
                    <p><span @click="toCasePage"><a href="/#/case" target="_self" class="l1_a" title="我 们">案 例<i>Case</i></a></span>
                    </p>
                </li>
                <li class="nli l3" id="nav_3">
                    <p><span @click="toService"><a href="/#/service" target="_self" class="l1_a" title="案 例">服 务<i>Service</i></a></span></p>
                </li>
								<li class="nli l5" id="nav_5">
                    <p><span @click="toCurpartner"><a href="/#/curpartner" target="_self" class="l1_a" title="客 户">客 户<i>Customer</i></a></span>
                    </p>
                </li>
                <li class="nli l6" id="nav_6">
                    <p><span @click="toNews"><a href="/#/news" target="_self" class="l1_a" title="新 闻">新 闻<i>News</i></a></span></p>
                </li>
								<li class="nli l4" id="nav_4">
                    <p><span @click="toAbout"><a href="/#/about" target="_self" class="l1_a" title="服 务">我 们<i>About</i></a></span></p>
                </li>
            </div>
        </div>
	</div>
  </div>
</template>

<script>
import PageBottom from '../components/footer/PageBottom.vue'
export default {
  name: 'NewsDetail',
  components: {
    PageBottom
  },
  data() {
    return {
			isShowNav: false,
			result: '',
			news: '',
			newsDetail: []
    }
	},
	created() {
		this.news = JSON.parse(sessionStorage.getItem('news'))
		this.newsDetail = this.news.detail
		console.log(this.news)
	},
  methods: {
		back(){
			this.$router.push({
				path: '/news'
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
.newsDetail{
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
  .newsTitle{
    width: 96.5%;
    height: 1.4rem;
    margin: 0 auto;
    border-bottom: 2px solid #eaeaea;
    position: relative;
		.title1{
      font-size: 0.32rem;
      color: #484445;
      text-align: center
    }
    .date{
      font-size: 0.16rem;
      color: #c4bfc6;
      text-align: center;
      margin-top: 0.15rem;
    }
		.prevBtn{
			width: 0.8rem;
			height: 0.26rem;
			line-height: 0.26rem;
			text-align: center;
			font-size: 0.16rem;
			background: rgba(0, 0, 0, 0.4);
			color: #fff;
			position: absolute;
			bottom: 0;
			right: 4%;
			cursor: pointer;
		}
  }
  .content{
    width: 70%;
    height: auto;
    margin: 0 auto;
		margin-top: 0.8rem;
    padding-bottom: 0.4rem;
		div{
			.text{
      width: 100%;
      height: auto;
				p{
					font-size: 0.2rem;
					line-height: 0.3rem;
					color: #858585;
					text-indent: 2em;
					margin: 0.2rem 0;
				}
    	}
		}
    .img{
      width: 100%;
      height: auto;
      img{
        width: 65%;
        height: auto;
				display: block;
				margin: 0 auto;
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
			height: 1.2rem;
			float: left;
			padding: 0.4rem 0.4rem 0 0.6rem;
			.logo{
				float: left;
    		margin-top: 0.07rem;
				width: 2.04rem;
				img{
					width: 100%;
    			float: left;
				}
			}
			.pf_menu_btn{
				float: right;
				cursor: pointer;
				width: 0.4rem;
				margin-right: 0.3rem;
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
			top: 1.2rem;
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
					width: 16.66%;
					border-right: solid 0.01rem #353536;
					p{
						span{
							float: left;
							width: 100%;
							padding-top: 0.56rem;
							text-align: center;
							-webkit-transition: all 0.3s ease-out 0s;
							-moz-transition: all 0.3s ease-out 0s;
							-o-transition: all 0.3s ease-out 0s;
							transition: all 0.3s ease-out 0s;
							.l1_a {
								float: left;
								width: 100%;
								color: #fff;
								font-size: 0.24rem;
								line-height: 0.32rem;
								padding: 0 0.1rem;
								position: relative;
								i{
									display: block;
									width: 100%;
									font-size: 0.14rem;
									color: #aeaeae;
									line-height: 0.18rem;
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
						padding-top: 0.78rem;
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
<style scoped>
@media screen and (max-width: 767px){
  .newsDetail .navBtn{
		width: 0.6rem;
		height: 0.5rem;
		/* right: 5%; */
		/* margin-top: 5px; */
	}
	.newsDetail .navPage .ph_menu .nav_box{
		padding-top: 50px;
	}
	.newsDetail .navPage .ph_menu .nav_box .nli{
		float: none;
		width: 100%;
		height: 60px;
		padding: 0 5%;
		margin-bottom: 20px;
	}
	.newsDetail .navPage .ph_menu .nav_box .nli:hover span{
		padding-top: 0;
	}
	.newsDetail .navPage .ph_menu .nav_box .nli p span{
		padding-top: 0;
	}
}
</style>