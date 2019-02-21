import React, { Component } from 'react'

export class addTodo extends Component {
  state={
    title:''
  }
  onChange=(e)=> this.setState({[e.target.name]:e.target.value})
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input type='text' name='title' placeholder='add todo' style={{flex:10}} value={this.state.title} onChange={this.onChange}></input>
            <input type='submit' value='Submit' className='btn' style={{flex:1,float:"right"}}></input>
        </form>
      </div>
    )
  }
}

export default addTodo