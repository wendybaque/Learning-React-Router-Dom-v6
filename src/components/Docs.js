import React from 'react';
import {useNavigate} from 'react-router-dom';

function Docs() {
  const navigate = useNavigate();

  return (
    <div className="container">
        <h1>Getting Started</h1>
        <button className='btn btn-info m-4' onClick={() => navigate('/tutorial', {replace:true})}>To tutorials</button>
    </div>
  )
}

export default Docs;