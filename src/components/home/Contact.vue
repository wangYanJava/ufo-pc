<template>
  <div ref="box" class="contact">
    <div class="contBox">
      <div class="middlebox">
        <div class="c_1570">
          <div class="tit_1 tit_1_w">
            联系
            <span>/contact</span>
            <h1>c&nbsp;o&nbsp;n&nbsp;t&nbsp;a&nbsp;c&nbsp;t</h1>
          </div>
          <div class="row_1">
            <div class="hometop">
              <el-carousel 
              :interval="5000" 
              arrow="always" 
              :autoplay="false"
              indicator-position="outside"
              direction="vertical"
              ref='regionItem'
              >
                <el-carousel-item>
                    <ul class="ul_1">
                        <li class="l1">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/addressIcon.png"
                                            alt="ADDRES" title="ADDRES"></div>
                                    <h4>ADDRES</h4>
                                    <div class="p">
                                        <p>四川省成都市高新区益州大道555号<br />星辰国际B座1503号</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l2">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/phoneIco.png"
                                            alt="PHONE" title="PHONE"></div>
                                    <h4>PHONE</h4>
                                    <div class="p">
                                        <p>028-85521744</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l3">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/emailIco.png"
                                            alt="e-MAIL" title="e-MAIL"></div>
                                    <h4>e-MAIL</h4>
                                    <div class="p">
                                        <p>028-85521744</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l4">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/tencentQQIco.png"
                                            alt="QQ" title="QQ"></div>
                                    <h4>QQ</h4>
                                    <div class="p">
                                        <p>3235046695</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                    </ul>
                </el-carousel-item>
                <el-carousel-item>
                    <ul class="ul_1">
                        <li class="l1">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/addressIcon.png"
                                            alt="ADDRES" title="ADDRES"></div>
                                    <h4>ADDRES</h4>
                                    <div class="p">
                                        <p>北京市丰台区大成南里二区<br />3号楼3层0309</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l2">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/phoneIco.png"
                                            alt="PHONE" title="PHONE"></div>
                                    <h4>PHONE</h4>
                                    <div class="p">
                                        <p>010-68696223‬</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l3">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/emailIco.png"
                                            alt="e-MAIL" title="e-MAIL"></div>
                                    <h4>e-MAIL</h4>
                                    <div class="p">
                                        <p>010-68696223</p>
                                    </div>
                                </span>
                            </div>
                        </li>

                        <li class="l4">
                            <div class="zbox"><span>
                                    <div class="ico"><img
                                            src="../../assets/tencentQQIco.png"
                                            alt="QQ" title="QQ"></div>
                                    <h4>QQ</h4>
                                    <div class="p">
                                        <p>3235046695</p>
                                    </div>
                                </span>
                            </div>
                        </li>
                    </ul>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="tab">
          <div class="homedown">
            <div 
            class="zbox"
            v-for="(item,index) in region" 
            :key="index" 
            :class="{currRegion:currRegionIndex == index}"
            @click="changeRegion(item,index)"
            >
              <div class="ico"></div>
              <h4>{{item}}</h4>
            </div>
          </div>
        </div>
        <!-- 切换箭头 -->
        <div class="prev" @click="toPrev"></div>
        <div class="next" @click="toNext"></div>
      </div>
    </div>
    <!-- 网页脚部 -->
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import BottomFooter from '../footer/BottomFooter.vue'
export default {
  name: "Contact",
  components: {
    BottomFooter,
  },
  data() {
    return {
      region: ['北京','成都'],
      currRegionIndex: 1,
      height: {
          height: ''
        },
    };
  },
  created() {
    this.getHeight()
    console.log(this.$refs)
      // this.$refs.regionItem.setActiveItem(0)
  },
  mounted() {
    this.$refs.box.style.height = this.height;
  },
  methods: {
    getHeight() {
        this.height=window.innerHeight+'px';
    },
    changeRegion(item,index) {
      this.currRegionIndex = index
      if(index === 0){
        this.$refs.regionItem.next()
      }
      if(index === 1){
        this.$refs.regionItem.prev()
      }
    },
    // 切换箭头
    toPrev(){
      if(this.currRegionIndex === 1){
        this.$refs.regionItem.prev()
        this.currRegionIndex = 0
      }
    },
    toNext(){
      if(this.currRegionIndex === 0){
        this.$refs.regionItem.next()
        this.currRegionIndex = 1
      }
    }
  }
};
</script>

<style lang="scss">
.contact {
  width: 100%;
  height: 100%;
  background: url("../../assets/lx-bg.png") no-repeat center center;
  background-size: cover;
  .contBox {
    width: 100%;
    // float: left;
    height: 100%;
    position: relative;
    padding-bottom: 0.66rem;
    display: table;
    vertical-align: middle;
    table-layout: fixed;
    .middlebox {
      display: table-cell;
      vertical-align: middle;
      position: relative;
      .c_1570{
        width: 100%;
        height: auto !important;
        position: relative;
        float: left;
        padding: 0 1.75rem;
        .tit_1 {
            width: 100%;
            float: left;
            position: relative;
            font-size: 0.36rem;
            color: #fff;
            font-weight: bold;
            letter-spacing: 0.01rem;
            line-height: 0.5rem;
            span{
                font-size: 0.24rem;
                color: #fff;
                opacity: 0.6;
                text-transform: uppercase;
                vertical-align: middle;
                line-height: 0.37rem;
                font-weight: normal;
                font-family: 'OPENSANS-LIGHT';
                margin-left: 0.1rem;
            }
            h1{
                position: absolute;
                left: -1.45rem;
                font-size: 0.8rem;
                color: #fff;
                opacity: 0.02;
                text-transform: uppercase;
                font-family: 'OPENSANS-BOLD';
                letter-spacing: 0.01rem;
                bottom: 0;
                line-height: 0.6rem;
                height: 0.76rem;
            }
        }
        .row_1 {
            margin: 0 -0.02rem;
            .hometop {
                width: 100%;
                float: left;
                margin-top: 73px;
                position: relative;
                ul{
                    width: 100%;
                    width: 100%;
                    float: left;
                    -webkit-transition: all 0.3s ease-out 0s;
                    -moz-transition: all 0.3s ease-out 0s;
                    -o-transition: all 0.3s ease-out 0s;
                    transition: all 0.3s ease-out 0s;
                    li{
                        width: 25%;
                        float: left;
                        padding: 0 2px;
                        -webkit-transition: all 0.3s ease-out 0s;
                        -moz-transition: all 0.3s ease-out 0s;
                        -o-transition: all 0.3s ease-out 0s;
                        transition: all 0.3s ease-out 0s;
                        animation-name: fadeInRight;
                        line-height: normal;
                        .zbox{
                            width: 100%;
                            float: left;
                            background: black;
                            background: rgba(27,25,37,0.8);
                            padding: 63px 30px 0 30px;
                            text-align: center;
                            -webkit-transition: all 0.3s ease-out 0s;
                            -moz-transition: all 0.3s ease-out 0s;
                            -o-transition: all 0.3s ease-out 0s;
                            transition: all 0.3s ease-out 0s;
                            .ico{
                                width: 100%;
                                height: 45px;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                                img{
                                    height: 100%;
                                    display: inline-block;
                                    vertical-align: top;
                                    -webkit-transition: all 0.3s ease-out 0s;
                                    -moz-transition: all 0.3s ease-out 0s;
                                    -o-transition: all 0.3s ease-out 0s;
                                    transition: all 0.3s ease-out 0s;
                                    transition: all 0.6s linear;
                                    -moz-transition: all 0.6s linear;
                                    -webkit-transition: all 0.6s linear;
                                    -o-transition: width all 0.6s linear;
                                    border: 0;
                                    max-width: 100%;
                                }
                            }
                            h4{
                                width: 100%;
                                margin-top: 8px;
                                font-size: 18px;
                                color: white;
                                line-height: 24px;
                                text-transform: uppercase;
                                font-family: 'OPENSANS-BOLD';
                                letter-spacing: 1px;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                                font-weight: normal;
                            }
                            .p{
                                width: 100%;
                                margin-top: 18px;
                                font-size: 14px;
                                color: white;
                                line-height: 24px;
                                letter-spacing: 1px;
                                opacity: 0.8;
                                word-wrap: break-word;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                            }
                        }
                    }
                }
            }
        }
      }
      .tab{
        width: 100%;
        float: left;
        margin-top: 25px;
        position: relative;
        text-align: center;
        height: 0.64rem;
        .homedown {
          display: inline-block;
          float: none;
          width: 585px;
          z-index: 3;
          position: absolute;
          z-index: 3;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          .zbox {
            width: 50%;
            float: left;
            cursor: pointer;
            .ico {
              width: 100%;
              float: left;
              height: 21px;
              background: url('../../assets/c-bg1.png') no-repeat center center;
              background-size: contain;
            }
            h4 {
              width: 100%;
              float: left;
              margin-top: 10px;
              font-size: 18px;
              color: white;
              line-height: 30px;
              opacity: 0.6;
            }
          }
          .currRegion{  //当前选中地区的样式
            .ico{
              background: url('../../assets/c-bg2.png') no-repeat center center;
              background-size: contain;
            }
            h4{
              opacity: 1;
              font-weight: bold;
            }
          }
        }
      }
      .tab::before{
        content: '';
        width: 100%;
        height: 3px;
        background: #3a3945;
        position: absolute;
        left: 0;
        top: 9px;
        z-index: 2;
      }
      .prev{
        width: 0.34rem;
        height: 0.62rem;
        background: url('../../assets/prev.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        position: absolute;
        top: 48%;
        left: 6.5%;
        opacity: 0.1;
      }
      .next{
        width: 0.34rem;
        height: 0.62rem;
        background: url('../../assets/next.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        position: absolute;
        top: 48%;
        right: 6.5%;
        opacity: 0.1;
      }
    }
  }
}
</style>
<style>
/* .row_1 .hometop{
    position: relative;
}
.row_1 .hometop .el-carousel__container{
    position: relative;
} */
.hometop .el-carousel__arrow{
  display: none !important;
}
.hometop .el-carousel .el-carousel__indicators{
  display: none;
}
/* .hometop .el-carousel .el-carousel__indicators{
  width: 100%;
  float: left;
  margin-top: 32px;
  position: static;
  text-align: center;
}
.hometop .el-carousel .el-carousel__indicators .el-carousel__indicator{
  width: 1.62rem;
  display: block;
}
.hometop .el-carousel .el-carousel__indicators::before{
  content: '';
  width: 100%;
  height: 3px;
  background: #3a3945;
  position: absolute;
  left: 0;
  top: 340px;
  z-index: 2;
} */

.contact .contBox .middlebox .c_1570 .row_1 .hometop ul{
  height: 100%;
}
.contact .contBox .middlebox .c_1570 .row_1 .hometop ul li{
  height: 100%;
}
.contact .contBox .middlebox .c_1570 .row_1 .hometop ul li .zbox{
  height: 100%;
}
.contact .contBox .middlebox .c_1570 .row_1 .hometop ul li .zbox:hover .ico img{
  transform: scale(1.5,1.5) rotate(180deg);
  -ms-transform: scale(1.5,1.5) rotateY(180deg);
  -webkit-transform: scale(1.5,1.5) rotateY(180deg);
  -o-transform: scale(1.5,1.5) rotateY(180deg);
  -moz-transform: scale(1.5,1.5) rotateY(180deg);
}
</style>

