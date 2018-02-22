<template>
    <f7-page class="login-page">
        <f7-block>
            <div class="logo">
                <img src="../../static/img/hiapp_logo@2x.png" alt="logo">
            </div>
            <div class="app-name">HiApp</div>
        </f7-block>
        <f7-block class="detail">
            <f7-list form>
          <f7-list-item>
            <f7-label>用户名</f7-label>
            <f7-input name="username" type="text" placeholder="请输入用户名"></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>密码</f7-label>
            <f7-input name="password" type="password" placeholder="请输入密码"></f7-input>
          </f7-list-item>
        </f7-list>
        </f7-block>
        <f7-block>
            <f7-button @click="submit" fill big>登 录</f7-button>
        </f7-block>
        <f7-block class="copyright">
            Copyright Ã‚Â© 2017 xianyue.
        </f7-block>
    </f7-page>
</template>
<script>
    export default {
        methods: {
            submit() {
                f7.alert('登录成功', '提示', () => {
                   f7.mainView.router.load(
                    {   
                        url: '/map/',
                        force: true,
                        reload: true,
                        ignoreCache: true
                    })
                })
            }
        }
    }
</script>


<style lang="less" scoped>
    .content-block{
        margin:45px 0;
    }
    .login-page {
        .logo{
            width: 90px;
            height: 90px;
            line-height: 90px;
            background-color: #fff; 
            text-indent: -9999;
            border-radius: 5px;
            margin: 0 auto;
            border: 1px solid #dfdfdf;
            text-align: center;
            > img{
                width: 75px;
                height: 75px;
                vertical-align: middle;
            }
        }
        .app-name{
            text-align: center;
            color: #666;            
            font-size: 20px;
            margin-top: 15px;
        }
        .detail{
            text-align: center;
            color: #666;
            > p{
                margin: 6px 0;
            }
        }
        .copyright{
            position: absolute;
            left: 0;
            text-align: center;
            bottom: 0;
            font-size: 10px;
            color: #9c9c9c;
            width: 100%;
            padding: 0;
        }
    }
    .item-title{
        text-align: right;
        margin-right: 20px;
    } 
</style>