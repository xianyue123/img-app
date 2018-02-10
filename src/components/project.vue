<template>
  <f7-popup id="projectView">
    <f7-page navbar-fixed>
      <f7-navbar theme="white">
        <f7-nav-center title="工程列表"></f7-nav-center>
        <f7-nav-right>
          <f7-link close-popup><i class="f7-icons margin-right-10">close</i></f7-link>
        </f7-nav-right>
      </f7-navbar>
        <f7-list>
            <f7-list-group>
                <f7-list-item title="camera-20170716-135351" group-title></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 1"></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 2"></f7-list-item>
            </f7-list-group>
            <f7-list-group>
                <f7-list-item title="a60068-2017-10-18001" group-title></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 1"></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 2"></f7-list-item>
            </f7-list-group>
            <f7-list-group>
                <f7-list-item title="a60068-2017-10-18001" group-title></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 1"></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 2"></f7-list-item>
            </f7-list-group>
            <f7-list-group>
                <f7-list-item title="a60068-2017-10-18001" group-title></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 1"></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 2"></f7-list-item>
            </f7-list-group>
            <f7-list-group>
                <f7-list-item title="a60068-2017-10-18001" group-title></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 1"></f7-list-item>
                <f7-list-item media-item @click="show" link="#" title="Item 2"></f7-list-item>
            </f7-list-group>
        </f7-list>
    </f7-page>
  </f7-popup>
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
    .list-block{
        margin: 0px;
    }
</style>

