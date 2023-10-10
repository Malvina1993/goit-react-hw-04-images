import React, { Component } from 'react'
import css from './ImageGalleruItem.module.css'

export default class ImageGalleryItem extends Component {


  render() {
    return (
      <li className={css.galleryItem} >
        <img 
          src={this.props.image}  
          alt={this.props.largeImage} 
          className={ css.galleryImage}
          onClick={() => { this.props.onClick(this.props.image, this.props.largeImage) }}
        />
      </li>
    )
  }
}
