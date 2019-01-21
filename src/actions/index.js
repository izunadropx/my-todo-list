import types from "../constants";

let todoId=0;

const nextId =() => {
    todoId += 1;
    return todoId;
};

const removeID =() =>{
    return null;
}

const actions ={
    submitTodo(text) {
        return {
        type: types.SUBMIT_TODO,
        id: nextId(),
        text,
        };
    },

    removeSubmitTodo(text){
        return{
        type: types.REMOVE_SUBMIT_TODO,
        id: removeID(),
        text,
        };
    },
};

export default actions;