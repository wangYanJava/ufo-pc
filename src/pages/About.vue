<template>
  <!-- 顶部图片 -->
  <div class="about">
    <!-- logo -->
    <div class="pz_top hidden-xs">
      <div class="top">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
      </div>
    </div>
    <div class="bannerBox">
      <img src="../assets/aboutBg.png" alt="">
    </div>
    <div class="btnBox">
      <!-- 导航切换按钮 -->
      <div class="navBtn" @mouseover="showNav">
        <img src="../assets/navBtn.png" alt="">
      </div>
    </div>
    <!-- 标题 -->
    <div class="pageTitle">
      <p class="chinTitle">关于</p>
      <p class="engTitle">ABOUT&nbsp;&nbsp;US</p>
    </div>
    <!-- 公司介绍 -->
    <div class="companyDetail">
      <div class="bigTitle">
        公司介绍
      </div>
      <div class="smallTitle">
        JWD&nbsp;DESIGN&nbsp;CO.LTD
      </div>
      <div class="aboutText text1">
        北京同创新业科技有限公司成立于2017年12月25日，2018年4月创立了包工侠平台，“包工侠”作为国内首<br />
        家施工业“征信应用+垂直运营”平台，旨在解决包工头与劳务、发包方的征信不对称现象。旨在解决包工头与劳务、发包方的征信不对称现象。
      </div>
    </div>
    <!-- 服务优势 -->
    <div class="service">
      <div class="bigTitle">
        服务优势
      </div>
      <div class="smallTitle">
        OUR&nbsp;ADVANTAGE
      </div>
      <div class="aboutText text2">
        室内与软装全方位设计及顾问<br />
        实现高品质室内空间<br />
        整合国际及高档品牌等资源与丰富专业经验<br />
        实现室内及软装一体化设计<br />
        定制住宅标准化体系<br />
        协助房地产商建立完善室内设计管理及运营标准<br />
      </div>
    </div>


    <!-- 团队 -->
    <!-- <div class="teamTitle">
      设计团队
    </div>
    <div class="team">
      <div class="item" v-for="item in 3" :key="item">
        <div class="left">
          <img src="../assets/casePic.png" alt="">
        </div>
        <div class="right">
          <p>叶萍</p>
          <p>YELEONG</p>
          <p>设计理念：源于生活&nbsp;定制创新&nbsp;细节体验</p>
        </div>
      </div>
    </div> -->

  <!-- 加入我们 -->
  <div class="jion">
    <div class="title">
        <img src="../assets/joinTitle.png" alt="">
    </div>
    <div class="content">
      <div class="left">
        <img src="../assets/join1.png" alt="">
        <P class="p1">加入我们</P>
        <p class="p2">暂无职位</p>
      </div>
      <div class="right">
        <img src="../assets/join2.png" alt="">
        <P class="p1">业务合作</P>
        <p class="p2">施工班组、设计团队、欢迎加盟</p>
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
  name: 'About',
  components: {
    PageBottom
  },
  data() {
		return{
			isShowNav: false
		}
  },
  methods: {
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
.about{
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
  .btnBox{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 1.86rem;
    z-index: 99;
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
      background: #fff;
      -webkit-transition: all 0.3s ease-out 0s;
      -moz-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
      img{
        margin: 0.08rem 0.1rem;
        float: left;
      }
    }
  }
  .bannerBox{
    width: 100%;
    // height: 5.25rem;
    height: auto;
    margin-bottom: 0.55rem;
    img{
      width: 100%;
      height: auto;
    }
  }
  .companyDetail{
    width: 100%;
    height: auto;
    padding-bottom: 0.45rem;
    text-align: center;
  }
  .service{
    width: 100%;
    height: auto;
    padding-bottom: 0.45rem;
    text-align: center;
  }

  .jion{
    width: 100%;
    height: 7.65rem;
    .title{
      width: 100%;
      height: auto;
      img{
        width: 100%;
        height: auto;
      }
    }
    .content{
      width: 100%;
      height: 4.8rem;
      padding: 0 16%;
      .left{
        width: 50%;
        height: 4.3rem;
        float: left;
        margin-top: 0.84rem;
        border-right: 2px solid #eaeaea;
        img{
          width: 67%;
          display: block;
          margin: 0.5rem auto;
        }
        .p1{
          width: 100%;
          font-size: 0.28rem;
          text-align: center;
        }
        .p2{
          width: 100%;
          font-size: 0.22rem;
          text-align: center;
          margin-top: 0.9rem;
        }
      }
      .right{
        width: 50%;
        height: 4.3rem;
        float: right;
        margin-top: 0.84rem;
        img{
          width: 67%;
          display: block;
          margin: 0.5rem auto;
        }
        .p1{
          width: 100%;
          font-size: 0.28rem;
          text-align: center;
        }
        .p2{
          width: 100%;
          font-size: 0.22rem;
          text-align: center;
          margin-top: 0.9rem;
        }
      }
    }
  }



  // .teamTitle{
  //   width: 100%;
  //   text-align: center;
  //   font-size: 0.42rem;
  //   margin-top: 1.2rem;
  //   margin-bottom: 0.5rem;
  // }


  // .team{
  //   width: 90%;
  //   height: auto;
  //   margin: 0 auto;
  //   margin-bottom: 0.9rem;
  //   .item{
  //     width: 100%;
  //     height: 2.14rem;
  //     .left{
  //       width: 34.78%;
  //       height: 100%;
  //       float: left;
  //       img{
  //         width: 50%;
  //         height: 100%;
  //       }
  //     }
  //     .right{
  //       width: 61.84%;
  //       height: 100%;
  //       float: right;
  //       box-sizing: border-box;
  //       padding-top: 1.05rem;
  //       p{
  //         font-size: 0.18rem;
  //         line-height: 0.35rem;
  //         color: #808588;
  //       }
  //     }
  //   }
  //   .item:nth-child(odd){
  //     .left{
  //       img{
  //         float: right;
  //       }
  //     }
  //   }
  //   .item:nth-child(even){
  //     .left{
  //       img{
  //         float: left;
  //       }
  //     }
  //   }
  // }
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
  .page{
    width: 100%;
    height: 1.14rem;
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
  .navPageShow{
		left: 0;
	}
}
</style>

<style>
.bigTitle{
  font-size: 0.18rem;
  color: #6b6775;
  font-weight: bold;
}
.smallTitle{
  line-height: 0.52rem;
  font-size: 0.16rem;
  color: #6e7679;
}
.aboutText{
  font-size: 0.16rem;
  color: #646a6a;
  line-height: 0.3rem;
  padding-top: 0.27rem;
  background: url('../assets/tri.png') no-repeat center top;
}
</style>

