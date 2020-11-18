import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
/** components */
import Loading from 'components/Loading/Loading'
/** pages */
const Home = lazy(() => import('pages/Home/Home'))
// const Detail = lazy(() => import('pages/Detail/Detail'))

const Routes = () => {

  return (    
    <BrowserRouter>
        
      <Suspense fallback={ <Loading text='Loading...' /> }>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/detail/:city/:temp/:min/:max" component={Detail} /> */}
          <Redirect push to="/" />
        </Switch>
      </Suspense>

    </BrowserRouter>
  )
}

export default Routes
