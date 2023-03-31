
function RCUsers (props) {
    const data_users = props.data;
    return ( 
        <div className="col-xl-8 col-md-6">
            <div className="card Recent-Users">
                <div className="card-header">
                    <h5>Recent Users</h5>
                </div>
                <div className="card-block px-0 py-3">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {data_users.map((data, i)=>(
                                    <tr key={i} className="unread">
                                        <td><img className="rounded-circle"  src={data.avatar} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">{data.name}</h6>
                                            <p className="m-0">{data.desc}</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted">
                                                <i className={"fas fa-circle " + data.blink + " f-10 m-r-15"}></i>
                                                {data.data}
                                            </h6>
                                        </td>
                                        <td>
                                            <a href={data.r_href} className="label theme-bg2 text-white f-12">Reject</a>
                                            <a href={data.a_href} className="label theme-bg text-white f-12">Approve</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RCUsers ;