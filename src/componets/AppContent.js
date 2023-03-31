import { Route, Routes } from 'react-router-dom';
import routes from '../routes'

function AppContent () { 
  return ( 
        <Routes>
            {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
     );
}

export default AppContent ;  