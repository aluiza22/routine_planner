import React from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./styles.css";

export default function App() {
  // creating the sample tasks for first time use
  const staticTasks = [
    {
      id: "task_0",
      title: "Example task",
      cat: 1,
      place: 8,
      isFixed: false,
      isDone: false
    },
    {
      id: "task_1",
      title: "Reset persistent task",
      cat: 2,
      place: 8,
      isFixed: true,
      isDone: false
    },
    {
      id: "task_2",
      title: "Completed task",
      cat: 2,
      place: 8,
      isFixed: false,
      isDone: true
    }
  ];
  // if not first use, loads user's tasks
  const store = require('store');
  const savedTasks = store.get('tasks') && store.get('tasks').length ? store.get('tasks') : staticTasks;
  // gets today day
  const date = new Date();
  const isToday = date.getDay();

  // sets tasks state 
  const [tasks, setTasks] = React.useState(savedTasks);
  // sets local storage updates
  React.useEffect(() => {
    store.set('tasks', tasks);
  }, [tasks]);   

  // dark mode setting
  if (store.get('dark') && store.get('dark') === 'on') {
    document.body.classList.add("dark-theme");
  }
  
  // sets isDone to true/false
  const doTask = (index) => {    
    const newTasks = [...tasks];
    let chosenTask = newTasks.filter(task => task.id === index);
    chosenTask[0]['isDone'] = chosenTask[0]['isDone'] ? false : true;
    setTasks(newTasks);
  };

  // removes item from tasks
  const removeTask = (index) => {
    const newTasks = [...tasks];
    let chosenTask = newTasks.findIndex(task => task.id === index);
    newTasks.splice(chosenTask, 1);
    setTasks(newTasks);
  };

  const addTask = (text, category, place, fixed) => {
    // finds next id
    let numId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id.slice(5))) + 1 : 0;
    let newId = "task_"+ numId;
    // adds item to taks
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

  // new tasks keeping only the fixed ones and setting them to not done
  const resetWeek = () => {
    const newTasks = [...tasks];
    let fixedTasks = newTasks.filter(task => task.isFixed === true);
    fixedTasks.map(task => {if (task.isDone === true) { task.isDone = false ;}});    
    setTasks(fixedTasks);
  };

  const reorder = (tasklist, oldIndex, newIndex) => {
    const changed = tasklist.splice(oldIndex,oldIndex+1);
    const before = tasklist.slice(0,newIndex);
    const after = tasklist.slice(newIndex);
    setTasks(before.concat(changed, after));
  };

  const onDragEnd = result => {
    const {destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    const oldList = +source.droppableId;
    const newList = +destination.droppableId;
    const oldOrder = +source.index;
    const newOrder = +destination.index;
    
    if (oldList !== newList) { 
      const newTasks = [...tasks];
      let movedTask = newTasks.filter(task => task.id === draggableId);
      movedTask[0]['place'] = newList;
      if (draggableId == oldOrder) {
        reorder([...newTasks], oldOrder, newOrder);
      } else {
        setTasks(newTasks);
      }
    } else if (oldOrder !== newOrder) {
      reorder([...tasks], oldOrder, newOrder);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>      
      <Header resetWeek={resetWeek} />
      <main id="week">
        <Droppable droppableId="1" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 1 ? " today":"")} id="monday" title="monday">
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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable key="2" droppableId="2" >
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 2 ? " today":"")} id="tuesday" title="tuesday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <Droppable key="3" droppableId="3" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 3 ? " today":"")} id="wednesday" title="wednesday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <Droppable key="4" droppableId="4" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 4 ? " today":"")} id="thursday" title="thursday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <Droppable key="5" droppableId="5" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 5 ? " today":"")} id="friday" title="friday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <Droppable key="6" droppableId="6" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 6 ? " today":"")} id="saturday" title="saturday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <Droppable key="7" droppableId="7" >
          {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={"day"+ (isToday === 0 ? " today":"")} id="sunday" title="sunday">
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
      </main>
      <aside title="week log">
        <Droppable key="8" droppableId="8" >
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} id="log_tasks">
            {tasks
            .filter((task) => task.place === 8)
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
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <AddTask addTask={addTask} />
      </aside>
      <footer>
        <p>
          Icons made by <a href="http://www.freepik.com/" title="Freepik">
            Freepik 
          </a> from <a href="https://www.flaticon.com/" title="Flaticon">
             www.flaticon.com
          </a>
        </p>
      </footer>
    </DragDropContext>
  );
}
