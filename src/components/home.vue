<template>

      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
          <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>{{navbarTitle}}</f7-nav-center>
          <!-- 头部右侧标题 -->
          <f7-nav-right>
            <f7-link open-popup="#projectView" icon-size="22" v-show="activedTab === 'contacts'"> <i class="f7-icons margin-right-10">filter</i> </f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page toolbar-fixed navbar-fixed>
            <f7-toolbar tabbar labels>
              <f7-link icon="iconfont icon-ios7homeoutline" text="地图" tab-link="#home" active></f7-link>
              <f7-link icon="iconfont icon-ios7chatbubbleoutline" text="实景" tab-link="#contacts"></f7-link>
              <f7-link icon="iconfont icon-ios7gearoutline" text="设置" tab-link="#settings"></f7-link>
            </f7-toolbar>
        <f7-tabs>
            <f7-tab id="home" active @tab:show="tabActived('home')">
            <map-view></map-view>  
            </f7-tab>
            <f7-tab id="contacts" @tab:show="tabActived('contacts')">
            <ppv-view></ppv-view>
            </f7-tab>
            <f7-tab id="settings" @tab:show="tabActived('settings')">
            <setting-view></setting-view>
            </f7-tab>
        </f7-tabs>
        </f7-page>
    </f7-pages>
      </f7-view>
</template>
<script>

import mapView from './map.vue'
import ppvView from './ppv.vue'
import settingView from './settings.vue'
import projectView from './project.vue'
export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {
    navbarTitle() {
      switch(this.activedTab) {
      case 'home':
        return '地图'
      case 'contacts':
        return '实景'
      case 'settings':
        return '设置'
      }
    }
  },
  methods: {
    tabActived(tab) {
      this.activedTab = tab
    }
  },
  components: {
    mapView,
    ppvView,
    settingView,
    projectView
  }
}
</script>
