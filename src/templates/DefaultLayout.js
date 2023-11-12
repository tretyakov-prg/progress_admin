import {  
  AppContent,
  AppBreadcrumb,
  AppNavBar
} from "../componets";
import data from "../data.json";


function DefaultLayout() {  

  return ( 
    <>
      <AppNavBar data={data.menu} title={data.title} />
      <div  className="pcoded-main-container">
        <div  className="pcoded-wrapper">
          <div  className="pcoded-content">
            <div  className="pcoded-inner-content">
              <AppBreadcrumb />
                <div  className="main-body">
                  <div  className="page-wrapper">
                    <AppContent />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
     );
}

export default DefaultLayout;