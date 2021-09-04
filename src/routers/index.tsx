import React, { FC, ReactElement, useEffect } from 'react'
import { useHistory, Switch, Route, Redirect } from 'react-router-dom'
import { Routes } from './Typings'

interface Iprpos {
  routes: Routes[] | undefined
}

const HomeRoute: FC<Iprpos> = ({ routes }): ReactElement => {
  const history = useHistory()
  useEffect(() => {
    // 当路由切换时界面置顶
    history.listen(() => {
      window.scrollTo(0, 0)
    })
  })
  return (
    <Switch>
      {routes !== undefined
        ? routes.map((item) =>
            item.exact ? (
              <Route path={item.path} component={item.component} key={item.path} exact />
            ) : (
              <Route path={item.path} component={item.component} key={item.path} />
            ),
          )
        : false}
      <Redirect to="/notFound" />
    </Switch>
  )
}
export default HomeRoute
