<template>
  <div class="casePage">
    <div class="topnav">
      <div class="top">
        <div class="case-logo"><a href="/" title=""><img src="../assets/logoBlack.png"></a></div>
        <!-- 导航切换按钮 -->
        <div class="navBtn" @mouseover="showNav">
          <img src="../assets/navBtn.png" alt="">
        </div>
      </div>
  </div>
  <!-- 标题 -->
  <div class="pageTitle">
    <p class="chinTitle">案例</p>
    <p class="engTitle">Case</p>
    <p></p>
  </div>
  <!-- 分类按钮 -->
  <div class="cateBtn">
    <ul>
      <li v-for="(item,index) in navList" :key="index" :class="{currNav:currNavIndex==index}" @click="changeNav(item,index)">
        {{item}}
      </li>
    </ul>
  </div>
  <!-- 案例列表 -->
  <div class="caseList">
    <ul>
      <li v-for="(item,index) in currentCaseList" :key="index" @click="detail(item,index)">
        <img :src="item.img[0].url" alt="">
        <h4>{{item.name}}</h4>
        <h6>{{item.address}}</h6>
      </li>
    </ul>
  </div>
  <!-- 分页器 -->
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :page-size="8"
      :total="total">
    </el-pagination>
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
  name: 'Case',

  components: {
    PageBottom
  },
  data() {
		return{
      isShowNav: false,
      navList: ['全部','餐饮空间设计','办公空间设计','酒店会所设计','别墅空间设计','其他'],
      currNavIndex: 0,
      current: 1,
      pageSize: 8,
      total: null,
      allList: [],
      _officeList: {},
      _hotelList: {},
      _canyinList: {},
      _villaList: {},
      _otherList: {},
      currList: '', //分页前的list
      currentCaseList: '',//做过分页截取后的数组,用作渲染
		}
  },
  created() {
    this.$http.get('../../static/case.json').then(resp => {
      console.log(resp)
      this._officeList = resp.data.case[0]
      this._villaList = resp.data.case[1]
      this._canyinList = resp.data.case[2]
      this._hotelList = resp.data.case[3]
      this._otherList = resp.data.case[4]
      this.allList.push(...this._officeList.data)
      this.allList.push(...this._villaList.data)
      this.allList.push(...this._canyinList.data)
      this.allList.push(...this._hotelList.data)
      this.allList.push(...this._otherList.data)
      this.currList = this.allList
      // 第一次进入是当前页数据列表
      this.currentCaseList = this.currList.slice(0, 8)
      this.total = this.currList.length
    })
  },
	methods: {
    // 查看详情
    detail(item,index) {
      this.$router.push({
        path: '/caseDetail',
        params: item,
      })
      sessionStorage.setItem("case", JSON.stringify(item));
    },
    // 点击页码
    pageChange(pageNumber){
      this.current = pageNumber;  // 当前页改变
      // 当前页起始下标及结束下标
      const start = (this.current - 1) * this.pageSize;
      const end = start + this.pageSize;
      // 当前页数据列表
      this.currentCaseList = this.currList.slice(start, end)
    },
    // 切换分类
    changeNav(item,index) {
      this.currNavIndex = index
      console.log(item)
      if(item == '全部'){
          this.currList = this.allList
      }
      if(item == '办公空间设计'){
          this.currList = this._officeList.data
      }
      if(item == '酒店会所设计'){
          this.currList = this._hotelList.data
      }
      if(item == '餐饮空间设计'){
          this.currList = this._canyinList.data
      }
      if(item == '别墅空间设计'){
          this.currList = this._villaList.data
      }
      if(item == '其他'){
        console.log("6")
          this.currList = this._otherList.data
      }
      console.log(this.currList)
      this.currentCaseList = this.currList.slice(0, 8)
      this.total = this.currList.length
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
.casePage{
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
  .cateBtn{
    width: 100%;
    height: 1.02rem;
    border-bottom: 2px solid #ececec;
    ul{
      // width: 8.7rem;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      li{
        // float: left;
        // height: 100%;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.02rem;
        height: 1.02rem;
        font-size: 0.16rem;
        padding: 0 0.35rem;
        color: #777777;
        cursor: pointer;
        background: url('../assets/cateBg.png') no-repeat right center;
      }
      li:nth-last-child(1){
        background: none;
      }
      .currNav{
        color: #373737;
      }
    }
  }
  .caseList{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0 0.26rem;
    margin-top: 1.68rem;
    ul{
      width: 100%;
      height: auto;
      li{
        width: 23.22%;
        height: 4.85rem;
        display: inline-block;
        vertical-align: text-top;
        margin-left: 0.15rem;
        cursor: pointer;
        img{
          // width: 4.6rem;
          // height: 3rem;
          width: 100%;
        }
        h4{
          font-size: 0.24rem;
          color: #766e6b;
          margin-top: 0.3rem;
          width: 100%;
          overflow: hidden;/*超出部分隐藏*/
          text-overflow:ellipsis;/* 超出部分显示省略号 */
          white-space: nowrap;/*规定段落中的文本不进行换行 */
        }
        h6{
          font-size: 0.18rem;
          color: #9ba9b2;
          margin-top: 0.15rem;
        }
      }
    }
  }
  .page{
    width: 100%;
    height: 1.14rem;
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
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #3f3f3f;
    color: #FFF;
}
@media screen and (max-width: 1360px){
  .casePage .caseList ul li{
    height: 4.35rem !important;
  }
}
</style>

