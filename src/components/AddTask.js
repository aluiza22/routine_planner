import React from "react";

export default function AddTask({ addTask }) {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("1");
  const [place, setPlace] = React.useState("0");
  const [fixed, setFixed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(fixed);
    addTask(value, category, place, fixed);
    setValue("");
  };

  return (
    <form id="addTaskForm" onSubmit={handleSubmit}>
      <div id="taskOpts">
        <div>
          <label>category:</label>
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="1">family</option>
            <option value="2">carrer</option>
            <option value="3">household</option>
          </select>
        </div>
        <div>
          <label>place:</label>
          <select name="place" onChange={(e) => setPlace(e.target.value)}>
            <option value="0">week log</option>
            <option value="1">monday</option>
            <option value="2">tuesday</option>
            <option value="3">wednesday</option>
            <option value="4">thursday</option>
            <option value="5">friday</option>
            <option value="6">saturday</option>
            <option value="7">sunday</option>
          </select>
        </div>
        <label id="fixed_check" htmlFor="fixed" title="fixed">
          <input type="checkbox" name="fixed" id="fixed" onChange={(e) => setFixed(e.target.checked)}/>
          <span id="cross"></span>
        </label>
      </div>
      <div>
          <label>title:</label>
          <input
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
      </div>
      <input type="submit" value="add new task" />
    </form>
  );
}
