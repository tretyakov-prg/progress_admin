//fa-facebook-f
//fa-twitter
//fa-google-plus-g


// icon: "fa-facebook-f",
// count: "12,281",
// procent: "+7.2%",
// param: "Total Likes",
// blname: "Target:",
// blcount: "35,098",
// brname: "Duration:",
// brcount: "3,539"

function CCSocial(props) {
    const param = props.data;
    
    const style = {
        lpbar: {
            width:"10%",
            height:"6px"
        },
        rpbar: {
            width:"45%",
            height:"6px"
        }
    }
    return ( 
        <div className="col-md-12 col-xl-4">
            <div className="card card-social">
                <div className="card-block border-bottom">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <i className={"fab " + param.icon + " text-primary f-36"}></i>
                        </div>
                        <div className="col text-right">
                            <h3>{param.count}</h3>
                            <h5 className="text-c-green mb-0">{param.procent} <span className="text-muted">{param.param}</span></h5>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row align-items-center justify-content-center card-active">
                        <div className="col-6">
                            <h6 className="text-center m-b-10"><span className="text-muted m-r-5">{param.blname}</span>{param.blcount}</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme" style={style.lpbar} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">{param.brname}</span>{param.brcount}</h6>
                            <div className="progress">
                                <div className="progress-bar progress-c-theme2" style={style.rpbar} role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default CCSocial;