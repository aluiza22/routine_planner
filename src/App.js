import React from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 0,
      title: "Call family",
      cat: 1,
      place: 0,
      isFixed: true,
      isDone: false
    },
    {
      id: 1,
      title: "Study React",
      cat: 2,
      place: 0,
      isFixed: true,
      isDone: true
    },
    {
      id: 2,
      title: "Work on portfolio",
      cat: 2,
      place: 0,
      isFixed: true,
      isDone: false
    }
  ]);

  const doTask = (index) => {
    const newTasks = [...tasks];
    newTasks.filter((task) => task.id === index).isDone = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice({ id: index }, 1);
    setTasks(newTasks);
  };

  const addTask = (text, category, place) => {
    let newId = Math.max(...tasks.map((task) => task.id)) + 1;
    const newTasks = [
      ...tasks,
      {
        id: newId,
        title: text,
        cat: category,
        place: place,
        isFixed: true,
        isDone: false
      }
    ];
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <>
      <Header />
      <main id="week">
        <section className="day" id="monday" title="monday">
          {tasks
            .filter((task) => task.place === 1)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="tuesday" title="tuesday">
          {tasks
            .filter((task) => task.place === 2)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="wednesday" title="wednesday">
          {tasks
            .filter((task) => task.place === 3)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="thursday" title="thursday">
          {tasks
            .filter((task) => task.place === 4)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="friday" title="friday">
          {tasks
            .filter((task) => task.place === 5)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="saturday" title="saturday">
          {tasks
            .filter((task) => task.place === 6)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className="day" id="sunday" title="sunday">
          {tasks
            .filter((task) => task.place === 7)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </section>
      </main>
      <aside title="week log">
        <div id="log_tasks">
          {tasks
            .filter((task) => task.place === 0)
            .map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                cat={task.cat}
                doTask={doTask}
                isDone={task.isDone}
                removeTask={removeTask}
              />
            ))}
        </div>
        <AddTask addTask={addTask} />
      </aside>
      <footer>
        <p>
          Icons made by
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </>
  );
}
