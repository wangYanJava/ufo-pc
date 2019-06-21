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
    <!-- 标题 -->
    <div class="pageTitle">
      <p class="chinTitle">合作伙伴</p>
      <p class="engTitle">Curpartner</p>
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
        vertical-align: middle;
        td{
          width: 24.8%;
          display: inline-block;
          height: 100%;
          span{
            display: inline-block;
            width: 100%;
            height: 1.3rem;
            border-left: 1px solid #eeeeee;
            border-right: 1px solid #eeeeee;
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
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #3f3f3f;
    color: #FFF;
}
.partner .partnerList table tr td span img{
  max-height: 100% !important;
}
</style>

