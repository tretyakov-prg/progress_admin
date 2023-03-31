function PTable(props) {
    const style = {
        img: {
            width:"40px"
        }
    }
    const nameTable = props.table;
    return ( 
        <table className="table table-hover">
            <thead>
                <tr>
                    {nameTable.thead.map((data, i) =>{
                        if (data !== "")
                        {
                            return <th key={i}>{data}</th>
                        }
                        else 
                        {
                            return <th key={i} className="text-left"></th>
                        }
                    })}
                </tr>
            </thead>
            <tbody>
                {nameTable.tbody.map((data, i) => {
                    return(
                    <tr key={i}>   
                        <td>
                            <h6 className="m-0"><img className="rounded-circle m-r-10"  src={data.col_0.img} alt="activity-user" style={style.img}/>{data.col_0.name}</h6>
                        </td>
                        <td>
                            <h6 className="m-0">{data.col_1}</h6>
                        </td>
                        <td>
                            <h6 className="m-0">{data.col_2}</h6>
                        </td>
                        <td>
                            <h6 className={"m-0 " + renderSwitch(data.col_3) + " \""}>{data.col_3}</h6>
                        </td>
                        <td className="text-left">
                            <i className={"fas fa-circle " + renderSwitch(data.col_3) + " f-10"}></i>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
     );
}

export default PTable;

function renderSwitch(param) {
    switch(param) {
        case 'Done':
            return 'text-c-green';
        case 'Delayed':
            return 'text-c-purple';
        case 'Missed':
            return 'text-c-red';
        default:
            return 'text-c-green';
    }
  }