function BNotification (props) {
    
    return ( 
        <div>
            {props.ndata ? props.ndata.map((param, i)=>(
                <li  key={i} className="notification">
                    <div  className="media">
                        <img  className="img-radius" src={param.img} alt="Generic placeholder"/>
                        <div  className="media-body">
                            <p><strong>{param.name}</strong><span  className="n-time text-muted"><i  className="icon feather icon-clock m-r-10"></i>{param.time}</span></p>
                            <p>{param.desc}</p>
                        </div>
                    </div>
                </li>
            ))
            : 'Loading...'}
        </div>
     );
}

export default BNotification ;