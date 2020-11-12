import React from "react";

export default function AddTask({ addTask }) {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("1");
  const [place, setPlace] = React.useState("8");
  const [fixed, setFixed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert('Task title can\'t be empty ):');
      return
    };
    addTask(value, category, place, fixed);
    setValue("");
  };

  return (
    <form id="addTaskForm" onSubmit={handleSubmit}>
      <div>
          <label>title:</label>
          <input
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ex: 'plan trip'"
          />
      </div>

      <div id="taskOpts">
        <div>
          <label>category:</label>
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="1">personal</option>
            <option value="2">family</option>
            <option value="3">work</option>
            <option value="4">health</option>
            <option value="5">household</option>
            <option value="6">carrer</option>
            <option value="7">school</option>
            <option value="8">random</option>
          </select>
        </div>
        <div>
          <label>place:</label>
          <select name="place" onChange={(e) => setPlace(e.target.value)}>
            <option value="8">week log</option>
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
      
      <input type="submit" value="add new task" />
    </form>
  );
}
