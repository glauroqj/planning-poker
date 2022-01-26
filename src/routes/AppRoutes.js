import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
  useContext,
  memo,
} from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
/** components */
import Loading from "components/Loading/Loading";
/** providers */
import { SessionContext } from "providers/Session";
/** pages */
const Home = lazy(() => import("pages/Home/Home"));
const Room = lazy(() => import("pages/Room/Room"));

const AppRoutes = () => {
  const { user, checkUserLogin } = useContext(SessionContext);
  const [state, setState] = useState({
    loading: true,
  });

  useEffect(() => {
    isValid();
  }, []);

  const isValid = async () => {
    await checkUserLogin();
    setState({ ...state, loading: false });
  };

  // const PrivateRoute = ({ component: Component, ...rest }) => {
  //   console.log('< PRIVATE ROUTE : CHECK USER > ', user)

  //   return (
  //     <Route
  //       {...rest}
  //       render={props => user?.displayName && user?.emailVerified
  //         ? <Component {...props} user={user} />
  //         : <Redirect push to="/" />
  //       }
  //     />
  //   )
  // }

  if (state.loading) return <Loading text="Loading..." />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading text="Loading..." />}>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/room/:roomID" component={Room} />
          {/* <PrivateRoute exact path="/room/:roomID" component={Room} /> */}
          <Redirect push to="/" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default memo(AppRoutes);
