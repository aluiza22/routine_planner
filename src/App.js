import React from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./styles.css";

export default function App() {
  const staticTasks = [
    {
      id: 0,
      title: "Example task",
      cat: 1,
      place: 0,
      isFixed: false,
      isDone: false
    },
    {
      id: 1,
      title: "Reset persistent task",
      cat: 2,
      place: 0,
      isFixed: true,
      isDone: false
    },
    {
      id: 2,
      title: "Completed task",
      cat: 2,
      place: 0,
      isFixed: false,
      isDone: true
    }
  ];
  const store = require('store');
  const savedTasks = store.get('tasks') && store.get('tasks').length ? store.get('tasks') : staticTasks;
  const date = new Date();
  const isToday = date.getDay();

  const [tasks, setTasks] = React.useState(savedTasks);
  React.useEffect(() => {
    store.set('tasks', tasks);
  }, [tasks]);   

  if (store.get('dark') && store.get('dark') === 'on') {
    document.body.classList.add("dark-theme");
  }

  const doTask = (index) => {    
    const newTasks = [...tasks];
    let chosenTask = newTasks.filter(task => task.id === index);
    chosenTask[0]['isDone'] = chosenTask[0]['isDone'] ? false : true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    let chosenTask = newTasks.findIndex(task => task.id === index);
    newTasks.splice(chosenTask, 1);
    setTasks(newTasks);
  };

  const addTask = (text, category, place, fixed) => {
    let newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0;
    const newTasks = [
      ...tasks,
      {
        id: newId,
        title: text,
        cat: parseInt(category),
        place: parseInt(place),
        isFixed: fixed,
        isDone: false
      }
    ];
    setTasks(newTasks);
  };

  const resetWeek = () => {
    const newTasks = [...tasks];
    let fixedTasks = newTasks.filter(task => task.isFixed === true);
    fixedTasks.map(task => {if (task.isDone === true) { task.isDone = false ;}});    
    setTasks(fixedTasks);
  };

  return (
    <>
      <Header resetWeek={resetWeek} />
      <main id="week">
        <section className={"day"+ (isToday === 1 ? " today":"")} id="monday" title="monday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 2 ? " today":"")} id="tuesday" title="tuesday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 3 ? " today":"")} id="wednesday" title="wednesday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 4 ? " today":"")} id="thursday" title="thursday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 5 ? " today":"")} id="friday" title="friday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 6 ? " today":"")} id="saturday" title="saturday">
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
                isFixed={task.isFixed}
                removeTask={removeTask}
              />
            ))}
        </section>
        <section className={"day"+ (isToday === 0 ? " today":"")} id="sunday" title="sunday">
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
                isFixed={task.isFixed}
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
                isFixed={task.isFixed}
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
