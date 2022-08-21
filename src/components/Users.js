import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
  const users = ['Jean-Louis', "Louis", "Corinne", "Richard", 'Lambert', 'François'];
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('data') || '';

  const handleSearch = (e) => {
    const data = e.target.value;
    if(data){
      setSearchParams({data})
    } else {
      setSearchParams({})
    }
  }

  const filterUsers = users.filter((user) => user.includes(searchName));

  return (
    <div className='container mt-3'>
      <h1>Profil</h1>
      <Outlet />
      <hr/>
      {/* Filtre le nom du user par caractère saisi dans l'input : */}
      {/* Attention à la casse ! */}
      <input type="text" value={searchName} onChange={handleSearch}></input>
      <ul>
        {filterUsers.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
    </div>
  )
}

export default Users;
