function CCard (props) {
    let propse = props.data;
    const style = {
        progress: {
            width: propse.pdata
        }
    }
    return ( 
        <div className="col-md-6 col-xl-4">
            <div className="card daily-sales">
                <div className="card-block">
                    <h6 className="mb-4">{propse.name}</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className={"feather " + propse.icon + " f-30 m-r-10"}></i>{propse.cash}</h3>
                        </div>

                        <div className="col-3 text-right">
                            <p className="m-b-0">{propse.procent}</p>
                        </div>
                    </div>
                    <div className="progress m-t-30" >
                        <div className="progress-bar progress-c-theme" role="progressbar" style={style.progress}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CCard ;