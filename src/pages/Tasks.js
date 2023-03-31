import React from 'react';
import Kanban from '../componets/kanban/Kanban';
//import { columnsFromBackend } from '../KanbanData';
import useKanban from '../hooks/useKanban';

const Tasks = () => {
    const {kdata} = useKanban()
    return(
        <div className="row">
            <div className="col-xl-12">
                <div className="kanban">
                    <Kanban data={kdata}/>
                </div>
            </div>
        </div>
    )
}

export default Tasks;