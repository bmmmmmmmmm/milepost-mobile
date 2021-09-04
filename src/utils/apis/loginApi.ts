import instance from './request'

// 账号登录
export const login = (data: FormData) =>
  instance.post('/staff/loginByPassword', data, {
    transformRequest: [],
    headers: { 'Content-Type': 'multipart/form-data' },
  })

// 手机号登录获取验证码
export const loginGetCode = (phone: number) => instance.post('/staff/loginGetVerificationCode', phone)

// 手机号登录
export const loginByPhone = (data: FormData) =>
  instance.post('/staff/loginByVerificationCode', data, {
    transformRequest: [],
    headers: { 'Content-Type': 'multipart/form-data' },
  })

// 用户注册获取验证码
export const registeGetCode = (phone: string) => instance.post('/staff/registerGetVerificationCode', phone)

// 用户通过电话号注册
export const registeByNumber = (data: FormData) =>
  instance.post('/staff/registerByNumber', data, {
    transformRequest: [],
    headers: { 'Content-Type': 'multipart/form-data' },
  })

// 用户注册通过激活码
export const registeByCode = (data: FormData) =>
  instance.post('/staff/registerByActiveCode', data, {
    transformRequest: [],
    headers: { 'Content-Type': 'multipart/form-data' },
  })

// 通过旧密码重置密码
export const resetPasOnline = (oldPassword: string, newPassword: string, surePassword: string) =>
  instance.put('/staff/resetPasswordOnline', {
    oldPassword,
    newPassword,
    surePassword,
  })

// 用户注册获取验证码
export const resetPasGetCode = (phone: string) => instance.post('/staff/resetPasswordGetVerificationCode', phone)

// 通过电话号码修改密码
export const resetPasByNum = (phone: string, verificationCode: string, password: string, surePassword: string) =>
  instance.put('/staff/resetPasswordByNumber', {
    phone,
    verificationCode,
    password,
    surePassword,
  })
