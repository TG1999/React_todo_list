import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>{this.props.children}</h1>
        <Link style={linkStyle} to="/">HOME</Link>|<Link style={linkStyle} to='/about'>ABOUT</Link>
      </div>
    )
  }
}
const headerStyle={
textAlign:'center',
backgroundColor:'#333',
color:'#fff',
padding:'5px'
}

const linkStyle={
  color:'#fff',
  textDecoration:'none'
}
export default header
