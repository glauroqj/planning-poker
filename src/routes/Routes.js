import React, { useEffect, Suspense, lazy, useContext, memo } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
/** components */
import Loading from 'components/Loading/Loading'
/** providers */
import { SessionContext } from 'providers/Session'
/** pages */
const Home = lazy(() => import('pages/Home/Home'))
const Room = lazy(() => import('pages/Room/Room'))

const Routes = () => {
  const { user, checkUserLogin } = useContext(SessionContext)

  useEffect(() => {
    checkUserLogin()
  }, [])

  const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('< PRIVATE ROUTE : CHECK USER > ', user)

    return (
      <Route
        {...rest}
        render={props => user?.name
          ? <Component {...props} user={user} /> 
          : <Redirect push to="/" />
        }
      />
    )
  }

  return (    
    <BrowserRouter>
        
      <Suspense fallback={ <Loading text='Loading...' /> }>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/room/:roomID" component={Room} />
          {/* <Route exact path="/detail/:city/:temp/:min/:max" component={Detail} /> */}
          <Redirect push to="/" />
        </Switch>
      </Suspense>

    </BrowserRouter>
  )
}

export default memo(Routes)
