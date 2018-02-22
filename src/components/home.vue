<template>
          <f7-page toolbar-fixed navbar-fixed>  
            
            <f7-toolbar tabbar labels>
              <f7-link @click="go_map" icon="iconfont icon-ditu4" text="地图" tab-link="#home" active url></f7-link>
              <f7-link @click="go_ppv" icon="iconfont icon-daohang" text="实景" tab-link="#contacts"></f7-link>
              <f7-link @click="go_profile" icon="iconfont icon-geren" text="个人" tab-link="#settings"></f7-link>
            </f7-toolbar>

            <!-- <f7-tabs>
                <f7-tab id="home" active @tab:show="tabActived('home')">
                <map-view></map-view>  
                </f7-tab>
                <f7-tab id="contacts" @tab:show="tabActived('contacts')">
                <ppv-view></ppv-view>
                </f7-tab>
                <f7-tab id="settings" @tab:show="tabActived('settings')">
                <setting-view></setting-view>
                </f7-tab>
            </f7-tabs> -->

        </f7-page>
</template>
<script>
import mapView from "./map.vue";
import ppvView from "./ppv.vue";
import settingView from "./settings.vue";
import projectView from "./project.vue";
export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {
   
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab;
    },
    go_map(){
      this.$f7.confirm('您是否要退出登录',
                () => {
                    f7.mainView.router.load({
                        url: '/settings/',
                        force: true,
                        reload: true,
                        ignoreCache: true,
                    });
                },
            );
    },
    go_ppv(){
      alert('ppv')
    },
    go_profile(){
      alert('profile')
    }
  },
  components: {
    mapView,
    ppvView,
    settingView,
    projectView
  }
};
</script>
