export const incNumber = (num) =>  {return {type: 'INCREMENT', payload: num}}
export const decNumber = (num) => {return { type: 'DECREMENT', payload:num}}
export const divNumber = (num) => {return { type: 'DIVIDE', payload:num}}
export const multNumber = (num) => {return { type: 'MULTIPLY', payload:num}}


//todo
export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
export const removeTodo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}