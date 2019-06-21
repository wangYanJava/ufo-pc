<template>
  <div class="banner hidden-xs">
    <el-carousel :height="imgHeight+'px'">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img class="img-responsive" ref="imgHeight" @load="imgLoad" :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return{
      imgHeight: '',
      imgs: []
    }
  },
  created() {
    this.imgs = [
      {
        url: require('../../assets/banner1.png')
      },
      {
        url: require('../../assets/banner2.png')
      },
      {
        url: require('../../assets/banner3.png')
      }
    ]
  },
  mounted() {
    window.addEventListener('resize', () => { //  resize:当调整浏览器窗口的大小时触发事件
      this.imgHeight = this.$refs.imgHeight[0].height
      this.imgLoad()
    })
  },
  methods:{
    imgLoad() {
      this.$nextTick(() => {
        this.imgHeight = this.$refs.imgHeight[0].height
        // console.log(this.$refs.imgHeight[0].height)
      })
    }
  }
}
</script>

<style lang="scss">
.banner{
  width: 100%;
  height: 100%;
  // height: 9.1rem;
  // border: 1px solid red;
  .el-carousel{
    // height: 100%;
  }
  .el-carousel__container{
    // height: 100%;
    // height: 9.1rem !important;
  }
  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }
  // .el-carousel__item:nth-child(2n+1) {
  //   background-color: #d3dce6;
  // }
}
</style>

<style>
 .banner .el-carousel__container{
    /* height: 100%; */
  }
 .banner .el-carousel__container .el-carousel__arrow{
    display: none !important;
  }
 .banner .el-carousel__container .el-carousel__item img{
    width: 100%;
  }
  .banner .el-carousel__indicators{
    position: absolute;
    bottom: 1%;
    z-index: 20;
  }
</style>

