/* eslint-disable promise/always-return */
import swal from 'sweetalert'
import { LOGIN_SUCCESS, LOGIN_GETCODE, REGISTE_SUCCESS, REGISTE_GETCODE } from '../../constants/actionTypes'
import {
  login,
  loginGetCode,
  loginByPhone,
  registeByNumber,
  registeGetCode,
  registeByCode,
  resetPasOnline,
  resetPasGetCode,
  resetPasByNum,
} from '../../utils/apis/loginApi'
import { ToHome } from '../../utils/Tohome'

export const Success = (token: string, authorities: string, user: any) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
    authorities,
    user,
  },
})

export const LoginSuccess = (data: FormData, history: { history: any }) => async (dispatch: any) => {
  try {
    const rs = await login(data)

    if (rs.data.flag) {
      swal('', '登录成功', 'success', { buttons: [''] })
      const authorities = JSON.stringify(rs.data.data.staff.authorities)
      // const id = JSON.stringify(rs.data.data.staff.authorities)
      // const authorities = JSON.stringify(rs.data.data.staff.authorities)

      // const user = JSON.stringify(rs.data.data.staff);
      const user = rs.data.data.staff
      dispatch(Success(rs.data.data.token, authorities, user))
      sessionStorage.setItem('token', rs.data.data.token)
      sessionStorage.setItem('authorities', authorities)
      sessionStorage.setItem('userId', user.id)
      ToHome(history)
    } else {
      swal('', `${rs.data.msg}`, 'error', { buttons: [''] })
    }
  } catch (error) {
    console.log(error)
    swal('', '请求错误', 'error', {
      buttons: [''],
    })
  }
}

export const LoginGetCode = (phone: number) => async (dispatch: any) => {
  try {
    const rs = await loginGetCode(phone)
    console.log(rs)
    dispatch({
      type: LOGIN_GETCODE,
    })
  } catch {
    swal('', '请求错误', 'error', {
      buttons: [''],
    })
  }
}

export const LoginSuccessByCode = (data: FormData, history: { history: any }) => async (dispatch: any) => {
  try {
    const rs = await loginByPhone(data)
    console.log(rs)
    if (rs.data.flag === true) {
      swal('', '登录成功', 'success', {
        buttons: [''],
      })
      const authorities = JSON.stringify(rs.data.data.staff.authorities)
      const user = JSON.stringify(rs.data.data.staff)
      dispatch(Success(rs.data.data.token, authorities, user))
      sessionStorage.setItem('token', rs.data.data.token)
      sessionStorage.setItem('authorities', authorities)
      // ToHome(history);
    } else {
      swal('', rs.data.msg, 'error', {
        buttons: [''],
      })
    }
  } catch {
    // console.log(rs);
    swal('', '请求错误', 'error', {
      buttons: [''],
    })
  }
}

// 手机号注册获取验证码
export const RegisteGetCode = (phone: string) => async (dispatch: any) => {
  try {
    const rs = await registeGetCode(phone)
    if (rs.data.flag) {
      swal('', '验证码已发送', 'success', { buttons: [''] })
      dispatch({
        type: REGISTE_GETCODE,
      })
    } else {
      swal('', rs.data.msg, 'error', { buttons: [''] })
    }
  } catch {
    swal('', '请求错误', 'error', {
      buttons: [''],
    })
  }
}

// 手机号注册成功
export const RegisteByNumberSuc = (data: FormData) => async (dispatch: any) => {
  try {
    const rs = await registeByNumber(data)
    console.log(rs)
    if (rs.data.flag) {
      swal('', '注册成功，请等待管理员审核', 'success', { buttons: [''] })
      dispatch({
        type: REGISTE_SUCCESS,
      })
    }
    if (!rs.data.flag) {
      swal('', rs.data.msg, 'error', { buttons: [''] })
    }
  } catch {
    swal('', '请求错误!!!', 'error', {
      buttons: [''],
    })
  }
}
// 激活码注册
export const RegisteByCodeSuc = (data: FormData) => async (dispatch: any) => {
  try {
    const rs = await registeByCode(data)
    console.log(rs)
    dispatch({
      type: REGISTE_SUCCESS,
    })
  } catch {
    swal('', '请求错误', 'error', {
      buttons: [''],
    })
  }
}

export const ResetPasOnlineSuc =
  (oldPassword: string, newPassword: string, surePassword: string) => async (dispatch: any) => {
    try {
      const rs = await resetPasOnline(oldPassword, newPassword, surePassword)
      console.log(rs)
    } catch {
      swal('', '请求错误', 'error', {
        buttons: [''],
      })
    }
  }

// 电话号码修改密码获取验证码
export const ResetPasGetCode = (phone: string) => async (dispatch: any) => {
  try {
    const rs = await resetPasGetCode(phone)
    console.log(rs)
    console.log(rs.data)

    if (rs.data.flag) {
      swal('', '验证码已发送', 'success', { buttons: [''] })
    } else {
      swal('', rs.data.msg, 'error', { buttons: [''] })
    }
  } catch (error) {
    console.log(error)
    swal('', '请求错误!!!', 'error', { buttons: [''] })
  }
}

export const ResetPasByNum =
  (phone: string, verificationCode: string, password: string, surePassword: string) => async (dispatch: any) => {
    try {
      const rs = await resetPasByNum(phone, verificationCode, password, surePassword)
      console.log(rs)
    } catch (error) {
      console.log(error)
      swal('', '请求错误!!', 'error', {
        buttons: [''],
      })
    }
  }
