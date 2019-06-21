<template>
  <div class="news">
    <!-- logo -->
    <div class="pz_top hidden-xs">
      <div class="top">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
      </div>
    </div>
    <div class="btnBox">
      <!-- 导航切换按钮 -->
      <div class="navBtn" @mouseover="showNav">
          <img src="../assets/navBtn.png" alt="">
        </div>
    </div>
    <!-- 顶部图片 -->
    <div class="topBanner">
      <img src="../assets/newsBg.png" alt="">
    </div>
    <!-- 标题 -->
    <div class="pageTitle">
      <p class="chinTitle">新闻</p>
      <p class="engTitle">NEWS</p>
    </div>
    <!-- 分类按钮 -->
    <div class="cateBtn">
      <ul>
        <li 
          v-for="(item,index) in newsCate" 
          :key="index"
          @click="changeNewsCate(item,index)"
          :class="{activeNav:activeNavIndex==index}"
          >{{item}}</li>
      </ul>
    </div>
    <!-- 新闻列表 -->
    <div class="newsList">
      <ul>
        <li v-for="(item,index) in currList" :key="index">
          <div class="leftPic">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="rightTitle">
            <p class="p1">
              {{item.title}}
            </p>
            <p class="p2">
              {{item.detail[0][0].duanluo[0].p}}
            </p>
            <p class="p3">
              {{item.month}} / 
              <span>
              {{item.year}}
              </span>
            </p>
          </div>
          <div class="moreBtn" @click="toDetail(item,index)">
            MORE&nbsp;&nbsp;>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :page-size="4"
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
  name: 'News',
  components: {
    PageBottom
  },
  data() {
		return{
      isShowNav: false,
      newsCate: ['全部','公司新闻','行业动态'],
      activeNavIndex: 0,
      detail: '',
      current: 1,
      pageSize: 4,
      total: null,
      allList: [],
      companyNewsList:[],
      hangYeNewsList:[],
      newsList: [],
      currList: [], //分页后数组用于渲染
		}
  },
  created() {
    this.allList = [
      {
        imgUrl: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/1.jpg',
        title: '智能办公将给我们办公室带来什么？',
        detail: [
          [
            { 
              duanluo: [
                {
                  p: '导读：随着5G商用牌照的发放，5G距离我们越来越近了，这也就意味着物联网技术会越来越成熟。应用场景也会不断的拓宽。那么当物联网+5G 技术应用于办公空间后，传统办公模式会迎来怎样的改变呢？',
                },
                {
                  p: '如今物联网俨然已经成为了科技圈的新宠，从工业机械制造到家居设备连通，物联网已经在潜移默化中改变着人们生产生活的方方面面。，办公空间也在这波科技浪潮的搭载下给众多办公族带来了全新的办公体验和福利，那纠结有哪些呢？',
                },
                {
                  p: '首先我们要先了解一个概念——智能办公。智能办公就是利用先进的技术和设备提高办公效率和办公质量，改善办公条件，减轻劳动强度，实现管理和决策的科学化。即在办公室工作中，借助先进的办公设备取代人工进行办公业务处理、管理各类的信息，辅助领导决策。办公自动化的目的是尽可能充分地利用信息资源，最大限度地提高办公效率、办公质量，从而产生更高价值信息，提高管理和决策的科学化水平，实现办公业务科学化、自动化.',
                },
                {
                  p: '了解了这个概念，你会发现类似可穿戴设备、虚拟现实、AI智能等技术早已经悄然进入到我们的生活中，正在改变我们的生活。就连工厂、家具设备之间的连通都变得更为及时便利和安全可控，那么当可穿戴设备、虚拟现实，AI智能等这些物联网技术与办公空间完美联姻以后，办公室会发生怎样的改变呢，这就是我们今天要说的智能办公 .',
                },
                {
                  p: '当前智能办公场景主要是会议室、休息室和办公室。通过传感器、摄像头等监控传感设备与互联网实现连通，企业管理人员就可以管理、控制办公室的多种设备，从而为员工工作提供较为舒适的环境，可以说管理人员在办公桌前就能掌控全局，而且不需要像之前那么劳神费力了。如窗帘、投影仪、空调等设备接入智能管理系统中，在日常工作期间，员工可以根据实际需要，打开或者关闭相应的设备，以此来控制自己周围环境，如温度，湿度，光线明暗等等，这样做不仅可以让人感觉到舒适和快捷，而且还有益于资源节约、降低能耗，为企业节约运营成本',
                },
                {
                  p: '在不久的将来，更为方便的设备会逐步加入进来，如网络环境的自动分配，智能打印机，AR会议室等，甚至可能智能办公环境会逐步搬到家庭，工地，甚至大街上，只要有智能穿戴和传感器在，就如同置身在实体会议室中，与大家一起讨论方案和计划，让智能办公无处不在。',
                }
              ],
              image: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/1.jpg'
            }
          ],
          [
            {
              duanluo: [
                {
                  p: '与此同时，基于物联网+5G技术，安防设备也可以将办公场所的安全和报警系统连接起来，一旦办公室某些区域的烟雾浓度过高或者发生漏水等情况，企业管理人员就可以及时采取应对措施，维持办公室正常运转以及避免不必要的损失。比如：空调温度根据实际情况自动调节或者外人强行入侵时自动报警。',
                }
              ],
              image: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/3.jpg'
            }
          ],
          [
            {
              duanluo: [
                {
                  p: '相信假以时日，在物联网和5G的推动下，智能化、自动化的办公模式将加速形成，办公族们也将进一步感受到科技给商业办公所带来的便利。',
                  p: '在实际工作中，繁琐的工作事务已经使很多上班族感到身心疲惫，如果有一个较为舒适的工作环境当然是再好不过了。试想一下，如果办公系统侦测到您正坐在办公桌写文案，自动调整桌面高度、灯光亮度、空气湿度，当你伏案两小时都没有起来走动时，自动提醒你起来活动下，是不是会感觉分外的贴心和舒适？未来，这些都可以您的办公室里实现，快来找蔚蓝公装吧，我们可以为您打造一个舒适的智能办公环境.'
                }
              ],
              image: ''
            }
          ]
        ],
        month: '02-17',
        year: '2019'
      }, //第一篇文章

      {
        imgUrl: require('../assets/news3-2.jpg'), //tu
        title: '为何选中互联网公装？',
        detail: [
          [
            {
              duanluo: [
                {
                  p: '随着互联网的普及和急速扩张，它不仅为我们的生活带来了巨大的改变，而且也提供了更多的选择。人们在日常生活中如果遇到了问题，开始更多的是借助网络的力量来解决。比如滴滴改变了大家的出行方式，微信改变了大家的沟通方式，支付宝改变了大家的支付方式。。。。。。这些互联网的产物正在深刻的改变和影响着我们的生活，同样的互联网也在改变着公装的市场，那你知道互联网公装给大家带来了那些方面的改变吗，为什么越来越多的企业和业主开始接受和选择互联网公装，甚至摒弃了一直信赖传统公装？现在就来看看二者的区别吧.',
                }
              ],
              image: require('../assets/news3-2.jpg') //tu
            }
          ],
          [
            {
              duanluo: [
                {
                  p: '传统的公装项目的成交往往都是靠熟人或者各种关系来完成的，这就造成装修的业主和从业人员信息严重的不对称，也就显露出传统公装的一大弊端，那就是杀熟，越是熟人介绍越是容易被坑，而且被坑了的委屈还只能憋在心里。那杀熟的具体表现就是：',
                },
                {
                  p: '⦁	工期无限制被拖长：传统的公装因为是熟人介绍，往往没有严格的合同，而且整个公装的生态链带有很多不确定性，如材料的经销商，建材的品牌商，施工的人员等，都是分别于业主对接的，协作性差，某个环节出现了拖沓现象，整个工期就要延迟一大段时间。那些等着开业或者运营的业主们有苦也说不出，追责又难，很是麻烦的一件事情。',
                },
                {
                  p: '⦁	设计和施工都是外包，协调沟通不顺畅：在实际施工中，需要双方无缝配合协作才能做出期待的效果。可是因为都是外包人员，早已习惯各自为政，只对业主负责，难为在施工中出现那样那样的问题，劳神又费力',
                },
                {
                  p: '⦁	客户需要亲自上线，全程参与装修过程，很是费神：大的项目还好，可以通过招标的方式找到合适公装公司然后请专门的监理公司来帮助监工，但是对于中小企业就比较麻烦了，设计需要自己找，施工单位需要自己找，材料需要自己跑建材市场买，施工情况需要自己跑工地看，什么事情都是亲力亲为，费时费力。',
                },
                {
                  p: '⦁	价格不透明，材料以次充好：装修行业一直存在着回扣、返点等行业潜规则。业主对装修的报价，施工项目等完全摸不到头脑，具体价格也没什么概念，所以很容易被坑。建材也同样如此，业主因为对装修材料所知不多，施工中很容易被装修公司或者施工队偷工减料、以次充好，等到入驻后才发现各种问题，后悔都来不及.',
                },
                {
                  p: '⦁	恶意增项：传统公装大部分都是熟人介绍，业主和装修公司其实并不熟识。开始的时候报价比较低，在实际施工就被恶意增项，尤其是水电改造方面，公装公司不全包，改造的时候尺寸稍有超过就要加钱，不加工程就得停滞，让业主很是无奈。'
                }
              ],
              image: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/4.jpg'
            }
          ],
          [
            {
              duanluo: [
                {
                p: '那么互联网公装会给业主带来哪种改变呢？互联网公装可不是简单的帮也业主介绍几家装修公司，推荐几家材料商家就行了，互联网公装是真正运用互联网的思维，解决行业内一直以来的痛点：',
                },
                {
                p: '⦁	去中间化，去差价：不管是设计团队，施工团队，还是材料购买，全流程透明，业主在平台内直接选购，不必担心因为熟人介绍人际关系问题，也不必担心被那些省级、市级代理赚了差价，真正实现去中间化，让装修变得更简单.',
                },
                {
                p: '⦁	一站式服务：设计，施工，材料，监理，售后全部一站式解决，每个部分都能够密切配合，做到无缝衔接，让施工过程更加流程，施工质量更加放心，同时也可以节约设计沟通挑选成本，再也不必操心费力了。',
                },
                {
                p: '⦁	价格透明，拒绝增项：每一个项目的内容和报价全透明，内容全部写进合同，并且都配有独立的项目经理和智能AI监理，施工内容全透明，不增项，让业主对施工做到了如指掌又不会疲累.',
                },
                {
                p: '⦁	设计施工过程透明，AI智能来帮忙：随着AI技术的发展，AI技术逐渐应用到了施工领域。AI和大数据技术首先让设计变的更加简单和快速，在设计初期很快就可以给业主出图，大大解决了业主的时间。同时AI智能摄像等科技技术在施工领域的应用，让业主随时随地可以查看施工现场，随时知道现场有哪些人在施工，做到过程全透明。',
                },
                {
                p: '⦁	设计施工过程透明，AI智能来帮忙：随着AI技术的发展，AI技术逐渐应用到了施工领域。AI和大数据技术首先让设计变的更加简单和快速，在设计初期很快就可以给业主出图，大大解决了业主的时间。同时AI智能摄像等科技技术在施工领域的应用，让业主随时随地可以查看施工现场，随时知道现场有哪些人在施工，做到过程全透明。',
                }
              ],
              image: require('../assets/news2-3.jpg')//tu
            }
          ],
          [
            {
              duanluo: [
                {
                  p: '互联网公装就是这样一种颠覆传统公装思维的装修模式。它不仅可以为业主提供的全新的服务体验，而且大力提倡健康，绿色、智能和人性化的理念。正是通过这种方式让越来越多的业主选择互联网公装，那么您呢，还在犹豫什么，快来咨询我们吧。',
                }
              ],
              image: ''//tu
            }
          ]

        ],
        month: '04-15',
        year: '2019'
      },  //第二篇文章

      {
        imgUrl: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/6.jpg', 
        title: '当AI智能与公装联姻',
        detail: [
          [
            {
              duanluo: [
                {
                  p: '',
                }
              ],
              image: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/6.jpg' //tu
            }
          ],
          [
            {
              duanluo: [
                {
                  p: 'AI智能即人工智能，AI是英文Artificial Intelligence 的缩写，它是研究、开发用于模拟、延伸和扩展人的智能理论、方法、技术及应用系统的一门新兴的技术科学。人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。人工智能从诞生以来，理论和技术已经日益成熟，应用领域也不断扩大，比如说机器视觉，人脸识别，语言和图像理解等等，那么当这样的一门科学与公装联姻后，会给公装行业带来哪些改变呢？',
                },
                {
                  p: '首先是设计。在本来的设计过程中，设计师只是靠画草图或者机器做出二维图形出来，进一步在此基础上进行想象和设计。后来有了建筑信息模型，也就是BIM，这个模型是对台的，作用不仅仅是表现，展示，演示，而是可以通过模型模拟出建筑的实际情况。物理信息，几何信息，功能信息、性能信息，等可以在这个模型中展示出来，也就是说通过这个模型可以看到真实建筑的样貌。那么当这个建筑的模型与AI智能碰撞到一起会产生什么化学反应呢？AI智能可以把这样的建筑模型进一步的拆分细化，考虑到实际数据和显示应用，在对应的单元块数据库中查询到最适合此区域的设计，为客户设计出最合理的方案，又大大节约了设计师和客户的时间。比如30平米的办公区域，想要装修成一个带投影，带视频电视，又能即兴演示的中式风格会议室，那么AI智能技术就会按照客户的需求，在模块数据库中匹配出对应的装修方案，设计师只要稍微改动，添加个性化设计就能呈现给客户，这样就大大缩短了客户的整体装修周期。',
                },
                {
                  p: '第二现场的施工管理。不管是公装还是家装，施工现场的管理都是一个让业主头疼的事情。花钱请的监理人或者业主本身都不可能24小时守在施工现场，并且业主自身往往对施工技术也不是很了解，到底工人做的好不好或者规不规范都不清楚，这样本来是一件很开心的装修事情却变的担心起来。而AI智能技术搭配声音，图像等的识别系统，可以很好的对现场进行管控，也避免了一些不必要的风险发生。如施工现场工人吸烟，未佩戴安全帽等，通过AI智能摄像头就可以识别出来并主动提醒工人，相当于给施工现场添加了一双24小时不会休息的“眼睛”，主动辨识潜在风险，有助于提供施工的安全，业主也可以随时随地通过AI智能摄像头观察施工情况，做到心中有数.',
                },
                {
                  p: '第三施工风险的管控。公装业主除了关心施工质量以外就是关心施工的周期及材料应用情况了。传统的公装经常遇到各部门因沟通不顺畅造成延期，比如设计出图慢了，水电施工延期了等等，业主却在延期了以后才知道按照工期完成不了了。材料呢是传统公装行业里潜规则最多的部分，材料商各种原因延迟送货，现场工人偷工减料，甚至偷拿回扣等等，让整个施工过程充满不确定性。当AI技术加入以后，会主动收集现场施工情况并分析施工的进度和风险，提前为业主提供风险警报，避免不必要的损失。而AI可以让材料全流程透明跟踪，无论是价格还是使用情况，AI技术可以全景呈现在业主面前，不必担心中间出现偷梁换柱的情况。'
                }
              ],
              image: 'https://baogongxia1.oss-cn-shenzhen.aliyuncs.com/%E6%A1%88%E4%BE%8B/img/7.gif'
            }
          ],
          [
            {
              duanluo: [
                {
                  p: '目前这些还仅仅是AI智能技术在公装建筑行业的一小部分应用，相信在不久的未来会有更多方面的开发，给人们带来更多的惊喜。它不仅方便了从业人员，也提升了业主的幸福感，让装修不再是一件痛苦的事情，让我们共同期待吧。'
                }
              ],
              image: ''
            }
          ],
        ],
        month: '06-10',
        year: '2019'
      }  //第三篇文章
    ]

    this.newsList = this.allList
    this.hangYeNewsList = this.allList
    // 第一次进入是当前页数据列表
      this.currList = this.newsList.slice(0, 4)
      this.total = this.newsList.length
  },
  methods: {
    // 查看详情
    toDetail(item,index) {
      this.$router.push({
        path: '/newsDetail',
        name: 'NewsDetail',
        params: {
          data: item
        }
      })
      sessionStorage.setItem("news", JSON.stringify(item));
    },
    // 点击页码
    pageChange(pageNumber){
      this.current = pageNumber;  // 当前页改变
      // 当前页起始下标及结束下标
      const start = (this.current - 1) * this.pageSize;
      const end = start + this.pageSize;
      // 当前页数据列表
      this.currList = this.newsList.slice(start, end)
      window.scroll(0,515)
    },
    // 切换新闻分类
    changeNewsCate(item,index) {
      this.activeNavIndex = index
      // 再切换新闻数组
      if(item == '全部'){
        this.newsList = this.allList
      }
      if(item == '公司新闻'){
        console.log(this.companyNewsList)
        this.newsList = this.companyNewsList
      }
      if(item == '行业动态'){
        this.newsList = this.hangYeNewsList
      }
      this.currList = this.newsList.slice(0, 4)
      this.total = this.newsList.length
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
.news{
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
  }
  .topBanner{
    width: 100%;
    height: auto;
    margin-bottom: 1.02rem;
    img{
      width: 100%;
      height: auto;
    }
  }
  .cateBtn{
    width: 100%;
    height: 1.02rem;
    ul{
      text-align: center;
      height: 100%;
      margin: 0 auto;
      li{
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        line-height: 1.02rem;
        height: 1.02rem;
        font-size: 0.16rem;
        padding: 0 0.5rem;
        color: #c1c1c1;
        cursor: pointer;
        background: url('../assets/cateBg.png') no-repeat right center;
      }
      .activeNav{
        color: #2a1e32;
      }
      // li:hover{  //选中项样式
      //   color: #2a1e32;
      // }
      li:nth-last-child(1){
        background: none;
      }
    }
  }
  .newsList{
    width: 88.90%;
    height: auto;
    margin: 0 auto;
    margin-top: 0.7rem;
    ul{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 2.7rem;
        border-bottom: 2px solid #eee;
        margin-bottom: 0.4rem;
        position: relative;
        .leftPic{
          width: 29.87%;
          height: 100%;
          float: left;
          img{
            width: 4.6rem;
            height: 1.75rem;
          }
        }
        .rightTitle{
          width: 70%;
          height: 100%;
          float: left;
          .p1{
            width: 52%;
            height: 0.58rem;
            font-size: .24rem;
            color: #757670;
            // line-height: 0.58rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .p2{
            font-size: 0.18rem;
            width: 64.27%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            line-height: 0.42rem;
            color: #716e75;
          }
          .p3{
            line-height: 1.18rem;
            font-size: 0.2rem;
            color: #cac8cb;
            margin-top: 0.55rem;
            span{
              font-size: 0.14rem;
            }
          }
        }
        .moreBtn{
          width: 2.15rem;
          height: 0.6rem;
          cursor: pointer;
          line-height: 0.6rem;
          text-align: center;
          font-size: 0.18rem;
          color: #b0afb4;
          position: absolute;
          top: 0.76rem;
          right: 0;
          border-left: 1px solid #b0afb4;
        }
        .moreBtn:hover{
          color: #120000;
        }
      }
      li:last-child{
        border: none;
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
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3f3f3f;
  color: #FFF;
}
@media screen and (max-width: 1360px){
  .news .newsList ul li{
    height: 2.2rem !important;
}
  .news .newsList ul li .rightTitle{
    width: 65% !important;
    height: 100%;
    float: right !important;
  }
  .news .newsList ul li .leftPic img{
    height: auto;
  }
  .news .newsList ul li .rightTitle .p3[data-v-6aa13012] {
    line-height: 0.2rem !important;
    margin-top: 0.6rem !important;
  }
}
</style>
