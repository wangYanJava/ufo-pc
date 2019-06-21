<template>
  <div class="pageBottom">
    <div class="contBox">
      <div class="top">
        <p class="companyName">北京同创新业有限公司</p>
        <ul>
            <li 
            v-for="(item,index) in list" 
            :key="index" 
            @click="toPage(item,index)"
            >
              {{item.name}}
            </li>
          </ul>
        
      </div>

      <div class="mid">
        <div class="left">
          <ul>
            <li><span>智能设计</span></li>
            <li><span>高效省时</span></li>
            <li><span>直选班组</span></li>
            <li><span>无中间价</span></li>
            <li><span>先装后付</span></li>
            <li><span>征信白条</span></li>
          </ul>
        </div>
        <div class="center">
          <ul>
          <li>
            地址：<span>成都市高新区益州大道中段星宸国际B座1503号</span>
          </li>
          <li>
            邮编：<span>6100000</span>
          </li>
          <li>
            电话：<span>028-85521744</span>
          </li>
          <li>
            Q Q：<span>3235046695</span>
          </li>
          <li>
            邮箱：<span>weilaigongzhuang@163.com</span>
          </li>
        </ul>
        </div>
        <div class="right">
          <p>公众号:</p>
          <img src="../../assets/gonzhonghao.jpg" alt="">
        </div>
      </div>

    <div class="PageFooter">
      <div class="footer">
        <p>北京同创新业科技有限公司COPYRIGHT©2017包工侠baogongxia.com 备案号： 京ICP1备16032010号</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageBottom',
  data() {
    return{
      list: [],
    }
  },
  created() {
    this.list = [
      {
        name:'首页',
        path: '/home'
      },
      {
        name:'案例',
        path: '/case'
      },
      {
        name:'服务',
        path: '/service'
      },
      {
        name:'客户',
        path: '/curpartner'
      },
      {
        name:'新闻',
        path: '/news'
      },
      {
        name:'我们',
        path: '/about'
      },
    ]
  },
  methods: {
    toPage(item,index) {
      console.log(item)
      this.$router.push({
        path: item.path,
      })
      window.scroll(0,0)
    }
  }
}
</script>

<style lang="scss" scoped>
.pageBottom{
  width: 100%;
  height: 5.94rem;
  background: #fafafa;
  overflow: hidden;
  .contBox{
    width: 100%;
    height: 6.7rem;
    .top{
      width: 100%;
      padding: 0 5%;
      height: 1.38rem;
      margin: 0 auto;
      border-bottom: 2px solid #f1f1f1;
      position: relative;
      .companyName{
        width: 27.53%;
        font-size: 0.22rem;
        float: left;
        color: #9c9c9c;
        margin-top: 0.7rem;
        letter-spacing: 0.01rem;
      }
      ul{
          width: 65%;
          height: 1.06rem;
          position: absolute;
          bottom: 0;
          right: 0;
          li{
            width: 14.43%;
            height: 1.06rem;
            float: left;
            line-height: 1.06rem;
            text-align: center;
            color: #9f9f9f;
            font-size: 0.18rem;
            letter-spacing: 0.01rem;
            cursor: pointer;
          }
      }
    }
    .mid{
      width: 100%;
      height: 3.6rem;
      .left{
        width: 29.68%;
        height: 100%;
        float: left;
        border-right: 2px solid #f1f1f1;
        ul{
          width: 100%;
          height: 100%;
          font-size: 0;
          padding-top: 0.55rem;
          padding-right: 7.5%;
          li{
            display: inline-block;
            margin-bottom: 0.3rem;
            width: 33.5%;
            height: 0.57rem;
            border: 2px solid #e8e8e8;
            color: #9a9a9a;
            font-size: 0.18rem;
            line-height: 0.57rem;
            text-align: center;
          }
          li:nth-child(odd){
            margin-left: 17%;
          }
          li:nth-child(even){
            margin-left: 13.5%;
          }
        }
      }
      .center{
        width: 47.3%;
        height: 100%;
        float: left;
        padding-top: 0.55rem;
        padding-left: 8.5%;
        ul{
          li{
            color: #9f9f9f;
            font-size: 0.18rem;
            margin-bottom: 0.3rem;
            letter-spacing: 0.01rem;
          }
        }
      }
      .right{
        width: 15%;
        height: 100%;
        float: left;
        padding-top: 0.55rem;
        p{
          padding-left: 0.1rem;
          color: #9f9f9f;
          font-size: 0.18rem;
        }
        img{
          width: 1.4rem;
          height: 1.4rem;
          margin-top: 0.25rem;
          float: left;
        }
      }
    }
  }
  .PageFooter{
    width: 100%;
    height: 0.73rem;
    .footer{
      width: 89.06%;
      margin: 0 auto;
      color: #adadad;
      font-size: 0.16rem;
      line-height: 0.73rem;
    }
  }
}
</style>

