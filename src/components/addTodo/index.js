
import React from 'react';
import propTypes from 'prop-types';

const AddTodo = ({submitTodo}) => {
    let input;

    return(
        <div><form onSubmit={(event) => {
            event.preventDefault();
            submitTodo(input.value);
            input.value = '';
        }}
        >

<input className = "todo-input" 
    ref = {(element) => {
        input = element;
    }}
    />
    }
/>

       <button type = "submit" className= "todo-submit">
      Add todo
      </button> 
     </form>
  </div>
);
};

AddTodo.propTypes = {
    submitTodo:propTypes.func.isRequired,
};


export default AddTodo;