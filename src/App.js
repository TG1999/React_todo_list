import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddTodo from './components/layout/addTodo'
import uuid from 'uuid'
import About from './components/pages/about'
class App extends Component{
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'abcd',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'efgh',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'ijkl',
        completed:false
      }
    ]
  }
  markComplete=(id)=>{
    this.setState({
      todos:this.state.todos.map((todo)=>{
        if(todo.id===id){
          todo.completed=!todo.completed
        }
      return todo
      })
    })
  }
  //Delete Todo
  delTodo=(id)=>{
    console.log(id);
    this.setState({
      todos:[...this.state.todos.filter((todo)=>{
        return(todo.id!== id)
      })]
    })
  }
  addTodo=(title)=>{
    const js={
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({
      todos:[...this.state.todos,js]
    })
    console.log(this.state)
  }
  render(){
    console.log(this.state.todos);
    return(
      <Router>
      <div className='App'>
      <div className='container'>
      <Header>Todo List</Header>
      <Route exact path='/' render={props => (
        <React.Fragment>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
        </React.Fragment>
      )} />
      <Route path='/about' component={About}></Route>
      </div>
      </div>
      </Router>
    )
  }
}

export default App;
