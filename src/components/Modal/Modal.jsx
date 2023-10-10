
import css from './Modal.module.css'
export const Modal = ({onClick, image, largeImage}) => {
  
    return (
      <div >
        <div
          className={css.overlay}
          onClick={(e) => { onClick(e) }}
          
        >
          <div className={css.modal}>
            <img
              src={image}  
              alt={largeImage}
              
            />
          </div>
        </div>
      </div>
    )
  }

