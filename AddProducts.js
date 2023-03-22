import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Button from '../Button'
import Card from '../Card'

// import ItemCategory from '../Category/ItemCategory' 


const AddProducts = props => {
    const [selectedValue, setSelectedValue] = useState('Id-1')
    const [categorySelected, setCategorySelected] = useState('1')
    const nameInputRef = useRef();
    const priceInputRef = useRef();

    const selectedValueHandler = (event) => {
        // console.log(event.target.value)
        setSelectedValue(event.target.value)
    }
    const categoryHandler = (event)=>{
        // console.log(event.target.value)
        setCategorySelected(event.target.value)
    }
   
     const addUserHandler = (event) => {
        event.preventDefault();
        const nameRef = nameInputRef.current.value
        const priceRef = priceInputRef.current.value
        const id = Math.random().toString()
        const data = nameRef + priceRef+ id + selectedValue + categorySelected
        localStorage.setItem(id, JSON.stringify(data));

// localStorage.setItem(id,{ nameRef, ageRef, selectedValue, categorySelected} )
        props.onAddUser(nameRef, priceRef,id, selectedValue, categorySelected)
        nameInputRef.current.value = "";
        priceInputRef.current.value = "";
    }
    return (
        <React.Fragment>

            <Card >
                <form onSubmit={addUserHandler} className={classes.formControl}>
                    <label htmlFor="username">Product Name</label>
                    <input id="username" type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Selling Price</label>
                    <input id="age" type="number"
                        ref={priceInputRef}
                    />
                    <label htmlFor='id' >Product Id</label>
                    <select id='id' value={selectedValue} onChange={selectedValueHandler} >
                        <option value='Id-1'>1</option>
                        <option value='Id-2'>2</option>
                        <option value='Id-3'>3</option>
                    </select>
                    <label htmlFor='id' >Choose a Category</label>
                    <select id='id' value={categorySelected} onChange={categoryHandler} >
                        <option value='Electronic Items'>Electronic Items</option>
                        <option value='Foods Items'>Foods Items</option>
                        <option value='SkinCare Items'>SkinCare Items</option>
                    </select>
                    <Button type="submit">Add Product</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default AddProducts;