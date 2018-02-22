<template>
    <f7-page>
        <f7-navbar theme="white">
          <f7-nav-left>
          </f7-nav-left>
          <f7-nav-center sliding>个人信息</f7-nav-center>
      </f7-navbar>
        <div class="settings-view" style="margin-top: 44px;">
            <f7-list class="user-profile" style="margin:0px;">
                <f7-list-item link="/login/" :media="avatarMedia">
                    <div slot="inner-start" class="detail">
                        <div class="name">{{userInfo.nickName}}</div>
                        <div class="location">
                            <span>用户: </span>
                            <span>{{userInfo.location}}</span>
                        </div>
                    </div>
                </f7-list-item>
            </f7-list>
            <f7-list>
                <f7-list-item title="语言设置" link="/login/" media="<i class='iconfont icon-language'></i>"></f7-list-item>
            </f7-list>
            <f7-list>
                <f7-list-item title="关于" link="/login/" media="<i class='iconfont icon-about1'></i>"></f7-list-item>
            </f7-list>
            <f7-list>
            <f7-list-item @click="exit" title="退出" link media="<i class='f7-icons logout'>logout</i>"></f7-list-item>
            </f7-list>
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
</style>