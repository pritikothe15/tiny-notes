import React from 'react'
import "./Note.css"

function Note({Title,Content}) {
  return (
    <div className='card-note'>
        <h6 className="card-note-title">{Title}</h6>
        <p className="card-note-content">{Content}</p>
    </div>
  )
}

export default Note