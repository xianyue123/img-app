<template>
    <f7-page style='background:#fff;'>
        <f7-navbar>
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>个人信息</f7-nav-center>
      </f7-navbar>
    <f7-block>
        <div class="settings-view" style="margin-top: 60px;">
            <div class="avatar">
                <span><img src='../../static/img/headimg.png'></span>
            </div>

             <f7-list>
                  <f7-list-item link='#' @click="$router.load({url: '/person/', force: true, reload: true, ignoreCache: true})">
                    <span>基本信息<em></em></span>
                </f7-list-item>
                <f7-list-item title="工程数量" after="1"></f7-list-item>
                <f7-list-item title="线路数量" after="2"></f7-list-item>
                <f7-list-item title="总里程数" after="3"></f7-list-item>
                <f7-list-item title="总照片数" after="4"></f7-list-item>
              </f7-list>

            <f7-button @click="exit" fill big color="orange">退出登录</f7-button>

        </div>
    </f7-block>
        <f7-toolbar tabbar labels>
            <f7-link @click="go_map" icon="iconfont icon-ditu4" text="地图" tab-link="#home"></f7-link>
            <f7-link @click="go_ppv" icon="iconfont icon-daohang" text="实景" tab-link="#contacts"></f7-link>
            <f7-link @click="go_profile" icon="iconfont icon-geren" text="个人" tab-link="#settings" active url></f7-link>
        </f7-toolbar>
    </f7-page>
</template>

<script>
import {mapState} from 'vuex'
export default {
    methods: {
        exit(){
            this.$f7.confirm('您是否要退出登录',
                () => {
                    f7.mainView.router.load({
                        url: '/',
                        force: true,
                        reload: true,
                        ignoreCache: true,
                    });
                },
            );
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
  computed: {
    ...mapState({
      userInfo: state => state.user,
    }),
    avatarMedia() {
      return `<img class='avatar' src='${this.userInfo.avatarUrl}' />`
    }
  }
}
</script>

<style lang="less">
    .settings-view{
        .list-block{
            margin: 20px 0;
            .iconfont{
                height: 28px;
            }
            .icon-language{
                color: #0099FF;
            }
            .icon-feedback2{
                color: #00CC99;
            }
            .icon-about1{
                color: #FFCC33;
            }
            .logout{
                color: #0099FF;
            }
        }
        .user-profile{
            .item-content{
                padding-top: 5px;
                padding-bottom: 5px;
            }
            .avatar{
                width: 65px;
                height: 65px;
                border-radius: 5px;
            }
            .detail{
                .location{
                    color: #858585;
                    font-size: 15px;
                    margin-top: 5px;
                }
            }
        }
    }
em {
    font-style: normal;
    color: #f44336;
  }

  .avatar {
    span {
      display: block;
      margin: 10px auto;
      border: 1px solid #ccc;
      width: 100px;
      height: 100px;
      border-radius: 100px;
      overflow: hidden;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>