import React,{useState, useEffect} from 'react'

import "./Home.css"
import Navbar from "./../../components/Navbar/Navbar"
import Note from "./../../components/Note/Note"

function Home() {
    const [notes, setNotes] =useState([
        {
            Title: "Note 1",
            Content :"This is Note 1 "
        },
        {
            Title: "Note 2",
            Content :"This is Note 2 "
        },
        {
            Title: "Note 3",
            Content :"This is Note 3 "
        },
        {
            Title: "Note 4",
            Content :"This is Note 4 "
        },
        // {
        //     Title: "Note 5",
        //     Content :"This is Note 5 "
        // },
        // {
        //     Title: "Note 6",
        //     Content :"This is Note 6 "
        // },

    ])
  return (
    <div>
        <Navbar/> 
        <div className='app-title-container'> 
        <h1 className='app-title'> My Notes </h1>
        </div>

        <div className='notes-container'> 
           {
            notes.map((note,index)=>{
              return(
                <Note Title = {note.Title} Content= {note.Content} />
              )
               
            })
           }
        </div>
    </div>
  )
}

export default Home