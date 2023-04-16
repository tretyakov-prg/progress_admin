import React, { useEffect } from 'react';
import Kanban from '../componets/kanban/Kanban';
import useKanban from '../hooks/useKanban';

const Tasks = () => {
    const {kdata, GetTasks} = useKanban();
    useEffect(()=>{
        GetTasks();  
    },[])
    
    return(
        <div className="row">
            <div className="col-xl-12">
                <div className="kanban">
                    {kdata.length === 0 ? "sdfgsdfsdff" : <Kanban data={kdata}/>}
                </div>
            </div>
        </div>
    )
}

export default Tasks;