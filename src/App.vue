<template>
  <!-- App -->
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" url="/" main>
      </f7-view>
    </f7-views>
    <project-view></project-view>
  </div>
</template>

<script>
import loginView from './components/login'
import projectView from './components/project.vue'

export default {
  data() {
    return {
      activedTab: 'home'
    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    projectView,
    loginView
  }
}
</script>

<style>

.tabs,.tab, .home-view, .ppv-view, .setting-home{
  height: 100%;
  width: 100%;
  margin:0px;
}
.margin-right-10{
  margin-right: 10px;
}

.margin-left-10{
  margin-left: 10px;
}
.page>.navbar, .page>.toolbar, .view>.navbar, .view>.toolbar, .views>.navbar, .views>.toolbar{
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  height: 50px;
}
</style>
