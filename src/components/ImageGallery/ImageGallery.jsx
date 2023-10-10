import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import css from './ImageGallery.module.css'

export default class ImageGallery extends Component {

  render() {
    return (
       <ul className= {css.gallery}>
        {this.props.images.map(image => {
          return (
            <ImageGalleryItem
              key={`${image.id}`}
              image={image.webformatURL}
              largeImage={image.largeImageURL}
              onClick = {this.props.onClick}
            />
          )
        })}
      </ul>
    )
  }
}
