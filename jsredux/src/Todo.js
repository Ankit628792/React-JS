import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from './actions/index'


function Todo() {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    //   const listItem = JSON.parse(localStorage.getItem('list'));            



    return (
        <>
            <div className="child__div text-center py-5 container d-flex flex-column align-items-center">
                <figure>
                    <figcaption className="display-5 fw-bold">Add Your List Here ✌</figcaption>
                </figure>

                <div className="add__items">
                    <input type="text" className="px-4 py-2 m-2" placeholder="✍ Enter your list item" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" title="Add Todo" onClick={() => {
                        dispatch(addTodo(inputData));
                        setInputData('')
                    }}
                        width="26" height="26" fill="#0d6efd" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
                    </svg>

                </div>

                <div className="showItems">
                    {
                        list.map((element) => {
                            return (
                                <div className="eachItem d-flex bg-light my-2 justify-content-center align-items-center px-4 p-2" key={element.id}>
                                    <p className="mx-4 lead fw-normal text-wrap" style={{maxWidth: '50vw'}}>{element.data}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                     title="Delete Todo" onClick={() => {
                                        dispatch(deleteTodo(element.id));
                                    }}
                                    width="26" height="26" fill="#dc3545" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                                    </svg>
                                  
                                </div>
                            )
                        })
                    }
                </div>

                <div className="showItems">
                    <button className="btn btn-outline-danger my-3" data-sm-link-text="Remove Todo" onClick={() => dispatch(removeTodo())}><span>Remove All</span></button>
                </div>

            </div>
        </>
    )
}

export default Todo
