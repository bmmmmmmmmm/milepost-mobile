import { NotFound } from '../../pages'
import Login from '../../pages/login/index'
import LoginIndex from '../../pages/login/components/loginindex'
import RegisterCode from '../../pages/login/components/registercode'
import RegisterPhone from '../../pages/login/components/registerphone'
import FindPasswordPhone from '../../pages/login/components/findpasswordphone'
import FindPasswordCode from '../../pages/login/components/findpasswordcode'
import { Routes } from '../Typings'
import EditPassword from '../../pages/login/components/editpassword'

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
    path: '/notFound',
    component: NotFound,
  },
]

export default routes
