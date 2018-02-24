<template>
    <f7-page navbar-fixed style='background:#fff;'>
        <f7-navbar theme="white">
          <f7-nav-left>
              <f7-link @click="$router.load({url: '/settings/', force: true, reload: true, ignoreCache: true,})" class="margin-left-10">
                <i class="iconfont icon-fanhui3"></i>
            </f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>个人信息</f7-nav-center>
      </f7-navbar>
    <f7-block>
        <div class="settings-view" style="margin-top: 60px;">
            <div class="avatar">
                <span><img src='../../static/img/headimg.png'></span>
            </div>
             <f7-list>
                <f7-list-item title="用户名" after="1"></f7-list-item>
                <f7-list-item title="注册时间" after="2"></f7-list-item>
                <f7-list-item title="总里程数" after="3"></f7-list-item>
                <f7-list-item title="总照片数" after="4"></f7-list-item>
              </f7-list>
        </div>
    </f7-block>
    </f7-page>
</template>
<script>
export default {
  
}
</script>

<style>

</style>


