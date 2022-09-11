import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateNotes from "./CreateNotes.jsx";
import NoteDisplay from "./NoteDisplay.jsx";
import Footer from "./footer.jsx";

const App = () => {
  useEffect(() => {
    document.title = "AtrangiNotes";
  }, []);
  const arr = [
    {
      title: "Title",
      content: "Description...",
    },
    {
      title: "About Me",
      content:
        "Hello, I am Aayush Kasera from Phulera. Currently pursuing Engineering in Computer Science. I have explored around many fields like Game Devlopment, 3D Modelling, GUI application making in java, Python etc.. Now I am working on web Devlopment Mern Stack.",
    },
  ];
  const initial = () => {
    // Initialize array with local Storage
    let a = JSON.parse(localStorage.getItem("notearray"));
    if (a) {
      return a;
    } else {
      return arr;
    }
  };
  const [notearray, setnotearray] = useState(initial);
  useEffect(() => {
    localStorage.setItem("notearray", JSON.stringify(notearray));
  }, [notearray]);

  const addfunc = (item) => {
    setnotearray([...notearray, item]);
  };

  const deletefunc = (ind) => {
    setnotearray(
      notearray.filter((val, i) => {
        if (i != ind) {
          return val;
        }
      })
    );
  };
  return (
    <>
      <Header />
      <CreateNotes add={addfunc} />
      <NoteDisplay notearray={notearray} deleteitem={deletefunc} />
      <Footer />
    </>
  );
};
export default App;
