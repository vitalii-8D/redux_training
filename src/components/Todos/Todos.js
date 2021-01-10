import React, {Component} from 'react';
import {addTodo, removeTodo} from "../../actions";
import {connect} from 'react-redux';
import Todo from "../Todo/Todo";
import uniqId from 'uniqid'

import './Todos.css'

class Todos extends Component {
   state = {
      title: '',
      body: ''
   }

   onTitleChange = (event) => {
      this.setState({
         title: event.target.value
      })
   }
   onBodyChange = (event) => {
      this.setState({
         body: event.target.value
      })
   }

   addTodos = () => {
      const {title, body} = this.state;
      debugger
      if (!title || !body) return;

      const newTodo = {
         id: uniqId(),
         title,
         body
      }

      this.props.addTodo(newTodo);

      this.setState({
         body: '',
         title: ''
      })
   }

   remTodo = (todo, isTodoDone) => {
      if (!isTodoDone) return;
      return () => this.props.removeTodo(todo)
   };

   render() {
      const {todos = []} = this.props;

      return (
         <div className='form-container'>
            <form>
               <input
                  type="text"
                  onChange={this.onTitleChange}
                  value={this.state.title}
               />
               <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  onChange={this.onBodyChange}
                  value={this.state.body}
               />

               <button
                  type='button'
                  onClick={this.addTodos}>
                  Add todo
               </button>
            </form>

            <div>
               {todos.map(todo => <Todo todo={todo} removeTodo={this.remTodo} key={todo.id}/>)}
            </div>
         </div>
      );
   }
}

const mapStateToProps = (store) => {
   const {todosReducer: {todos}} = store;

   return {todos};
}
const mapDispatchToProps = {
   addTodo, removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
