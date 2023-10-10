import React, { Component } from 'react'
import css from './Modal.module.css'
export default class Modal extends Component {
  render() {
    return (
      <div>
        <div
          className={css.overlay}
          onClick={(e) => {this.props.onClick(e)}}
        >
          <div className={css.modal}>
            <img
              src={this.props.image}  
              alt={this.props.largeImage}
              
            />
          </div>
        </div>
      </div>
    )
  }
}
