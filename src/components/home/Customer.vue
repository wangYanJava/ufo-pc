<template>
  <div ref="box" class="customer">
    <div class="contentWrap">
      <div class="middlebox">
        <div class="tit_1">客户<span>/customer</span>
            <h1 class="hidden-xs">C&nbsp;u&nbsp;s&nbsp;t&nbsp;o&nbsp;m&nbsp;e&nbsp;r</h1>
            <div class="more"><a href="javascript:void(0)" title="" @click="toMore">查看更多+</a></div>
        </div>
        <div class="dl">
            <div class="dd d0">

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo15.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo14.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo13.jpg"></div>
                    </a>
                </li>
                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo12.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo11.jpg" alt="小型雕刻机"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo10.jpg" alt="北方天宇"></div>
                    </a>
                </li>

            </div>
            
            <div class="dd d1">
                <div class="number counters">
                    <div class="number_t">

                        <li class="l2">
                            <h3><b data-start="500" class="count1">50</b>+</h3>
                            <h5>专业设计师</h5>
                        </li>

                        <li class="l2">
                            <h3><b data-start="1000" class="count2">200</b>+</h3>
                            <h5>施工团队</h5>
                        </li>

                    </div>
                    <div class="number_b">

                        <li class="l2 first">
                            <h3><b data-start="1" class="count">1</b>站式</h3>
                            <h5>全链条服务</h5>
                        </li>

                        <li class="l2">
                            <h3><b data-start="20" class="count">20</b>天</h3>
                            <h5>提供完善的设计方案</h5>
                        </li>

                        <li class="l2">
                            <h3><b data-start="30" class="count">730</b>天</h3>
                            <h5>售后品质保证</h5>
                        </li>

                    </div>
                </div>

                <li class="l1 hidden-xs">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo1.jpg"></div>
                    </a>
                </li>

                <li class="l1 hidden-xs">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo2.jpg"></div>
                    </a>
                </li>

                <li class="l1 hidden-xs">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo3.jpg"></div>
                    </a>
                </li>

            </div>
            <div class="dd d0 hidden-xs">

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo4.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo5.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo6.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo7.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo8.jpg"></div>
                    </a>
                </li>

                <li class="l1">
                    <a href="javascript: void(0)">
                      <div class="logo"><img src="../../assets/logo9.jpg"></div>
                    </a>
                </li>

            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Custormer',
  data() {
    return {
      height: {
        height: ''
      },
    }
  },
  created() {
    this.getHeight()
  },
  mounted() {
    this.$refs.box.style.height = this.height;
  },
  methods: {
    getHeight() {
        this.height=window.innerHeight+'px';
    },
    toMore() {
      this.$router.push({
        path: '/curpartner'
      })
    }
  }
}
</script>

<style lang="scss">
.customer{
  width: 100%;
  height: 8.98rem;
  background: url('../../assets/c-bg.png') no-repeat center bottom;
  background-size: 100% auto;
  .contentWrap{
    width: 74.47%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: table;
    vertical-align: middle;
    .middlebox{
      display: table-cell;
      vertical-align: middle;
      .tit_1 {
        width: 100%;
        float: left;
        position: relative;
        font-size: 0.36rem;
        color: #555;
        font-weight: bold;
        letter-spacing: 0.01rem;
        line-height: 0.5rem;
        span{
          font-size: 0.24rem;
          color: #888;
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
          color: #333;
          opacity: 0.05;
          text-transform: uppercase;
          font-family: 'OPENSANS-BOLD';
          letter-spacing: 0.01rem;
          bottom: 0;
          line-height: 0.6rem;
          height: 0.76rem;
        }
        .more{
          float: right;
          height: 0.26rem;
          margin-top: 0.24rem;
          a{
            float: left;
            display: block;
            padding-left: 0.13rem;
            background: url('../../assets/s-moreBg.png') no-repeat left center;
            line-height: 0.26rem;
            font-size: 0.14rem;
            color: #888;
            font-weight: normal;
          }
          a:hover{
            color: #299df4;
          }
        }
      }
      .dl{
        width: 100%;
        float: left;
        margin-top: 0.33rem;
        border-left: solid 1px #e2e2e2;
        border-top: solid 1px #e2e2e2;
        .d0{
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }
        .dd{
          width: 28.66%;
          float: left;
          .l1{
            width: 50%;
            float: left;
            border-right: solid 0.01rem #e2e2e2;
            padding: 0.01rem;
            border-bottom: solid 0.01rem #e2e2e2;
            position: relative;
            overflow: hidden;
            background: white;
            a{
              display: block;
              width: 100%;
              height: 1.69rem;
              overflow: hidden;
              position: relative;
              float: left;
              .logo{
                float: left;
                margin-top: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 2;
                img{
                  float: left;
                  width: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                }
              }
            }
          }
          .l1:before{
            content: '';
            display: block;
            background: url('http://www.chuangwudao.com/templates/cn/images/index3_15.png') no-repeat center center;
            width: 0.24rem;
            height: 0.24rem;
            position: absolute;
            right: -0.24rem;
            top: -0.24rem;
            z-index: 3;
          }
          .l1:hover{
            right: 0;
            top: 0;
            a{
              // transform: rotateY(180deg);
              // -webkit-transition: all 0.8s ease-out 0s;
              // -moz-transition: all 0.8s ease-out 0s;
              // -o-transition: all 0.8s ease-out 0s;
              // transition: all 0.8s ease-out 0s;
              .logo{
                transform: scale(1.2);
                -ms-transform: scale(1.2);
                -webkit-transform: scale(1.2);
                -o-transform: scale(1.2);
                -moz-transform: scale(1.2);
              }
            }
          }
        }
        .dd.d1{
          width: 42.68%;
          .l1{
            width: 33.333%;
          }
          .number{
            width: 100%;
            float: left;
            height: 3.44rem;
            text-align: center;
            padding: 0 8.89% 0 8.89%;
            border-right: solid 0.01rem #e2e2e2;
            border-bottom: solid 0.01rem #e2e2e2;
            background: url('http://www.chuangwudao.com/upload/images/20180928/index3_13693292.jpg') no-repeat center center;
            background-size: cover;
            .number_t{
              width: 100%;
	            float: left;
              .l2{
                width: 50%;
	              float: left;
                h3{
                  width: 100%;
                  float: left;
                  font-size: 0.3rem;
                  color: #019ee5;
                  line-height: 0.86rem;
                  font-family: 'OPENSANS-BOLD';
                  b{
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.9rem;
                    font-family: Arial;
                    font-weight: bold;
                    margin-right: 0.05rem;
                  }
                }
                h5{
                  width: 100%;
                  float: left;
                  margin-top: 0.06rem;
                  font-size: 0.16rem;
                  color: #fff;
                  line-height: 0.24rem;
                  opacity: 0.8;
                }
              }
            }
            .number_b{
              width: 100%;
              float: left;
              margin-top: 0.2rem;
              padding-top: 0.2rem;
              border-top: solid 0.01rem white;
              border-top: solid 0.01rem rgba(255, 255, 255, 0.1);
              .l2{
                width: 33.333%;
                float: left;
                background: url('http://www.chuangwudao.com/templates/cn/images/index3_16.png') no-repeat left 0.12rem;
                padding: 0 0.05rem;
                h3{
                  width: 100%;
                  float: left;
                  font-size: 0.18rem;
                  color: #019ee5;
                  line-height: 0.64rem;
                  b{
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.6rem;
                    font-family: Arial;
                    font-weight: bold;
                    margin-right: 0.05rem;
                  }
                }
                h5{
                  width: 100%;
                  float: left;
                  margin-top: 0.05rem;
                  font-size: 0.16rem;
                  color: #fff;
                  line-height: 0.24rem;
                  opacity: 0.8;
                }
              }
              .l2.first{
                background: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
@media screen and (max-width: 1360px){
  .customer .contentWrap .middlebox .dl .dd.d1 .number{
    width: 100%;
    float: left;
    height: 3.44rem;
    text-align: center;
    padding: 0 !important;
  }
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_t .l2 h3{
    width: 100%;
    float: left;
    font-size: 0.2rem !important;
    color: #019ee5;
    line-height: 0.86rem;
    font-family: 'OPENSANS-BOLD';
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_t .l2 h3 b{
    display: inline-block;
    vertical-align: middle;
    font-size: 0.58rem !important;
    font-family: Arial;
    font-weight: bold;
    margin-right: 0.05rem;
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_t .l2 h5{
    width: 100%;
    float: left;
    margin-top: 0.06rem;
    font-size: 0.14rem !important;
    color: #fff;
    line-height: 0.24rem;
    opacity: 0.8;
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_b{
    width: 100%;
    float: left;
    margin-top: 0.2rem;
    padding-top: 0.2rem;
    border-top: solid 0.01rem white;
    border-top: solid 0.01rem rgba(255, 255, 255, 0.1);
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_b .l2 h3{
    width: 100%;
    float: left;
    font-size: 0.14rem !important;
    color: #019ee5;
    line-height: 0.64rem;
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_b .l2 h3 b{
    display: inline-block;
    vertical-align: middle;
    font-size: 0.45rem !important;
    font-family: Arial;
    font-weight: bold;
    margin-right: 0.05rem;
}
.customer .contentWrap .middlebox .dl .dd.d1 .number .number_b .l2 h5{
    width: 100%;
    float: left;
    margin-top: 0.05rem;
    font-size: 0.14rem !important;
    color: #fff;
    line-height: 0.24rem;
    opacity: 0.8;
}
@media screen and (max-width: 767px){
  .customer{
    height: 495px !important;
    padding-top: 10%;
  }
  .customer .contentWrap{
    width: 90%;
  }
  .customer .contentWrap .middlebox .tit_1 .more a{
    background-size: auto 100%;
  }
  .customer .contentWrap .middlebox{
    display: block;
  }
  .customer .contentWrap .middlebox .dl .dd{
    width: 100%;
    float: none;
  }
  .customer .contentWrap .middlebox .dl .dd .l1{
    width: 33%;
  }
  .customer .contentWrap .middlebox .dl .dd.d1{
    width: 100%;
  }
  .customer .contentWrap .middlebox .dl .dd.d1 .number .number_t .l2 h3{
    margin: 0;
  }
  .customer .contentWrap .middlebox .dl .dd.d1 .number .number_b{
    padding-top: 0;
  }
  .customer .contentWrap .middlebox .dl .dd.d1 .number .number_b .l2 h3 b{
    /* font-size: 0.35rem !important; */
  }
  .customer .contentWrap .middlebox .dl .dd.d1 .number .number_b .l2 h3{
    font-size: 0.2rem !important;
  }
}
</style>