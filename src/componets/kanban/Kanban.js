import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TaskCard from './TaskCard';
import {MModal} from "../../libery";

const Kanban = ({data}) => {
  const [columns, setColumns] = useState(data);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      console.log({droppableId: result.draggableId, destination: result.destination.droppableId, source: result.source.droppableId, columns: columns});
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className='container'>
        <div className='taskcolumnstyles'>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={index} droppableId={columnId}>
                {(provided, snapshot) => (
                  <div className='tasklist'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className="row">
                        <div className='col'>
                        {
                            column.items.length ? 
                            <div className='title' data-badge={column.items.length}><p>{column.title}</p></div>
                            :
                            <div className='title' ><p>{column.title}</p></div>
                        }
                        </div>
                        <div className='col'>
                            <MModal _index={index} />
                        </div>
                    </div>
                    <div className='row scroler'>
                      {column.items.map((item, index) => (
                        <TaskCard key={index} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
