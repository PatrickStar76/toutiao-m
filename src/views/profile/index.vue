<template>
  <div class="my-container">
    <div class="header not-login">
      <div
        class="login-btn"
        @click="$router.push('/login')"
      >
        <img
          class="mobile-img"
          src="~@/assets/mobile.png"
          alt=""
        >
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="name">黑马头条</span>
        </div>
        <div class="right">
          <van-button
            size="mini"
            round
          >编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item" v-for="item,index in homeDataItem" :key="index">
          <div class="count">{{item.count}}</div>
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeDataItem: [
        { count: 10, text: '头条' },
        { count: 666, text: '关注' },
        { count: 4444, text: '粉丝' },
        { count: 999, text: '获赞' },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 361px;
    background: url('~@/assets/banner.png'); //在css中加~  ~@/ 指向src/    ~@/   ===  @/
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 4px solid #fff;
        }
        .name {
          font-size: 30px;
          color: #fff;
          margin-left: 23px;
        }
      }
    }
    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
}
</style>
