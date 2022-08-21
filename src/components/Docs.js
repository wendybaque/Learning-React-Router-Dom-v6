import React from 'react';
import {useNavigate, Link, Outlet} from 'react-router-dom';
// Outlet affiche le composant requis aux focntions des routes passées. 
function Docs() {
  const navigate = useNavigate();

  return (
    <div className="container">
        <h1>Getting Started</h1>
        <nav className="nav">
          <Link className="nav-link active" aria-current="page" to="installation" alt="lien redirection">Installation</Link>
          <Link className="nav-link" to="fondamentaux" alt="lien redirection">Fondamentaux</Link>
          <Link className="nav-link" to="hooks" alt="lien redirection">Hooks</Link>
          <Link className="nav-link disabled" to="*" alt="lien redirection">Disabled/Error 404</Link>
        </nav>
        <Outlet />
        <button className='btn btn-info m-4' onClick={() => navigate('/tutorial', {replace:true})}>To tutorials</button>
    </div>
  )
}

export default Docs;