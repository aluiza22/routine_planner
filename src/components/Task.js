import React from "react";

export default function Task(props) {
  return (
    <div className={"task cat_" + props.cat + (props.isDone ? " done" : "")}>
      <button className="check" onClick={() => props.doTask(props.id)}></button>
      <span>{props.title}</span>
      <button className="dump" onClick={() => props.removeTask(props.id)}>
        X
      </button>
    </div>
  );
}
