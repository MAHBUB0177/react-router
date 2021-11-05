import React, { useEffect, useState } from 'react';
import UserDetails from '../UserDetails/UserDetails';


const User = () => {
 const [user, SetUser] = useState([]);

 useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => SetUser(data))

 }, []);

 return (
  <div>
   {
    user.map(us => <UserDetails user={us} />)
   }
     
  </div>
 );
};

export default User;