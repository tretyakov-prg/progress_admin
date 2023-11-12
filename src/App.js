import { useEffect, useState } from 'react';
import React, {Suspense} from 'react';
import { Route, Routes  } from 'react-router-dom';
import "./assets/scss/main.scss";
import AuthService from './services/auth.service';

const loading = (
  <div  className="loader-bg">
    <div  className="loader-track">
      <div  className="loader-fill"></div>
    </div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./templates/DefaultLayout'));
const Login = React.lazy(() => import('./pages/Login'));
const Registrired = React.lazy(() => import('./pages/Registrired'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const Relogin = React.lazy(() => import('./pages/Relogin'));

function App() {
  const user = AuthService.getCurrentUser();
  const [valToken, setValToken] = useState();

  useEffect(() =>{
    if(user)
    {
      setValToken(AuthService.getValidToken())
    }
  },[user, valToken])
  //console.log(valToken);

  return (
    <div>
      <Suspense fallback={loading}>
        <Routes>
          {user ? 
          <>
            {valToken ? <Route path="*" name="Home" element={<DefaultLayout />} /> : <Route path="*" name="Relogin" element={<Relogin />} />}
            <Route path="/notfound" name="Notfound" element={<PageNotFound />} />
            
          </>
          :
          <>
            <Route path="*" name="Login" element={<Login />} />
            <Route path="/login" name="Login" element={<Login />} />
            <Route path="/singup" name="SingUp" element={<Registrired />} />
          </>
          }
          {/* <AuthVerify logOut={this.logOut}/> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
