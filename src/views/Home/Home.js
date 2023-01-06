import React, { useState, useEffect } from "react";
import swal from 'sweetalert';

import "./Home.css";
import Note from "./../../components/Note/Note";

function Home() {
  const [notes, setNotes] = useState([
    {
      title: "Note ",
      content: "You can add more notes to this list ",
    },
   
  ]);

  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  function addNote(){
    const newNote={
        "title":title,
        "content":content
    }
    // const temp =notes;
    // temp.push(newNote)
    // setNotes(temp);
    if (title===""|| content==="")
    {
        swal({
            title:"Error",
            text:"please fill all the fields ",
            icon:"error",
           })
           return;
    }

   setNotes([...notes,newNote])

   swal({
    title:"note added",
    text:"your note has been added to the list ",
    icon:"success",
   })

   setTitle("")
   setContent("")
  }

  return (
    <div>
      <div className="app-title-container">
        <h1 className="app-title"> My Notes </h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="notes-container">
            {notes.map((note, index) => {
              return <Note Title={note.title} Content={note.content} />;
            })}
          </div>
        </div>

        <div className="col-md-6">
            <div className="note-editor-container">
                <h3 className="text-center"> Add Note</h3>
                <form>
                    <div>
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-4"placeholder="Note-Title"/>
                    </div>

                    <div>
                        <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}}className="form-control mt-4"placeholder="Note-Description"/>
                    </div>

                    <div className="d-flex justify-content-center"> 
                        <button type="button" className="btn btn-primary mt-4 "onClick={addNote} >Add Note </button>
                    </div>
                </form>
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;
