import React, {Suspense} from 'react';
import { Route, Routes  } from 'react-router-dom';
import "./assets/scss/default.scss";

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

function App() {
  return (
    <div>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/login" name="Login" element={<Login />} />
          <Route path="/singup" name="SingUp" element={<Registrired />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
