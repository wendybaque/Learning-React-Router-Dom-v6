import React from 'react'

const NoteUSers = () => {
    const sayHello = () => alert ("Hello world !");
  return (
    <div>
        <button onClick={sayHello} className="btn btn-danger m-4" >Hello user !</button>
    </div>
  )
}

export default NoteUSers
