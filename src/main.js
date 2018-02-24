import Vue from 'vue'
import axios from 'axios'

// Ponyfill
import 'es6-object-assign/auto'
import 'es6-promise/auto'

// Import F7, F7-Vue
import 'framework7'
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
import 'framework7-icons/css/framework7-icons.css'

//OR for Material Theme:
// import 'framework7/dist/css/framework7.material.min.css'
// import 'framework7/dist/css/framework7.material.colors.min.css'


// Import App Custom Styles
import './assets/icon-font/iconfont.css'
import './assets/styles/app.less'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './App'

// Import Vuex store
import store from './store'

// Init Vue Plugin
Vue.use(Framework7Vue)

const DEV_BASE_URL = 'http://127.0.0.1:4000'
const PROD_BASE_URL = 'https://raw.githubusercontent.com/BelinChung/HiApp/master/mock_api'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PROD_BASE_URL : DEV_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = false

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    console.log(`token ${store.state.token}`)
    config.headers.Authorization = store.state.token

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    let data = response.data
    return !data.err_code ? data : Promise.reject(data)
  },
  error => {
    return Promise.reject(error)
  }
)

//Vue.prototype.$http = axios

// import StoreCache from './utils/storeCache'

// let cache = new StoreCache('vuex')

// Init App
new Vue({
  el: '#app',
  store,
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    // material: true,
    // pushState: true,
    modalTitle: '温馨提示',
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    preroute: function(view, options) {
      //console.log(f7.mainView.history);
      //console.log(options);
      // view.router.load({
      //   url: '/login/',
      //   force: true,
      //   reload: true,
      //   ignoreCache: true,
      // })
      // return false;
      return true
    }
  },
  // Register App Component
  components: {
    app: App
  }
})

//getLoginUser(store)
