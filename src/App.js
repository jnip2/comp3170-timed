import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import EventNoteIcon from '@mui/icons-material/EventNote';

import Todos from "./components/Todos";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <div className='toolBarContainer'>
            <EventNoteIcon />
            <h1>To Do List</h1>
          </div>
        </Toolbar>
      </AppBar>
      <Todos />
    </div>
  );
}
