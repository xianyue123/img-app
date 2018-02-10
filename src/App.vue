<template>
  <!-- App -->
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views>
        <home-view></home-view>
    </f7-views>
    <project-view></project-view>
  </div>
</template>

<script>
import homeView from './components/home.vue'
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
    homeView
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
</style>
