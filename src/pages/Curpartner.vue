<template>
  <div class="partner">
    <div class="topnav">
        <div class="top">
          <div class="case-logo"><a href="/" title=""><img src="../assets/logoBlack.png"></a></div>
          <!-- 导航切换按钮 -->
          <div class="navBtn" @click="showNav">
            <img src="../assets/navBtn.png" alt="">
          </div>
        </div>
    </div>
    <!-- banner -->
    <div class="caseBanner">
      <img src="../assets/hezuoBanner.jpg" alt="">
    </div>
    <!-- 标题 -->
    <div class="pageTitle">
      <p class="chinTitle">客户</p>
      <p class="engTitle">Customer</p>
    </div>
    <!-- 合作列表 -->
    <div class="partnerList">
      <table>
        <tr v-for="(item,index) in logoList" :key="index">
          <td v-for="(it,ind) in item" :key="ind">
            <span>
              <img :src="it.url" alt="">
            </span>
          </td>
        </tr>
      </table>
    </div>
    <!-- 分页器 -->
  <!-- <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div> -->
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
  name: 'Curpartner',
  components: {
    PageBottom
  },
  data() {
		return{
      isShowNav: false,
      logoList: []
		}
  },
  created() {
    this.scrollTop()

    this.logoList = [
      [{
        url: require('../assets/logo1.jpg')
      },
      {
        url: require('../assets/logo2.jpg')
      },
      {
        url: require('../assets/logo3.jpg')
      },
      {
        url: require('../assets/logo4.jpg')
      }],
      [{
        url: require('../assets/logo5.jpg')
      },
      {
        url: require('../assets/logo6.jpg')
      },
      {
        url: require('../assets/logo7.jpg')
      },
      {
        url: require('../assets/logo8.jpg')
      }],
      [{
        url: require('../assets/logo9.jpg')
      },
      {
        url: require('../assets/logo10.jpg')
      },
      {
        url: require('../assets/logo11.jpg')
      },
      {
        url: require('../assets/logo12.jpg')
      }],
      [{
        url: require('../assets/logo13.jpg')
      },
      {
        url: require('../assets/logo14.jpg')
      },
      {
        url: require('../assets/logo15.jpg')
      },
      {
        url: require('../assets/logo16.jpg')
      }],
    ]
  },
	methods: {
    scrollTop() {
      window.scroll(0,0)
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
.partner{
  width: 100%;
  .topnav{
    width: 100%;
    height: 1.56rem;
    background: #fff;
    z-index: 9;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    .top {
      width: 100%;
      float: left;
      height: 0.26rem;
      padding: 0 0.6rem;
      .case-logo {
        float: left;
        width: 2.04rem;
        margin-top: 0.2rem;
      }
      .navBtn{
        background: #dedede;
      }
    }
  }
  .caseBanner{
    width: 100%;
    margin-bottom: 0.8rem;
    img{
      width: 100%;
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
  .partnerList{
    width: 100%;
    height: auto;
    table{
      width: 100%;
      height: auto;
      tr{
        width: 100%;
        padding: 0 13%;
        height: 2.7rem;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        display: block;
        text-align: center;
        td{
          width: 24.8%;
          display: inline-block;
          height: 100%;
          span{
            display: inline-block;
            width: 100%;
            height: 1.3rem;
            border-left: 0.01rem solid #eeeeee;
            border-right: 0.01rem solid #eeeeee;
            margin-top: 0.7rem;
          }
        }
        td:first-child{
          span{
            border-left: none;
          }
        }
        td:last-child{
          span{
            border-right: none;
          }
        }
      }
      tr:first-child{
        border-top: none;
      }
      tr:last-child{
        border-bottom: none;
      }
    }
  }
  .page{
    width: 100%;
    height: 1.14rem;
    margin-top: 1.4rem;
    margin-bottom: 1.5rem;
    display: block;
    .el-pagination {
      white-space: nowrap;
      padding: 2px 5px;
      color: #fff;
      font-weight: 700;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-pager{
        .active{
          background-color: #3f3f3f;
        }
      }
    }
  }
}
</style>
<style scoped>
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #3f3f3f;
    color: #FFF;
}
.partner .partnerList table tr td span img{
  max-height: 100% !important;
}
@media screen and (max-width: 767px){
  .chinTitle{
    font-size: 0.34rem;
  }
  .partner .navBtn{
		width: 0.6rem;
		height: 0.5rem;
	}
	.partner .navPage .ph_menu .nav_box{
		padding-top: 50px;
	}
	.partner .navPage .ph_menu .nav_box .nli{
		float: none;
		width: 100%;
		height: 60px;
		padding: 0 5%;
		margin-bottom: 20px;
	}
	.partner .navPage .ph_menu .nav_box .nli:hover span{
		padding-top: 0;
	}
	.partner .navPage .ph_menu .nav_box .nli p span{
		padding-top: 0;
	}
  .pageTitle{
    height: 1.2rem;
  }
  .partner .partnerList{
    margin-bottom: 0.5rem;
  }
  .partner .partnerList table tr{
    border: none;
    padding: 0 5%;
  }
  .partner .partnerList table tr td{
    width: 50%;
    display: block;
    float: left;
    border-bottom: 1px solid #eeeeee;
  }
  .partner .partnerList table tr:nth-last-child(1) td:nth-last-child(2){
    border-bottom: none;
  }
  .partner .partnerList table tr:nth-last-child(1) td:nth-last-child(1){
    border-bottom: none;
  }
  .partner .partnerList table tr td span{
    border: none;
  }
  .partner .partnerList table tr td:nth-child(odd) span{
    border-right: 1px solid #eeeeee;
  }
}
</style>

