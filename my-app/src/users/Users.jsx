import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(resp.data);
  }
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
        {users.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)}
    </div>
  );
};

export default Users;