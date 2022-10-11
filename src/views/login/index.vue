<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="登录"
    left-arrow
    @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-form
      @submit="onSubmit"
      ref="form"
    >
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        left-icon="smile-o"
        :rules="userRules.mobile"
        type="number"
        maxlength="11"
      >
        <i
          slot="left-icon"
          class="iconfont icon-shouji"
        ></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userRules.code"
        type="number"
        maxlength="6"
      >
        <i
          slot="left-icon"
          class="iconfont icon-yanzhengma"
        ></i>
        <template #button>
          <van-button
            v-if="isShowBtn"
            round
            size="small"
            type="defalut"
            class="send-btn"
            native-type="button"
            @click="sendCode"
          >发送验证码</van-button>
          <van-count-down
            v-else
            :time="3*1000"
            format="ss s"
            @finish="isShowBtn=true"
          />
        </template>
      </van-field>
      <div class="submit-btn-warp">
        <van-button
          class="submit-btn"
          block
          type="info"
          native-type="submit"
        >登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendCode } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: '',

      },
      userRules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3|5|7|8]\d{9}$/,
            message: '手机号格式错误'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式错误'
          }
        ]
      },
      isShowBtn: true
    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      try {
        this.$toast.loading({
          message: '登录中',
          forbidClick: true,
          duration: 0 // 持续时间  默认2000  0 一直持续
        })
        const { data } = await login(user)
        // console.log(res);
        this.$store.commit('GET_USER', data.data)
        this.$toast.success({
          message: '登录成功'
        })
      } catch (err) {
        console.log(err);
        this.$toast.fail('登录失败')
      }
    },
    async sendCode () {
      // 验证手机格式
      try {
        await this.$refs.form.validate('mobile') // 返回一个promise
        this.isShowBtn = false
      } catch (error) {
        return console.log('验证失败', error)
      }
      try {
        await sendCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (error) {
        this.isShowBtn = true
        if (error.response.status === 429) {
          this.$toast('发送太频繁，请稍后重试')
        } else {
          this.$toast('发送失败')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
    color: rgb(102, 102, 102);
  }
  .send-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    border: none;
    font-size: 22px;
    color: rgb(102, 102, 102);
  }
  .submit-btn-warp {
    padding: 53px 33px;
    .submit-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
