import React, {Component} from 'react';

import './Todo.css'

class Todo extends Component {
   state = {
      isDone: false
   }

   doneToggle = () => {
      this.setState({
         isDone: !this.state.isDone
      })
   }

   render() {
      const {todo, removeTodo} = this.props;
      const {title = '', body = ''} = todo;
      const {isDone} = this.state;

      return (
         <div className='todo-container'>
            <h3 className={isDone ? 'cross-line' : undefined}>{title}</h3>
            <div className={isDone ? 'cross-line' : undefined}>{body}</div>

            <div className='checkbox-area'>
               <div>Was it done?</div>
               <input type="checkbox" checked={isDone} onClick={this.doneToggle}/>{isDone && <p>Done!!! </p>}
            </div>
            <button onClick={removeTodo(todo, isDone)}>Remove</button>
         </div>
      );
   }
}

export default Todo;
