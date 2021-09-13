import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_GETCODE, REGISTE_GETCODE, REGISTE_SUCCESS } from '../../constants/actionTypes'

interface loginTypes {
  flag: boolean
  token?: string
  user?: any
}

export const loginInitialState: loginTypes = {
  flag: false,
}
export default function counterReducer(state = loginInitialState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        flag: true,
        token: action.payload.token,
        user: action.payload.user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        flag: false,
      }
    case LOGIN_GETCODE:
      return {
        ...state,
      }
    case REGISTE_GETCODE:
      return {
        ...state,
      }
    case REGISTE_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}
