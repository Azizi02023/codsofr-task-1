import React, { Component } from 'react'
import './Destination.css';
class DestinationData extends Component{
  render(){
    return (
        <div className={this.props.className}>
        <div className='des-text'>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className='i-des'>
          <img alt='ph-des' src={this.props.img1} />
          <img alt='ph-desc' src={this.props.img2} />
        </div>
      </div>
      )
    } 
  }
 

export default DestinationData