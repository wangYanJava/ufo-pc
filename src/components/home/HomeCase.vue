<template>
    <div ref="box" class="case">
        <!-- 左边菜单项 -->
        <div class="leftBox">
            <div class="contBox">
                <div class="tablebox">
                    <div class="middlebox">
                        <div class="tit_1">案例<span>/case</span><h1 class="hidden-xs">c&nbsp;a&nbsp;s&nbsp;e</h1></div>
                            <div class="slick_res1r">
                                <div v-for="(item,index) in cate" :key="index">
                                    <li class="l1" @click="changeCate(item,index)" :class="{currCate:currCateIndex==index}">
                                        <div class="ico"></div>
                                        <h4>{{item}}</h4>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <!-- 中间灰色部分 -->
        <div class="middleBox hidden-xs">
            <div class="title"><span>{{currCateName}}</span></div>
        </div>
        <!-- 右边展示案例 -->
        <div class="rightShowCase">
            <ul>
                <li class="l1" v-for="(item,index) in currentList.data" :key="index">
                        <div class="tablebox">
                            <div class="middlebox">
                                <h3 class="elli">{{item.name}}</h3>
                                <h5>{{item.address}}</h5>
                                <div class="img">
                                    <img :src="item.keyImg" alt="" title="">
                                </div>
                                <div class="p">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                </li>
            </ul>
             <div class="yd_moreBtn visible-xs">
                 <div class="moreBtn">
                    <a href="javascript:void(0)" @click="allCase">
                        <span>全部案例</span>
                        <img src="http://www.chuangwudao.com/templates/cn/images/index1_6.png" alt="">
                    </a>
                </div>
            </div>
            <!-- 右侧按钮 -->
            <div class="rightBtn hidden-xs">
                <div class="moreBtn">
                    <a href="javascript:void(0)" @click="allCase">
                        <span>全部案例</span>
                        <img src="http://www.chuangwudao.com/templates/cn/images/index1_6.png" alt="">
                    </a>
                </div>
            </div>
            <!-- 移动端查看更多案例按钮 -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeCase',
  data() {
      return{
          height: {
              height: ''
          },
          cate: ['办公空间','酒店空间','餐饮空间','别墅空间','其他空间'],
          currCateIndex: 0,
          officeList: {},
          hotelList: {},
          canyinList: {},
          villaList: {},
          otherList: {},
          currentList: {},
          currCateName: '办公空间'
      }
  },
  created() {
    this.getHeight()
    this.$http.get('../../static/case.json').then(resp => {
        // console.log(resp)
        this.officeList = resp.data.case[0]
        this.villaList = resp.data.case[1]
        this.canyinList = resp.data.case[2]
        this.hotelList = resp.data.case[3]
        this.otherList = resp.data.case[4]
        this.currentList = this.officeList
        // console.log(this.currentList.data)
    })
  },
  mounted(){
    //   console.log(this.$refs)
      this.$refs.box.style.height = this.height;
  },
  methods: {
    getHeight() {
        this.height=window.innerHeight+'px';
        console.log(this.height)
    },
    //   切换分类
    changeCate(item,index) {
        this.currCateIndex = index
        if(item == '办公空间'){
            this.currCateName = '办公空间'
            this.currentList = this.officeList
        }
        if(item == '酒店空间'){
            this.currCateName = '酒店空间'
            this.currentList = this.hotelList
        }
        if(item == '餐饮空间'){
            this.currCateName = '餐饮空间'
            this.currentList = this.canyinList
        }
        if(item == '别墅空间'){
            this.currCateName = '别墅空间'
            this.currentList = this.villaList
        }
        if(item == '其他空间'){
            this.currCateName = '其他空间'
            this.currentList = this.otherList
        }
    },
    // 全部案例按钮
    allCase() {
        this.$router.push({
            path: '/case'
        })
    }
  }
}
</script>

<style lang="scss">
.case{
    width: 100%;
    height: 9.3rem;
    .leftBox{
        width: 28.64%;
        height: 100%;
        background: #fff;
        float: left;
        .contBox{
            width: 54.54%;
            height: 100%;
            float: right;
            .tablebox {
                display: table;
                vertical-align: middle;
                height: 100%;
                position: relative;
                width: 100%;
                table-layout: fixed;
                .middlebox {
                    display: table-cell;
                    vertical-align: middle;
                    // padding-top: 0.5rem;
                    .tit_1 {
                        width: 100%;
                        float: left;
                        position: relative;
                        font-size: 0.36rem;
                        color: #555;
                        font-weight: bold;
                        letter-spacing: 1px;
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
                            letter-spacing: 1px;
                            bottom: 0;
                            line-height: 0.6rem;
                            height: 0.76rem;
                            font-weight: bold;
                        }
                    }
                    .slick_res1r{
                        width: 100%;
                        float: left;
                        position: relative;
                        padding: 0.08rem 0 0.32rem 0;
                        margin-top: 0.17rem;
                        .l1{
                            width: 100%;
                            float: left;
                            margin-top: 0.2rem;
                            padding-left: 0.43rem;
                            position: relative;
                            cursor: pointer;
                            .ico{
                                width: 0.17rem;
                                height: 0.52rem;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background: url('http://www.chuangwudao.com/templates/cn/images/index1.png') no-repeat center 150%;
                            }
                            h4{
                                width: 100%;
                                float: left;
                                font-size: 0.18rem;
                                color: #666;
                                line-height: 0.52rem;
                            }
                        }
                        .l1:hover{
                            .ico{
                                background: url('../../assets/caseCir.png') no-repeat center;
                            }
                            h4{ 
                                color: #299df4;
                                background: #f4f4f6;
                                padding-left: 0.19rem;
                                -webkit-transition: all 0.3s ease-out 0s;
                                -moz-transition: all 0.3s ease-out 0s;
                                -o-transition: all 0.3s ease-out 0s;
                                transition: all 0.3s ease-out 0s;
                            }
                        }
                        .currCate{ //选中时样式
                            .ico{
                                background: url('../../assets/caseCir.png') no-repeat center;
                            }
                            h4{
                                color: #299df4;
                            }
                            h4{ 
                                color: #299df4;
                                background: #f4f4f6;
                                padding-left: 0.19rem;
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
    .middleBox{
        width: 4.68%;
        height: 100%;
        background: #f4f4f6;
        float: left;
        position: relative;
        .title{
            width: 0.62rem;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: #f4f4f6;
            padding: 0.3rem 0.22rem;
            span{
                display: block;
                width: 100%;
                text-align: center;
                float: left;
                padding-top: 0.2rem;
                background: url('../../assets/blue.png') no-repeat center top;
                font-size: 0.12rem;
                color: #888;
                line-height: 1.5;
                position: relative;
            }
            span:before{
                content: '';
                width: 1px;
                height: 10rem;
                border-left: dashed 1px #bcbcbd;
                position: absolute;
                left: 50%;
                top: 120%;
            }
        }
    }
    .rightShowCase{
        width: 66.68%;
        height: 100%;
        float: left;
        ul{
            width: 80.46%;
            float: left;
            height: 100%;
            position: relative;
            border-right: solid 1px #dfdfdf;
            overflow: hidden;
            li{
                width: 33.333%;
                float: left;
                height: 100%;
                position: relative;
                padding: 0 0.1rem;
                border-left: solid 1px #dfdfdf;
                text-align: center;
                .tablebox {
                    display: table;
                    vertical-align: middle;
                    height: 100%;
                    position: relative;
                    width: 100%;
                    table-layout: fixed;
                    .middlebox {
                        display: table-cell;
                        vertical-align: middle;
                        h5{
                            width: 100%;
                            font-size: 0.12rem;
                            color: #888;
                            line-height: 0.3rem;
                            margin-top: 0.1rem;
                        }
                        h3{
                            width: 100%;
                            font-size: 0.24rem;
                            margin: 0;
                            color: #333;
                            line-height: 0.42rem;
                            letter-spacing: 1px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .img{
                            width: 100%;
                            // height: 3.07rem;
                            // width: 2.04rem;
                            height: 1.8rem;
                            margin-top: 0.4rem;
                            overflow: hidden;
                            position: relative;
                            img{
                                width: 88%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                margin: auto;
                                transition: all 0.6s linear 0.3s;
                                -moz-transition: all 0.6s linear 0.3s;
                                -webkit-transition: all 0.6s linear 0.3s;
                                -o-transition: width all 0.6s linear 0.3s;
                            }
                        }
                        .p{
                            width: 100%;
                            margin-top: 0.32rem;
                            font-size: 0.14rem;
                            color: #666;
                            line-height: 0.28rem;
                            height: 1.4rem;
                            overflow: hidden;
                        }
                    }
                }
            }
            li:hover{
                cursor: pointer;
                background: #f1f1f1;
                padding-top: 0.4rem;
                -webkit-transition: all 0.3s ease-out 0s;
                transition: all 0.3s ease-out 0s;
                .tablebox{
                    .middlebox{
                        h3{
                            color: #299df4;
                        }
                        .img{
                            background: #fff;
                        }
                    }
                }
            }
        }
        .rightBtn{
            width: 19.54%;
            height: 100%;
            float: right;
            position: relative;
            .moreBtn{
                position: absolute;
                left: 0;
                top: 50%;
                z-index: 10;
                a{
                    display: block;
                    width: 0.52rem;
                    height: 0.52rem;
                    background: url('../../assets/blueBg.png');
                    background-size: 100% 100%;
                    line-height: 0.52rem;
                    text-align: center;
                    padding: 0;
                    margin: 0;
                    position: relative;
                    img{
                        vertical-align: middle;
                        display: inline-block;
                        margin-top: -0.02rem;
                        position: absolute;
                        top: 35%;
                        right: 38%;
                    }
                    span{
                        display: inline-block;
                        height: 0.52rem;
                        width: 0;
                        float: left;
                        overflow: hidden;
                        font-size: 0.15rem;
                        color: white;
                        vertical-align: middle;
                        margin-top: -0.03rem;
                        padding: 0;
                        margin: 0;
                        -webkit-transition: all 0.3s ease-out 0s;
                        -moz-transition: all 0.3s ease-out 0s;
                        -o-transition: all 0.3s ease-out 0s;
                        transition: all 0.3s ease-out 0s;
                    }
                }
                a:hover{
                    cursor: pointer;
                    width: 1.29rem;
                    -webkit-transition: all 0.3s ease-out 0s;
                    -moz-transition: all 0.3s ease-out 0s;
                    -o-transition: all 0.3s ease-out 0s;
                    transition: all 0.3s ease-out 0s;
                    span{
                        width: 0.78rem;
	                    text-align: center;
                        padding: 0;
                        margin: 0;
                        float: left;
                        padding-left: 0.2rem;
                    }
                    img{
                        top: 35%;
                        right: 15%;
                    }
                }
            }
        }
    }
}
</style>
<style>
@media screen and (max-width:767px){
    .case{
        width: 100%;
        height: 335px !important;
        margin-top: 35px;
    }
    .case .leftBox .contBox{
        width: 100%;
        padding-left: 0.1rem;
    }
    .case .leftBox .contBox .tablebox .middlebox .slick_res1r .l1{
        margin-top: 0.45rem;
        width: 90%;
    }
    .case .leftBox .contBox .tablebox .middlebox .slick_res1r .l1 h4{
        font-size: 0.23rem;
    }
    .case .leftBox .contBox .tablebox .middlebox .slick_res1r .l1 .ico{
        width: 0.35rem;
    }
    .case .rightShowCase{
        width: 71%;
        padding: 10px 0;
        position: relative;
    }
    .case .rightShowCase ul{
        width: 100%;
        height: 87%;
    }
    .case .rightShowCase ul li{
        width: 49%;
        height: 45%;
        margin-bottom: 2%;
        margin-top: 5%;
        border: none;
        padding: 0;
    }
    .case .rightShowCase ul li:hover{
        padding-top: 0;
    }
    .case .rightShowCase ul li:hover .tablebox .middlebox .img{
        background: none;
    }
    .case .rightShowCase ul li .tablebox .middlebox .img {
        margin-top: 3px;
    }
    .case .rightShowCase ul li .tablebox .middlebox h3{
        width: 90%;
    }
    .case .yd_moreBtn{
        width: 100%;
        height: 13%;
        position: absolute;
        bottom: 0;
    }
    .case .yd_moreBtn .moreBtn{
        width: 100%;
        height: 100%;
    }
    .case .yd_moreBtn .moreBtn a{
        display: block;
        width: 1.4rem;
        height: 0.45rem;
        background: url('../../assets/blueBg.png');
        background-size: 100% 100%;
        line-height: 0.45rem;
        text-align: center;
        position: relative;
        float: right;
        margin-right: 5%;
        margin-top: 3%;
    }
    .case .yd_moreBtn .moreBtn a span {
        display: block;
        height: 0.45rem;
        line-height: 0.45rem;
        overflow: hidden;
        font-size: 0.15rem;
        color: white;
        float: left;
        margin-top: -3px;
        width: 75%;
        text-align: center;
        padding: 0;
        margin: 0;
        padding-top: 1.5%;
    }
    .case .yd_moreBtn .moreBtn a img {
        vertical-align: middle;
        display: inline-block;
        margin-top: -0.02rem;
        position: absolute;
        height: 0.3rem;
        top: 20%;
        right: 12%;
    }
}
</style>
