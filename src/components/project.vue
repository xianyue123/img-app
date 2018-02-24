<template>
    <!-- Left Panel -->
    <f7-panel right cover layout="white">
        <f7-page toolbar-fixed navbar-fixed>
             <f7-navbar >
                <f7-nav-center sliding>线路列表</f7-nav-center>
            </f7-navbar>
            <f7-block>
                <f7-block-title>工程1</f7-block-title>
                <f7-list>
                    <f7-list-item checkbox name="my-checkbox" value="1" title="a60068-2017-10-18001" checked></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="2" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="3" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="4" title="a60068-2017-10-18001"></f7-list-item>
                </f7-list>
                <f7-block-title>工程2</f7-block-title>
                <f7-list>
                    <f7-list-item checkbox name="my-checkbox" value="1" title="a60068-2017-10-18001" checked></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="2" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="3" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="4" title="a60068-2017-10-18001"></f7-list-item>
                </f7-list>
                <f7-block-title>工程3</f7-block-title>
                <f7-list>
                    <f7-list-item checkbox name="my-checkbox" value="1" title="a60068-2017-10-18001" checked></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="2" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="3" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="4" title="a60068-2017-10-18001"></f7-list-item>
                </f7-list>
                <f7-block-title>工程4</f7-block-title>
                <f7-list>
                    <f7-list-item checkbox name="my-checkbox" value="1" title="a60068-2017-10-18001" checked></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="2" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="3" title="a60068-2017-10-18001"></f7-list-item>
                    <f7-list-item checkbox name="my-checkbox" value="4" title="a60068-2017-10-18001"></f7-list-item>
                </f7-list>
            </f7-block>
        </f7-page>
    </f7-panel>

</template>

<script>

    export default {
     data() {
         var items = [];
        for (var i = 1; i <= 20; i++) {
          items.push({
            title: 'Item ' + i,
            subtitle: 'Subtitle ' + i
          })
        }
    return {
        items: items,
      text: ''
    }
  },
  methods: {
        show(){
            alert('click')
        },
        editorTextChange(text) {
            this.text = text
            },
            sendTweet() {
            this.$f7.showPreloader(this.$t('app.submitting'))
                setTimeout(_ => {
                    this.$f7.hidePreloader()
                    this.$f7.closeModal('#publisherPopup')
                }, 1500)
            }
        },
        components: {
            
        }
    }

</script>
<style scoped>
    .list-block ul li{
        margin-top: 2px;
    }
    .list-block{
        margin: 0px;
    }
    .content-block-title{
        font-weight: 600;
        margin: 15px 15px 5px;
    }
    .navbar{
        background: rgb(64, 158, 255)
    }
    .list-block .item-media{
        padding-top: 11px;
    }
</style>

