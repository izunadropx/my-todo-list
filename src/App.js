import React from 'react';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo';
import RemoveTodo from './components/removeTodo';
import actions from './actions';
import {connect} from 'react-redux';
import TodoList from './components/todoList';

export const App =({submitTodo, todos}) =>(
  <div>
  <h2>My Todo List</h2>
  <AddTodo submitTodo={submitTodo}/>
  <RemoveTodo submitRemoveTodo= {() => {}}/>
  <TodoList todos = {todos} />
  </div>
);

App.proptypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text){
      dispatch(actions.submitTodo(text));
    }
  },
});



export default connect(mapStateToProps,mapDispatchToProps)(App);
