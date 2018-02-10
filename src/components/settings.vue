<template>
    <div class="settings-view">
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
</template>

<script>
import {mapState} from 'vuex'
export default {
    methods: {
        exit(){
            this.$f7.confirm('您是否要退出登录',
                () => {
                    f7.mainView.router.load({
                        url: '/login/'
                    });
                },
            );
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