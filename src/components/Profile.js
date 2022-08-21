import React , {useState, useEffect}from 'react';
import { unstable_HistoryRouter, useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const params = useParams();
    const [data, setData] = useState({});
    
    useEffect(() => {
        let payload = {
            token: "pFsSsOKUSmNIuAX3wkbc3g",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 10
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp => {
            setData(resp.data[params.profileId])
        });
        
    }, [params.profileId]);

    const {email, name, phone} = data;

  return (
    <div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'><strong>ID Utilisateur : </strong>{name}</li>
        <li className='list-group-item'><strong>E-mail : </strong>{email}</li>
        <li className='list-group-item'><strong>Téléphone : </strong>{phone}</li>  
    </ul>
    </div>
  )
}

export default Profile

