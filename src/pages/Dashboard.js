import {CCard, CCRating, CCSocial, CEvent, RCUsers} from "../componets/elements";
import {BButton, TPanel} from "../libery";
import dash from "../dashboard.json";

function Dashboard () {

    return ( 
        <>
            <div className="row">
                {dash.ccard.map((data, i)=>{
                    return <CCard key={i} data={data}/>
                })}
            </div>
            <div className="row">
                <RCUsers data={dash.rcusers}/>

                <CEvent />
            </div>
            <div className="row">
                {dash.social.map((data, i)=>{
                    return <CCSocial key={i} data={data} />
                })}
            </div>
            <div className="row">
                <CCRating data={dash.raiting}/>
                <TPanel data={dash.tables}/>
            </div>
            <div className="row">
                <BButton 
                    mclass="primary"
                    type=""
                    name="My Button"
                />
            </div>
        </>
     );
}

export default Dashboard ;