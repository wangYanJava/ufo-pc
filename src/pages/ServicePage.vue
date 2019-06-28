<template>
  <div class="service">
    <div class="btnBox">
      <!-- 导航切换按钮 -->
      <div class="navBtn" @click="showNav">
          <img src="../assets/navBtn.png" alt="">
        </div>
    </div>
    <!-- logo -->
    <div class="pz_top">
      <div class="top">
          <div class="logo">
            <img src="../assets/logoBlack.png">
          </div>
      </div>
    </div>
    <!-- banner图 -->
    <div class="topBanner">
      <img src="../assets/serviceTop.png" alt="">
    </div>   
    <!-- 标题 -->
    <div class="title1">
      <span>New&nbsp;&nbsp;and&nbsp;&nbsp;Trends</span>
    </div>
    <div class="title2">
      <span>空间设计</span>
    </div>
    <div class="text">
      will do all the things to achieve the target.As long we have goal<br />
      to be realizedwon't be blind at least.
    </div>
    <div class="wrap1">
      <div  class="item" v-for="(item,index) in list1" :key="index" @mouseenter="changeCurrent(item,index)" :class="{currActive1:activeIndex==index}">
        <div class="img" :class="{activeImg:activeIndex==index}"></div>
        <div class="blue">
          <p class="p p1">{{item.p1}}</p>
          <p class="p p2">{{item.p2}}</p>
          <p class="p p3">{{item.p3}}</p>
        </div>
      </div>
      <div class="btn">
        <div class="cirBox">
          <!-- <a href="javascript:void(0)" @click="changeCurrent(index)" v-for="index in 4" :key="index" :class="{currActive:activeIndex==index}"> -->
          <div @mouseenter="changeCurrent(item,index)" @click="changeCurrent(item,index)" v-for="(item,index) in list1" :key="index" :class="{currActive2:activeIndex==index}"></div>
        <!-- </a> -->
        </div>
      </div>
    </div>

    <!-- 标题 -->
    <div class="mid">
        <div class="t1">
          <span>
            construction&nbsp;technique
          </span>
        </div>
        <div class="t2">
          施工技术
        </div>
      </div>

    <div class="sectBox">
      <div class="sect sect1">
        <div class="ico">
          <img src="../assets/ser1.png" alt="">
        </div>
        <div class="title">
          放心装修，真正0首付
        </div>
        <div class="detail">
          互联网装修公司没有安全感？首付太多，不放心？<br />
          没关系，我们支持真正的零首付。先装修后付款，看到隐蔽工程满意后再付款，不必担心装修不好有风险，我们为您的装修一路保驾护航。
        </div>
      </div>
      <div class="sect sect2">
        <div class="ico">
          <img src="../assets/ser2.png" alt="">
        </div>
        <div class="title">
          直选施工班组
        </div>
        <div class="detail">
          蔚蓝公装是包工侠旗下孵化的公装品牌。我们拥有装修一级资质，每一个施工班组都是经过实际施工考验，<br />并且在包工侠平台积累了足够
          好的江湖信用的。业主进行装修前可以充分考察施工班组的业绩及信用，<br />直接选择满意的班组施工，不需要支付任何额外费用，拒绝中间商加价，用最低的价格做最好的装修。
        </div>
      </div>
      <div class="sect sect3">
        <div class="ico">
          <img src="../assets/ser3.png" alt="">
        </div>
        <div class="title">
          AI智能监理
        </div>
        <div class="detail">
          人工监理不能时刻在场，现场施工不放心，又没时间时刻关注进度，这些烦恼我们通通都懂，并且我们也为您<br />找到了解决办法。我们现场安装智能AI摄像
          头，时刻关注您的装修进度，按时发送进度报告给您。您在闲暇时还可以在自己手机上查看过往的施工图片和正在进行的施工视频，施工情况一手掌握，不用再为施工监管劳心费力。
        </div>
      </div>
      <div class="sect sect4">
        <div class="ico">
          <img src="../assets/ser4.png" alt="">
        </div>
        <div class="title">
          优质材料精心选，打破底价放心买
        </div>
        <div class="detail">
          我们不敢保证每一样材料都是市场上价格最低的，但是<br />我们可以确保我们采购的材料绝对是同等品质下最具性价比的。因为质量往往和价格挂钩，我们需要在确保材料安
          全、环保的前提下为您选择用料，价格绝对透明公正，放心使用。
        </div>
      </div>
    </div>
    <!-- 软装服务 -->
    <div class="wrap2">
      <div class="title">
        <div class="t1">
          <span>
            Our&nbsp;Scenic&nbsp;Service
          </span>
        </div>
        <div class="t2">
          软装服务
        </div>
      </div>
      <div class="content">
        <div class="prev" @click="lastPage(clickCount)">

        </div>
        <div class="next" @click="nextPage(clickCount)">

        </div>
        <div class="serItem" v-for="(item,index) in currImgList" :key="index">
          <div class="icon"></div>
          <div class="titleBox">
              {{item.title}}
          </div>
          <div class="pic">
            <img :src="item.url" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 办公服务 -->
    <div class="office">
      <div class="contBox">
        <ul>
          <li>
            <img src="../assets/9.png" alt="">
            <span>甲醛治理</span>
          </li>
          <li>
            <img src="../assets/10.png" alt="">
            <span>日常保洁</span>
          </li>
          <li>
            <img src="../assets/lz.png" alt="">
            <span>绿植租赁</span>
          </li>
          <li>
            <img src="../assets/zn.png" alt="">
            <span>智能办公</span>
          </li>
        </ul>
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
  name: 'ServicePage',
  components: {
    PageBottom
  },
  data() {
    return {
      isShowNav: false,
      activeIndex: 2,
      list1: [],
      imgList: [],
      currImgList:[],
      listCount: '',
      clickCount: 1,
      start: 0,
      end: 4
    }
  },
  created() {
    this.scrollTop() 

    this.list1 = [
      {
        p1:'AI智能设计，快速出图',
        p2:'Announcement message',
        p3:`凭借多年的空间设计经验以及空间使用的研究总结，根据不同场景、不同风格研发上百个设计模块及配置单元。通过这些模块化的组合拼接，实现空间设计的矢量化，用AI设计代替人工设计，大大缩短了设计周期，充分节省了客户的等待时间。`
      },
      {
        p1:'激发灵感，创造不一般的环境',
        p2:'Safety system     ',
        p3:'每一个客户都希望自己的环境独特而又不枯燥，充满生机而又不凌乱。我们的设计师通过与客户的沟通和交流，按照客户对空间的使用用途，使用频率等方面综合考虑，优化空间的布局，妥善设置各种设施，激发团队的灵感，创造不一样的空间。'
      },
      {
        p1:'彰显文化底蕴，切合企业的灵魂',
        p2:'Boom shakalak',
        p3:'无论是商业大厦，餐饮店铺还是企业办公室，每一个业主都是希望自己的物业彰显出自己的品味，体现出企业的文化底蕴，无形中让访客和员工都被熏陶，自然而言的感受到业主的用心处。我们的设计充分理解业主的这种需求，恰到好处的实现业主的需求，让建筑可以说话，展现不一样的风情。'
      },
      {
        p1:'包容多样需求，满足不同功能场景',
        p2:'Announcement message',
        p3:'每一次装修都源于一次对美的追求，美的展示方式千万种，但我们就是能在千万种美中找到最适合你的，无论是办公，餐饮，商厦或是各种不同功能分区，我们都能为您做到恰好的设计，包容各类需求。好的装修源于一次成功的设计。'
      },
    ]

    this.imgList = [
      {
        title: '敞开办公区',
        url: require('../assets/rz-1.png')
      },{
        title: '大厅',
        url: require('../assets/rz-2.png')
      },
      {
        title: '等待区',
        url: require('../assets/rz-3.png')
      },{
        title: '电梯间',
        url: require('../assets/rz-4.png')
      },
      {
        title: '多功能厅',
        url: require('../assets/rz-5.png')
      },{
        title: '会议室',
        url: require('../assets/rz-6.png')
      },
      {
        title: '健身房',
        url: require('../assets/rz-7.png')
      },{
        title: '就餐区',
        url: require('../assets/rz-8.png')
      },
      {
        title: '洽谈室',
        url: require('../assets/rz-9.png')
      },{
        title: '休闲区',
        url: require('../assets/rz-10.png')
      },
      {
        title: '展览厅',
        url: require('../assets/rz-11.png')
      },{
        title: '总裁办公室',
        url: require('../assets/rz-12.png')
      },{
        title: '走廊',
        url: require('../assets/rz-13.png')
      },{
        title: '理疗室',
        url: require('../assets/rz-14.png')
      },{
        title: '前台',
        url: require('../assets/rz-15.png')
      },{
        title: '宴会厅',
        url: require('../assets/rz-16.png')
      }
    ]

    // 第一次进入是当前页数据列表
      this.currImgList = this.imgList.slice(this.start, this.end)
      this.listCount = Math.ceil(this.imgList.length / 4)
  },
  methods:{
    scrollTop() {
      window.scroll(0,0)
    },

    lastPage(curr) {
      this.clickCount = curr - 1
      if(this.clickCount < 1) {
        this.clickCount = 1
      }
      this.start = this.start - 4
      if(this.start < 0){
        this.start = 0
      } 
      this.end = this.end - 4
      if(this.end < 4){
        this.end = 4
      } 
      this.currImgList = this.imgList.slice(this.start, this.end)
    },
    nextPage(curr) {
      this.clickCount = curr + 1
      if(this.clickCount > 3){
        this.clickCount = 4
      }
      this.start = this.start + 4
      this.end = this.end + 4
      if(this.clickCount >= 4){
        this.clickCount = 4
        this.start = 12
        this.end = 16
      } 

      this.currImgList = this.imgList.slice(this.start, this.end)
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
		},
    goAnchor(selector) {
      console.log(selector)
      var anchor = this.$el.querySelector(selector)
      document.documentElement.scrollTop = anchor.offsetTop
    },
    changeCurrent(item,index) {
      console.log(index)
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.service{
  width: 100%;
  .pz_top{
			float: left;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0.45rem;
			z-index: 80;
			-webkit-transition: all 0.3s ease-out 0s;
			-moz-transition: all 0.3s ease-out 0s;
			-o-transition: all 0.3s ease-out 0s;
			transition: all 0.3s ease-out 0s;
			.top{
				width: 100%;
				float: left;
				height: 0.26rem;
				padding: 0 0.6rem;
				.logo {
					float: left;
					width: 2.04rem;
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
    // position: fixed;
    // left: 0;
    // top: 0;
    height: 1.1rem;
    z-index: 99;
    .navBtn{
      // position: fixed;
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
  .topBanner{
    width: 100%;
    height: auto;
    img{
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .title1{
    width: 100%;
    height: 0.47rem;
    margin-top: 0.35rem;
    text-align: center;
    span{
      display: block;
      height: 0.47rem;
      width: 3.2rem;
      font-size: 0.34rem;
      color: #393939;
      font-weight: bold;
      margin: 0 auto;
      background: url('../assets/cir.png') no-repeat right top;
    }
  }
  .title2{
    width: 100%;
    height: 0.5rem;
    text-align: center;
    span{
      display: block;
      height: 0.5rem;
      line-height: 0.5rem;
      width: 3.2rem;
      font-size: 0.18rem;
      color: #383838;
      margin: 0 auto;
      background: url('../assets/smBorder.png') no-repeat center bottom;
    }
  }
  .text{
    width: 55.46%;
    height: 1.2rem;
    margin: 0 auto;
    background: url('../assets/longBorder.png') no-repeat center bottom;
    background-size: 100% auto;
    color: #989898;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.2rem;
    padding-top: 0.15rem;
    word-spacing: 0.01rem;
  }
  .wrap1{
    width: 80%;
    height: 6.85rem;
    margin: 0 auto;
    position: relative;
    .item{
      width: 25%;
      height: 5.8rem;
      font-size: 0.18rem;
      float: left;
      cursor: pointer;
      .img{
        width: 1.73rem;
        height: 1.73rem;
        margin: 0.65rem auto;
        background: url('../assets/5.png') no-repeat center;
        background-size: contain !important;
      }
      .blue{
        width: 100%;
        height: 2.65rem;
        margin-top: -0.17rem;
        box-sizing: content-box;
        padding-top: 0.2rem;
        position: relative;
        .p{
          text-align: center;
        }
        .p1{
          font-size: 0.18rem;
          // color: #383838;
        }
        .p2{
          font-size: 0.12rem;
          color: #383838;
          margin-top: 0.1rem;
        }
        .p3{
          width: 80%;
          font-size: 0.14rem;
          color: #888888;
          line-height: 0.22rem;
          margin: 0 auto;
          margin-top: 0.15rem;
        }
      }
    }
    .item:nth-of-type(1){
      .img{
        background: url('../assets/s-1-1.png') no-repeat center;
      }
      .activeImg{
        background: url('../assets/s-1-2.png') no-repeat center;
      }
    }
    .item:nth-of-type(2){
      .img{
        background: url('../assets/s-2-1.png') no-repeat center;
      }
      .activeImg{
        background: url('../assets/s-2-2.png') no-repeat center;
      }
    }
    .item:nth-of-type(3){
      .img{
        background: url('../assets/s-3-1.png') no-repeat center;
      }
      .activeImg{
        background: url('../assets/s-3-2.png') no-repeat center;
      }
    }
    .item:nth-of-type(4){
      .img{
        background: url('../assets/s-4-1.png') no-repeat center;
      }
      .activeImg{
        background: url('../assets/s-4-2.png') no-repeat center;
      }
    }
    .blue::before{
      content: '';
      display: block;
      width: 100%;
      height: 0.11rem;
      position: absolute;
      left: 0;
      top: -0.1rem;
    }
    .btn{
      width: 100%;
      height: 1.85rem;
      position: absolute;
      bottom: 0;
      left: 0;
      .cirBox{
        width: 1.8rem;
        height: 0.16rem;
        margin: 0 auto;
        margin-top: 1.2rem;
        div{
          width: 0.16rem;
          height: 0.16rem;
          float: left;
          border-radius: 50%;
          background: #d3d3d3;
          margin: 0 0.1rem;
          cursor: pointer;
        }
        .currActive2{
          width: 0.5rem;
          border-radius: 0.5rem;
          background: #127ff4;
        }
      }
      
    }
    .currActive1{
      .img{
        // background: url('../assets/7.png') no-repeat center;
      }
      .blue{
        background: #0f79e7;
        .p{
          color: #fff;
        }
      }
      .blue::before{
        background: url('../assets/ser_tri.png') no-repeat center;
      }
    }
  }

  .mid{
    width: 100%;
    height: 1.46rem;
    margin: 0.5rem auto;
    margin-top: 0;
    padding-top: 0.8rem;
    overflow: hidden;
    .t1{
      width: 100%;
      height: 0.36rem;
      line-height: 0.36rem;
      font-size: 0.22rem;
      color: #343b43;
      text-align: center;
      position: relative;
      font-weight: bold;
      span{
        display: block;
      }
      span::before{
        content: '';
        width: 39%;
        height: 100%;
        background: url('../assets/33.png') no-repeat right center;
        background-size: 90% 0.02rem;
        position: absolute;
        left: 0;
        top: 0;
      }
      span::after{
        content: '';
        width: 39%;
        height: 100%;
        background: url('../assets/34.png') no-repeat left center;
        background-size: 90% 0.02rem;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .t2{
      width: 100%;
      height: 0.18rem;
      font-size: 0.18rem;
      line-height: 0.28rem;
      text-align: center;
      color: #383838;
    }
  }
  .sectBox{
    width: 90%;
    margin: 0 auto;
    height: 14.32rem;
    background: url('../assets/bg1-1.png') no-repeat center center;
    background-size: 100% 100%;
    .sect{
      width: 100%;
      height: 3.58rem;
      overflow: hidden;
      .ico{
        width: 0.67rem;
        height: 0.67rem;
        margin: 0.35rem auto;
        img{
          float: left;
          width: 100%;
          height: 100%;
        }
      }
      .title{
        font-size: 0.22rem;
        text-align: center;
        color: #fff;
      }
      .detail{
        font-size: 0.18rem;
        line-height: 0.32rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 0.55rem;
        color: #e9e9e9;
        width: 91.6%;
      }
    }
    .sect:nth-child(even){
      .title{
        color: #030303;
      }
      .detail{
        color: #353432;
      }
    }
  }
  .wrap2{
    width: 100%;
    height: 7.22rem;
    .title{
      width: 60.41%;
      height: 1.46rem;
      margin: 0 auto;
      padding-top: 0.8rem;
      .t1{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.22rem;
        color: #343b43;
        text-align: center;
        position: relative;
        font-weight: bold;
        span{
          display: block;
        }
        span::before{
          content: '';
          width: 39%;
          height: 100%;
          background: url('../assets/33.png') no-repeat right center;
          background-size: 90% 0.02rem;
          position: absolute;
          left: 0;
          top: 0;
        }
        span::after{
          content: '';
          width: 39%;
          height: 100%;
          background: url('../assets/34.png') no-repeat left center;
          background-size: 90% 0.02rem;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .t2{
        width: 100%;
        height: 0.18rem;
        font-size: 0.18rem;
        line-height: 0.28rem;
        text-align: center;
        color: #383838;
      }
    }
    .content{
      width: 60.41%;
      height: 4.86rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-top: 0.4rem;
      position: relative;
      .prev{
        width: 0.4rem;
        height: 0.6rem;
        background: url('../assets/prev2.png') no-repeat center;
        background-size: contain;
        position: absolute;
        top: 45%;
        left: -12%;
        cursor: pointer;
      }
      .next{
        width: 0.4rem;
        height: 0.6rem;
        background: url('../assets/next2.png') no-repeat center;
        background-size: contain;
        position: absolute;
        top: 45%;
        right: -12%;
        cursor: pointer;
      }
      .serItem{
        width: 22.27%;
        height: 4.2rem;
        border: 2px solid #9dc8ea;
        cursor: pointer;
        position: relative;
        .icon{
          width: 0.79rem;
          height: 0.79rem;
          background: url('../assets/ser11.png') no-repeat center;
          margin: 0 auto;
          margin-top: -21.5%;
        }
        .titleBox{
          width: 100%;
          height: 0.6rem;
          font-size: 0.24rem;
          text-align: center;
          margin-top: 0.2rem;
        }
        .pic{
          width: 100%;
          height: 3rem;
          position: absolute;
          left: 0;
          bottom: 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .serItem:hover{
        .icon{
          background: url('../assets/32.png') no-repeat center;
          background-size: contain;
          -webkit-transition: all 0.3s ease-out 0s;
          -moz-transition: all 0.3s ease-out 0s;
          -o-transition: all 0.3s ease-out 0s;
          transition: all 0.3s ease-out 0s;
        }
      }
    }
  }
  .office{
    width: 90%;
    margin: 0 auto;
    height: 7.27rem;
    overflow: hidden;
    background: url('../assets/b-bg.png') no-repeat center center;
    .contBox{
      width: 60.41%;
      height: 2.4rem;
      margin: 0 auto;
      margin-top: 2.9rem;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        li{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          img{
            width: 100%;
          }
          span{
            font-size: 0.26rem;
            color: #fff;
          }
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
.service .navBtn{
  background: #dedede;
}
@media screen and (max-width: 1360px){
  .service .wrap1 .item .blue{
    height: 2.95rem !important;
  }
  .service .wrap1 .item{
    height: auto;
  }
  .service .wrap1 .item .img{
    width: 1.43rem !important;
    height: 1.43rem !important;
    margin: 0.55rem auto !important;
}
.service .wrap2 .content{
  width: 75.41% !important;
}
.service .wrap2 .content .serItem .icon{
    /* left: 28% !important; */
}
.service .wrap2 .content .serItem:hover .titleBox span{
    left: 13% !important;
}
.service .wrap2 .content .serItem:hover .titleBox span::before{
    width: 30% !important;
    right: -20% !important;
}
.service .wrap2 .content .serItem:hover .titleBox span::after{
    width: 30% !important;
    left: -20% !important;
}
.service .wrap2 .title .t1 span::before{
  width: 33% !important;
}
.service .wrap2 .title .t1 span::after{
  width: 33% !important;
}
}
@media screen and (max-width: 1260px) {
  .service .wrap1 .item .blue{
    height: 3.2rem !important;
  }
}
@media screen and (max-width: 767px){
  .service .navBtn{
		width: 0.6rem;
		height: 0.5rem;
    background: #f7f7f7;
    top: 0 !important;
	}
  .service .navBtn img{
		margin: 0.08rem 0.09rem;
	}
  .service .navPage .ph_menu .nav_box{
		padding-top: 50px;
	}
	.service .navPage .ph_menu .nav_box .nli{
		float: none;
		width: 100%;
		height: 60px;
		padding: 0 5%;
		margin-bottom: 20px;
	}
	.service .navPage .ph_menu .nav_box .nli:hover span{
		padding-top: 0;
	}
	.service .navPage .ph_menu .nav_box .nli p span{
		padding-top: 0;
	}
  .service .title2{
    margin: 0.15rem auto;
  }
  .service .title2 span{
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .service .text{
    width: 75%;
  }
  .service .title1 span{
    width: 3.8rem;
  }
  .service .wrap1{
    width: 85%;
    height: auto;
  }
  .service .wrap1 .item{
    width: 50%;
    float: none;
    display: inline-block;
    vertical-align: top;
  }
  .service .wrap1 .item .blue{
    height: 5rem !important;
  }
  .service .wrap1 .btn{
    position: relative;
  }
  .service .wrap1 .item .blue .p1{
    font-size: 0.24rem;
  }
  .service .wrap1 .item .blue .p2{
    font-size: 0.16rem;
  }
  .service .wrap1 .item .blue .p3{
    width: 88%;
    font-size: 0.24rem;
    line-height: 0.3rem;
  }
  .service .wrap1 .btn{
    height: 0.8rem;
  }
  .service .wrap1 .btn .cirBox{
    width: 3.5rem;
    height: 0.25rem;
  }
  .service .wrap1 .btn .cirBox div{
    width: 0.25rem;
    height: 0.25rem;
    margin: 0 0.25rem;
  }
  .service .mid{
    height: 1.6rem;
  }
  .service .mid .t2{
    font-size: 0.36rem;
    line-height: 0.5rem;
  }
  .service .sectBox{
    width: 94%;
    height: 18rem;
  }
  .service .sectBox .sect{
    height: 4.5rem;
  }
  .service .sectBox .sect .ico{
    /* margin: 0.25rem auto; */
  }
  .service .sectBox .sect .title{
    font-size: 0.3rem;
  }
  .service .sectBox .sect .detail{
    width: 85%;
    margin-top: 0.25rem;
    /* font-size: 0.2rem; */
    font-size: 11px;
    line-height: 18px;
  }
   .service .wrap2 .title{
     height: 1.6rem;
   }
  .service .wrap2 .title .t2{
    height: 0.26rem;
    font-size: 0.36rem;
    line-height: 0.5rem;
  }
  .service .wrap2 .content{
    width: 85%;
  }
  .service .wrap2 .content .serItem{
    width: 46%;
    margin: 0.5rem 1.5%;
    float: left;
  }
  .service .wrap2 .content{
    height: 10.7rem;
    display: block;
  }
  .service .wrap2 .content .prev{
    top: 50%;
  }
  .service .wrap2 .content .next{
    top: 50%;
  }
  .service .wrap2 .content .serItem .icon{
    background-size: contain;
  }
  .service .office{
    height: 4.2rem;
  }
  .service .office .contBox{
    width: 80%;
    margin-top: 0.9rem;
  }
  .service .office .contBox ul li img{
    width: 80%;
    margin: 0 auto;
  }
  .service .mid .t1 span::before{
    background: none;
  }
  .service .mid .t1 span::after{
    background: none;
  }
  .service .wrap2 .title .t1 span::before{
    background: none;
  }
  .service .wrap2 .title .t1 span::after{
    background: none;
  }
}
</style>

