<template>
    <f7-page toolbar-fixed navbar-fixed>
      <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>地 图</f7-nav-center>
          <!-- 头部右侧标题 -->
          <f7-nav-right>
            <f7-link open-panel="right" icon-size="24" icon="iconfont icon-daohangliebiao"></f7-link>
          </f7-nav-right>
      </f7-navbar>
      <div class="home-view">
        <el-amap
          vid="amap"  
          :center="center"
          :zoom="zoom"
          :events="events"
          :rotateEnable="false"
          :resizeEnable="true"
          :zoomEnable="true"
          :expandZoomRange="true"
          :scrollWheel="true"
          :plugin="plugin">
        </el-amap>
        <div class="map_toolbar">
            <div @click="zoomIn()"><span class="f7-icons">add</span></div>
            <div @click="zoomOut()"><span class="f7-icons">delete</span></div>
        </div>
      </div>
       <f7-toolbar tabbar labels>
        <f7-link @click="go_map" icon="iconfont icon-ditu4" text="地图" tab-link="#home" active url></f7-link>
        <f7-link @click="go_ppv" icon="iconfont icon-daohang" text="实景" tab-link="#contacts"></f7-link>
        <f7-link @click="go_profile" icon="iconfont icon-geren" text="个人" tab-link="#settings"></f7-link>
      </f7-toolbar>
    </f7-page>
</template>

<style lang="less">
    
</style>

<script>

import Vue from 'vue';
// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '6e0f03dfaf84f14778eb981b0620906c',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation','Geocoder']
});

import {mapState} from 'vuex'
import coordtransform from 'coordtransform'


export default {
  data() {
        let self = this;
        return {
            lng: 0.0,
            lat: 0.0,
          zoom: 12,
          center: [121.59996, 31.197646],
          address: '',
          events: {
            click(e) {
             let {lng, lat} = e.lnglat;
             self.lng = lng;
             self.lat = lat;
            }
          },
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    console.log(result.position)
                    var lnglat = coordtransform.wgs84togcj02(result.position.lng, result.position.lat);
                    //var lnglat = coordtransform.gcj02towgs84(result.position.lng, result.position.lat);
                    self.lng = lnglat[0];
                    self.lat = lnglat[1];

                    // self.lng = result.position.lng;
                    // self.lat = result.position.lat;
                    
                    self.center = [self.lng, self.lat];
                    console.log(self.center)
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }]
        };
    },
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    // this.$nextTick(_ => {
    //   this.$f7.showIndicator()
    //   this.$store.dispatch('getTimeline', () => {
    //     this.$f7.hideIndicator()
    //   })
    // })
    
  },
  methods: {
    zoomIn(){
        if(this.zoom < 19){
            this.zoom ++;
        }
    },
    zoomOut(){
        if(this.zoom > 3){
            this.zoom --;
        }
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
  },
  components: {
    
  }
}
</script>
<style scoped>
  #amap {
    height: cacl(100v - 50px);
  }
  .amap-logo{
      right:0 !important;
      left:auto !important;
      display: none !important;
  }
  .amap-copyright{
      right:70px !important;
      left:auto !important;
      display: none!important;
  }

  	.map_toolbar{
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
	.map_toolbar div{
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

	.map_toolbar div span{
		line-height: 22px;
		font-size: 20px;
  }
  .amap-logo{
    display: none;
  }
  .amap-copyright{
    display: none;
  }
</style>
