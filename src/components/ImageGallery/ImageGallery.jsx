import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

import css from './ImageGallery.module.css'

export const ImageGallery = ({images, onClick})=> {

 
    return (
       <ul className= {css.gallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={`${image.id}`}
              image={image.webformatURL}
              largeImage={image.largeImageURL}
              onClick = {onClick}
            />
          )
        })}
      </ul>
    )
  }

