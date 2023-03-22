import React, { useState } from 'react'
import Card from '../Card';
import classes from './UserList.module.css'

const UserList = props => {
   const [listed, setList] = useState(props.users)

    const deleteHandler =(id)=>{
        
        const newList = props.users.filter((givenId)=>{givenId !== id})
        console.log(newList)
        setList((prev) => {
           return [...prev, newList]
          
        })
        }

    return (
        <Card className={classes.list}>
             <ul>
            {props.users.map((user) => (
               <li key={user.id} >
                    {user.name} Rs:{user.Price} {user.options} 
                    <button onClick = {deleteHandler}>Delete</button>
                </li>
            ))}
        </ul>
        </Card>
    )
}
export default UserList; 