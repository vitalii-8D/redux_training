import React, {Component} from 'react'
import './App.css';
import {Provider} from 'react-redux';
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Link,
} from "react-router-dom";


import {appStore} from './store/index'
import Home from "./components/Home/Home";
import Todos from "./components/Todos/Todos";

class App extends Component {

   render() {
      return (
         <Provider store={appStore}>
            <div className="App">
               <Router>
               <header className="App-header">
                  <Link to='/home'>Home</Link>
                  <Link to='todos'>Todos</Link>
               </header>



                  <Route path='/home'>
                     <Home/>
                  </Route>

                  <Route path='/todos'>
                     <Todos/>
                  </Route>

                  <Redirect from='/' to='/home'/>
               </Router>
            </div>
         </Provider>
      );
   }
}

export default App;
