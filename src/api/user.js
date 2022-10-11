import request from "@/utils/request";
// 登录验证
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

// 发送验证码
export const sendCode = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`
  })
}
