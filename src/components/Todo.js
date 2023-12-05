import React, { useState } from "react";
import { Button } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import "../styles.css"

export default function Todo({
  hmwrk,
  remove,
  startEditing,
  editingTask,
  editTask,
  cancelEditing,
}) {
  const [status, setStatus] = useState(false);
  const [editText, setEditText] = useState(hmwrk.hmwrk);

  const handleCheckbox = () => {
    setStatus(!status);
  };

  const handleEdit = () => {
    startEditing(hmwrk.id);
  };

  const handleSaveEdit = () => {
    editTask(hmwrk.id, editText);
  };

  const handleCancelEdit = () => {
    cancelEditing();
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  const getTimeString = () => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date().toLocaleTimeString(undefined, options);
  };

  return (
    <div className="taskContainer">
      <div className="taskInfo">
        <Checkbox size='small' checked={status} onChange={handleCheckbox} />
        {editingTask === hmwrk.id ? (
          <div className="editBox">
            <TextField
              value={editText}
              onChange={handleInputChange}
              variant="standard"
            />
            <div className="editButtonsContainer">
              <Button onClick={handleSaveEdit} variant='outlined' color='success' >Save</Button>
              <Button onClick={handleCancelEdit} variant='outlined'>Cancel</Button>
            </div>
          </div>
        ) : (
          <>
            <p className={status ? "done" : "notDone"}>{hmwrk.hmwrk}</p>
            <p className="time">Time Added: {hmwrk.time}</p>
            {status && <p className="checkboxTime">Completed: {getTimeString()}</p>}
          </>
        )}
      </div>
      <div className="editDeleteContainer">
        <Button onClick={handleEdit} variant='contained'>Edit</Button>
        <Button onClick={() => remove(hmwrk)} variant='contained' color='error' startIcon={<DeleteIcon />}>Delete</Button>
      </div>
    </div>
  );
}
