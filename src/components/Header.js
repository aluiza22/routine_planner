import React from "react";

export default function Header() {

  return (
    <header>
      <img alt="calendar icon" src="https://www.flaticon.com/svg/static/icons/svg/2535/2535958.svg" width="40px" />
      <h1>Routine planner</h1>
      <div id="actions">
        <button>Reset week</button>
      </div>
    </header>
  );
}