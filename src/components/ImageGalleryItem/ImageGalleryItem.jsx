
import css from './ImageGalleruItem.module.css'

export const ImageGalleryItem = ({image,largeImage,onClick})=> {



    return (
      <li className={css.galleryItem} >
        <img 
          src={image}  
          alt={largeImage} 
          className={ css.galleryImage}
          onClick={() => { onClick(image, largeImage) }}
        />
      </li>
    )
  }

