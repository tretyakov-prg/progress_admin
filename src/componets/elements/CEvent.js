function CEvent() {
    return ( 
        <div className="col-xl-4 col-md-6">
            <div className="card card-event">
                <div className="card-block">
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <h5 className="m-0">Upcoming Event</h5>
                        </div>
                        <div className="col-auto">
                            <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                        </div>
                    </div>
                    <h2 className="mt-3 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                    <h6 className="text-muted mt-4 mb-0">You can participate in event </h6>
                    <i className="fab fa-angellist text-c-purple f-50"></i>
                </div>
            </div>
            <div className="card">
                <div className="card-block border-bottom">
                    <div className="row d-flex align-items-center">
                        <div className="col-auto">
                            <i className="feather icon-zap f-30 text-c-green"></i>
                        </div>
                        <div className="col">
                            <h3 className="f-w-300">235</h3>
                            <span className="d-block text-uppercase">TOTAL IDEAS</span>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="row d-flex align-items-center">
                        <div className="col-auto">
                            <i className="feather icon-map-pin f-30 text-c-blue"></i>
                        </div>
                        <div className="col">
                            <h3 className="f-w-300">26</h3>
                            <span className="d-block text-uppercase">TOTAL LOCATIONS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CEvent;