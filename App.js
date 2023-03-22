import './App.css';
import React, { useState, useEffect } from 'react';
import UserList from './Component/UI/User/UserList';
import AddProducts from './Component/UI/User/AddProducts';

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (productName, price, Id, option, category) => {
    setUserList((prevUserList) => {
      return [...prevUserList,
      {
        name: productName, 
        Price: price,
        id: Id,
        options: option,
        cat: category
      }
      ]
    })
  }

 
  return (
    <div className="App">
      <AddProducts onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
