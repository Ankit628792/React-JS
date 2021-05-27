import React, { useState } from 'react'
import "./Todo.css"
import List from "./List";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


function Todo() {

    const [inputList, setinputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value);
    }

    const addItem = (event) => {
        event.preventDefault();
        setItems((oldItems) => {
            if (inputList !== '') {
                return [...oldItems, inputList]
            }
            else {
                alert("Enter an item")
            }
        })
        setinputList('');
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElement, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className="todo">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input
                    type="item"
                    name="item"
                    placeholder="Add Item"
                    value={inputList}
                    onChange={itemEvent}
                />
                <Tooltip title="Add Item">
                    <Button variant="contained" style={{ backgroundColor: 'white', marginLeft: '10px' }}>
                        <AddIcon onClick={addItem} />
                    </Button>
                </Tooltip>

                <br />
                <ol>
                    {
                        Items.map((item, index) => {
                            return <List key={index} id={index} item={item} onSelect={deleteItem} />
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Todo
