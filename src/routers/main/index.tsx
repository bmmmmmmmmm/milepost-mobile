import {
  NotFound,
  Home,
  Join,
  Login,
  LoginIndex,
  RegisterCode,
  RegisterPhone,
  FindPasswordPhone,
  FindPasswordCode,
  EditPassword
} from '../../pages'
import { Routes } from '../Typings'

const routes: Routes[] = [
  {
    path: '/login',
    component: Login,
    children: [
      {
        path: '/login/registercode',
        component: RegisterCode,
      },
      {
        path: '/login/registerphone',
        component: RegisterPhone,
      },
      {
        path: '/login/findpasswordphone',
        component: FindPasswordPhone,
      },
      {
        path: '/login/editpassword',
        component: EditPassword,
      },
      {
        path: '/login/findpasswordcode',
        component: FindPasswordCode,
      },
      {
        path: '/login',
        component: LoginIndex,
      },
    ],
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/notFound',
    component: NotFound,
  },
  {
    path: '/',
    component: Home
  }
]

export default routes
