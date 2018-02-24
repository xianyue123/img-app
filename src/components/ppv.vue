<template>
  <f7-page>
      <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>实 景</f7-nav-center>
          <!-- 头部右侧标题 -->
          <f7-nav-right>
            <f7-link open-panel="right" icon-size="24" icon="iconfont icon-daohangliebiao"></f7-link>
          </f7-nav-right>
      </f7-navbar>
       <div style="top: 55px; left: 8px; z-index: 1988;position: absolute;" class="lds-rolling" v-show="loading">
          <div></div>
        </div>
    <div class="ppv-view">
      <div id="ppv_container" class="ppv_container">
        <div id="ppv">
            <div id="history_container"> </div>
        </div>
        <div class="ppv_toolbar">
          <div @click="play()"><span class="f7-icons">{{ isPlay ?  'play_fill': 'pause_fill'}}</span></div>
          <div @click="forwardUp()"><span class="f7-icons">add</span></div>
          <div @click="forwardDown()"><span class="f7-icons">delete</span></div>
        </div>
	    </div>
    </div>
    <f7-toolbar tabbar labels>
        <f7-link @click="go_map" icon="iconfont icon-ditu4" text="地图" tab-link="#home"></f7-link>
        <f7-link @click="go_ppv" icon="iconfont icon-daohang" text="实景" tab-link="#contacts" active url></f7-link>
        <f7-link @click="go_profile" icon="iconfont icon-geren" text="个人" tab-link="#settings"></f7-link>
      </f7-toolbar>
  </f7-page>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
				ppv: null,
        isPlay: true,
        toolId: 0,
        loading: false,
    }
  },
  computed: {
    ...mapState({
    })
  },
  mounted() {
      this.createPPV();
  },
  methods: {
    play(){
				if(this.isPlay){
					console.log('play');
					this.ppv.play();
          this.isPlay = false;
          this.toolId = 31;
				}else{
					console.log('stop');
					this.ppv.stop();
          this.isPlay = true;
          this.toolId = 0;
				}
			},
			forwardUp(){
			  this.ppv.step(1);
			},
			forwardDown(){
			  this.ppv.step(-1);
			},
			createPPV(){
				this.ppv = new PP.PPV('ppv');
				this.ppv.setPref({
            //bgcolor:0x000000,//'rgb(255,255,255)',
            bgcolor:'rgb(83, 89, 93, 0.9)',
            fullView: 4,//照片是否填满div，不管是否会被裁剪
            enableArrow: true,
            enableHistory: true,
				    enableSurfaceDetection:false,     //禁止探面前进
				    enableDeviceOrientation:false,    //启用陀螺仪
            scope:50,//可视范围
            thumb:'Small',//缩略图尺寸，可选'Middle'，缺省'Middle'
            magnifier:{
                size:256,
                zoom:5.0,
                fix:false,//是否启动放大镜后，固定位置不变。另一个方式是，放大镜随鼠标移动
            },
            key:{
                play:32,		//播放	space
                fforward:33,	//快进	page up
                fbackward:34,	//快退	page down
                forward:38,		//前进	up
                backward:40,	//后退	down
                fullscreen:120,	//全屏	f9
            },
            arrows:{ //方向箭头位置
                forward:5,//向前
                below:1.8,//降低
                lean:18,//前倾
            }
				});
			
        let _self = this;
        this.ppv.onTool = function(e){
            _self.toolId = e.tool;
        }

        this.ppv.onLoadFrame = (e) => {
            console.log(e);
        }

        this.ppv.onBusy = (e) => {
            if(_self.toolId == 31) return;
            _self.loading = true;
        }

        this.ppv.onIdle = (e) => {
            if(_self.toolId == 31) return;
            _self.loading = false;
        }
        this.ppv.setServer("http://47.94.22.143:8088/PPVServer.asmx");
        this.ppv.locate(3, 116.660394, 39.741341, '6MaPPMsBGdgxUqCVULFACSyXlnFENs7GaQSnJfin');
      },
      go_map(){
          f7.mainView.router.load({
              url: '/map/',
              force: true,
              reload: true,
              ignoreCache: true,
          });
      },
      go_ppv(){
        f7.mainView.router.load({
            url: '/ppv/',
            force: true,
            reload: true,
            ignoreCache: true,
        });
      },
      go_profile(){
       f7.mainView.router.load({
            url: '/settings/',
            force: true,
            reload: true,
            ignoreCache: true,
        });
      }
  }
}
</script>


<style lang="less">
.ppv-view{
  .ppv-block{
    margin: 20px 0;
    .list-group-title{
      line-height: 25px;
      height: 25px;
      background: #f7f7f7;
      color: #8e8e93;
      font-weight: normal !important;
      font-size: 14px;
    }
    .item-media{
      > img {
        width: 35px;
        height: 35px;
      }
    }
  }
} 
</style>
<style scoped>
  .ppv-view{
    overflow: hidden;
  }
	.ppv_toolbar{
		position:absolute;/*在ppv内部定位*/
		/* background-color: rgba(53, 52, 52, 0.6); */
		border-radius: 4px;
		padding:4px;
		margin-top:5px;
		float: right; 
		right: 10px;
		bottom: 4rem;
		z-index: 1000;
	}
	.ppv_toolbar div{
		background: #fff;
		border-radius: 50%;
		width: 22px;
		height: 22px;
		margin-top: 10px;
		padding: 8px;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
		text-align: center;
		cursor: pointer;
		color: rgb(70, 70, 70);
	}

	.ppv_toolbar div span{
		line-height: 22px;
		font-size: 20px;
	}

	.ppv_toolbar ul{
		background-color: #fff;
		width: 50px;
	}
	.ppv_toolbar ul li {
		color: #fff;
		list-style: none;
		float: right; 
		margin-right: 10px;
		/* background: rgb(37, 37, 37);     */
		padding: 2px 10px 2px 0px;
		/* border-right: 1px dashed #eaeaea; */
		cursor: pointer;
	}

    .container {
      margin: 5px;
    }

    .map_container {
      margin-left: 100%;
      height: 100%;
      /*margin: 2px;*/
      /* border: 1px solid #888888; */
    }

    .ppv_container {
      width: 100%;
      height: 100%;
      margin: auto;
      height: 100%;
      margin: auto;
      /*水平居中*/
      float: left;
      /*margin: 2px;*/
      /* border: 1px solid #888888; */
    }

    #ppv {
      position: relative;
      /*作为内部子元素的定位基准*/
      width: 100%;
      height: 100%;
      /*background-image: url(scripts/distribute/icon/error-imaj.jpg);*/
      background-color: #414141;
      /* 子水平居中 flex layout*/
      display: -webkit-flex;
      /* Safari */
      display: flex;
      justify-content: center;
    }

    .ppv_toolbar > span {
      margin: 8px;
    }

    .ppv_button {
      height: 32px;
      background-color: transparent;
    }

    .ppv_button:hover {
      background-color: lightgray;
    }

    #history_container {
      position: absolute;
      /*在ppv内部定位*/
      width: 100%;
      height: 100%;
      /* 子垂直居中 flex layout*/
      display: -webkit-flex;
      /* Safari */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #history {}

    .history_item {
      height: 128px;
      margin: 10px;
    }

    .history_item:hover {
      border: 1px solid #00F;
    }

    #lrs {}

    .lrs_item {
      margin: 5px;
    }
</style>


<style type="text/css" scoped>
    @keyframes lds-rolling {
      0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @-webkit-keyframes lds-rolling {
      0% {
        -webkit-transform: translate(-50%, -50%) rotate(0deg);
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        -webkit-transform: translate(-50%, -50%) rotate(360deg);
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    .lds-rolling {
      position: relative;
    }

    .lds-rolling div,
    .lds-rolling div:after {
      position: absolute;
      width: 96px;
      height: 96px;
      border: 16px solid #646676;
      border-top-color: transparent;
      border-radius: 50%;
    }

    .lds-rolling div {
      -webkit-animation: lds-rolling 1s linear infinite;
      animation: lds-rolling 1s linear infinite;
      top: 100px;
      left: 100px;
    }

    .lds-rolling div:after {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .lds-rolling {
      width: 30px !important;
      height: 30px !important;
      -webkit-transform: translate(-15px, -15px) scale(0.15) translate(15px, 15px);
      transform: translate(-15px, -15px) scale(0.15) translate(15px, 15px);
    }
  </style>