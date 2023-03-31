import { useLocation } from 'react-router-dom';
import routes from '../routes';

function AppBreadcrumb() {

    const currentLocation = useLocation().pathname;

    const getRouteName = (pathname, routes) => {
        const currentRoute = routes.find((route) => route.path === pathname)
        return currentRoute ? currentRoute.name : false
    }

    const getBreadcrumbs = (location) => {
        const breadcrumbs = []
        location.split('/').reduce((prev, curr, index, array) => {
          const currentPathname = `${prev}/${curr}`
          const routeName = getRouteName(currentPathname, routes)
          routeName &&
            breadcrumbs.push({
              pathname: currentPathname,
              name: routeName,
              active: index + 1 === array.length ? true : false,
            })
          return currentPathname
        })
        return breadcrumbs
    }

    const breadcrumbs = getBreadcrumbs(currentLocation);

    return ( 
        <div  className="page-header">
            <div  className="page-block">
                <div  className="row align-items-center">
                    <div  className="col-md-12">
                        <div  className="page-header-title">
                            <h5  className="m-b-10">{getRouteName(currentLocation, routes)}</h5>
                        </div>
                        <ul  className="breadcrumb">
                            <li  className="breadcrumb-item"><a href="/"><i  className="feather icon-home"></i></a></li>
                            {breadcrumbs.map((param, i)=>{
                                return <li  key={i} className={param.active ? "breadcrumb-item active" : "breadcrumb-item"}><a href={param.pathname}>{param.name}</a></li>
                            })}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AppBreadcrumb;