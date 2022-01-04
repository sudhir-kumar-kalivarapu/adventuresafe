import React from 'react'
import { useState } from 'react/cjs/react.development'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UsersList'
function App2() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName,uAge) => {
        setUsersList((prevUsersList) => {
            return[...prevUsersList,{name: uName ,age: uAge, id:Math.random().toString()}];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} /> 
            <UserList users={usersList}/>
        </div>
    );
};

export default App2;
