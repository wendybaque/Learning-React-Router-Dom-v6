import React from 'react';
import {useNavigate} from 'react-router-dom';

function Tutorials() {
  const navigate = useNavigate();
  return (
    <div className="container">
        <h1>Tutoriel: Intro to React</h1>
        <button className='btn btn-info m-4' onClick={() => navigate('/community')}>To community</button>
        <button className='btn btn-warning m-4' onClick={() => navigate(-1)}>To docs</button>
    </div>
  )
}

export default Tutorials;