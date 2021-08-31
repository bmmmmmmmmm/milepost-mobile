/* eslint-disable unicorn/consistent-function-scoping */
interface State {
  init: any
}

export const initState: State = { init: 'init' }

// todo state类型在初始的时候改为了any,项目完善后再更改
const combineReducers = (reducers: any) => {
  const allReducer = (state: any = initState, action: any) => ({})
  return allReducer
}

const allReducers = combineReducers({})

export default allReducers
/* eslint-disable unicorn/consistent-function-scoping */
