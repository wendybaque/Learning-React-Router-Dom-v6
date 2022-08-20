import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Community() {
  const navigate = useNavigate();
  const [construction, setConstruction] = useState({Docs:false, Tutorials:true, Community:true});

  setTimeout(() => {
    navigate('/docs')
  }, 5000);

  return (
    <div className="container">
      {
      construction.Community ? (
        <div className="alert alert-warning m-4" role="alert">
       Community page is under construction...
        </div>) : <h1>Where to get support</h1>
      }

        <button className='btn btn-info m-4' onClick={() => navigate('/docs')}>Back to docs</button>
    </div>
  )
}

export default Community;