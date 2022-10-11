<template>
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar route class="layout-tabbar">
      <van-tabbar-item v-for="item,index in tabbarList" :key="index" :to="item.to">
        <i
          slot="icon"
          :class="['iconfont',item.icon]"
        ></i>
        <span class="text">{{item.text}}</span>
        </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabbarList: [
        { icon: 'icon-shouye', text: '首页', to: '/ ' },
        { icon: 'icon-wenda', text: '问答', to: '/qa' },
        { icon: 'icon-shipin', text: '视频', to: '/video' },
        { icon: 'icon-wode', text: '我的', to: '/profile' },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.layout-tabbar {
  i.iconfont {
    font-size: 40px;
  }
  span.text {
    font-size: 20px;
  }
}
</style>
