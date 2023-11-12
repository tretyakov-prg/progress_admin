import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import routes from '../routes';

function AppContent () { 
  const location = useLocation(); 
  const name_loc = '/' + location.pathname.split('/')[1];

  return ( 
        <Routes>
            {routes.map((route, idx) => {
              var name_rout = '/' + route.path.split('/')[1];
              if(route.path === name_loc || name_rout === name_loc )
              {
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
              }
              else
              {
                return (
                  <Route key={idx} path="*" element={<Navigate replace to="/notfound" />} />
                )
              }
          })}
        </Routes>
     );
}

export default AppContent;