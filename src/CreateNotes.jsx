import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
const CreateNotes = (props) => {
  const [note, setNote] = useState({
    //Note which the user want to save...
    title: "",
    content: "",
  });
  const inputTitle = (e) => {
    //Note title changes simulataneously in changing in title field...
    setNote({ title: e.target.value, content: note.content });
  };
  const inputNote = (e) => {
    //Note content....
    setNote({ title: note.title, content: e.target.value });
  };
  const Add = (e) => {
    //Add note to note array...
    e.preventDefault();
    if (note.title == "" || note.content == "") {
      alert("Enter Both title and content...");
      return;
    }
    props.add(note); //call parent add func...
    setNote({ title: "", content: "" });
  };
  return (
    //form which is display on screen...
    <form onSubmit={Add}>
      <Paper
        varient="outlined"
        color="primary"
        sx={{
          margin: "auto",
          width: "300px",
          marginTop: "3%",
          padding: "1%",
        }}
        elevation={10}
      >
        <TextField
          id="standard-basic"
          label="Input Title"
          variant="standard"
          color="success"
          size="large"
          fontSize="large"
          value={note.title}
          onChange={inputTitle}
          sx={{
            margin: "auto",
            width: "100%",
            marginTop: "1%",
            marginBottom: "1%",
          }}
        />
        <TextField
          id="standard-basic"
          label="Input Notes"
          variant="standard"
          color="success"
          value={note.content}
          onChange={inputNote}
          sx={{
            margin: "auto",
            width: "100%",
            marginTop: "5%",
            marginBottom: "2%",
          }}
          multiline
        />
        <span
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton type="submit">
            <AddCircleIcon
              fontSize="large"
              sx={{
                color: "deeppink",
                "&:hover": { color: "green" },
              }}
            />
          </IconButton>
        </span>
      </Paper>
    </form>
  );
};
export default CreateNotes;
