import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { nanoid } from "nanoid";

import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

export default function TodoForm({ addTask, editTask, editingTask }) {
  const [hmwrk, setHmwrk] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setHmwrk(editingTask.hmwrk);
      setIsEditing(true);
    } else {
      setHmwrk("");
      setIsEditing(false);
    }
  }, [editingTask]);

  function getCurrentTime() {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date().toLocaleTimeString(undefined, options);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      hmwrk,
      id: isEditing ? editingTask.id : nanoid(),
      time: getCurrentTime(),
    };

    if (isEditing) {
      editTask(editingTask.id, newTask);
    } else {
      addTask(newTask);
    }

    setHmwrk("");
    setIsEditing(false);
  }

  function handleChange(e) {
    setHmwrk(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          {isEditing ? "Edit Task:" : "Add Task:"}
          <TextField variant="standard" value={hmwrk} type="text" onChange={handleChange} />
        </label>
        <Button type="submit" variant="outlined" endIcon={<AddIcon />}>Add</Button>
      </form>
    </div>
  );
}
