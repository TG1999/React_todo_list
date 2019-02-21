import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Todoitem extends Component {
  // getStyle=()=>{
  //   if(this.props.todo.completed)
  //   {
  //     return{
  //       textDecoration:'line-through'
  //     }
  //   }
  //   else{
  //     return {
  //       textDecoration:'none'
  //     }
  //   }
  // }
  getStyle=()=>{
    return{
      backgroundColor:'#D3D3D3',
      borderBottom:'1px black solid',
      padding:'2px',
      textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }
  markComplete=(e)=>{
    console.log(this.props)
  }
  render() {
    const {id,title}=this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}></input>
           {title} 
           <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}
Todoitem.propTypes={
  todo: PropTypes.object.isRequired
}
const btnStyle={
  backgroundColor:'#FF0000',
  color:'white',
  border:'none',
  padding:'5px 10px',
  borderRadius:'50%',
  float:'right'
}
export default Todoitem
