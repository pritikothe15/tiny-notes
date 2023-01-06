import React from 'react'
import swal from "sweetalert";
import "./Note.css"


function Note({Title,Content,noteIndex})
 {
    function deleteNote(){
      const notes = localStorage.getItem("notes");
      if(notes)
      {
        const temp = JSON.parse(notes);
        temp.splice(noteIndex, 1);
        localStorage.setItem("notes", JSON.stringify(temp));
      }
  
      swal({
        title: "Deleted!",
        text: "Your note has been deleted",
        icon: "success",
      })
  
      // triggers useEffect in Home.js
      window.location.reload();
  
    }
  

  return (
    <div className='card-note'>
        <h6 className="card-note-title">{noteIndex}-{Title}</h6>
        <p className="card-note-content">{Content}</p>
        <span className='delete-button 'onClick={deleteNote}>❌ </span>
    </div>
  )
 }


export default Note