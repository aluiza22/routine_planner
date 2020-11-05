import React from "react";

export default function Header(props) {

  const changeTheme = () => {document.body.classList.toggle("dark-theme");}

  return (
    <header>
      <img alt="calendar icon" src="https://www.flaticon.com/svg/static/icons/svg/2535/2535958.svg" width="40px" />
      <h1>Routine planner</h1>
      <div id="actions">
        <button onClick={props.resetWeek}>Reset week</button>
        <button id="dark_mode" onClick={changeTheme} title="dark mode">⚫️</button>
      </div>
    </header>
  );
}