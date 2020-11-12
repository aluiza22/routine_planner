import React from "react";
import { Draggable } from 'react-beautiful-dnd';

export default function Task(props) {
  return (
    <Draggable draggableId={props.id} index={Number(props.id.slice(5))} >
      {provided => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={"task cat_" + props.cat + (props.isDone ? " done" : "") + (props.isFixed ? " fixed" : "")}>
          <button className="check" onClick={() => props.doTask(props.id)}></button>
          <span>{props.title}</span>
          <button className="dump" onClick={() => props.removeTask(props.id)}>
            X
          </button>
        </div>  
      )}
    </Draggable>
  );
}
