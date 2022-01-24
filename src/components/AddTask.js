import React, { useState, useEffect } from "react";

const AddTask = ({ onAdd, tasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  /////////////////////////////////////////////
  //start remove dublication

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetechTasks();
      // console.log(tasksFromServer);

      //setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // fetch tasks from json

  const fetechTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  ///////finising remove dublication data

  const onSubmit = (e) => {
    e.preventDefault();

    // {
    //   tasks.map((task) => {
    //     //console.log(task.text);
    //   });
    // }

    // {
    //   tasksFromServer.map((task) => {
    //     task.text;
    //   });
    // }

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    //

    ///
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label> Dat</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label> Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
