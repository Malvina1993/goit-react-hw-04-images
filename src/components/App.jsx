
import { useState } from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchPictures, fetchPicturesMore } from "services/api";


export const App = () => {
  

  const [images, setImages] = useState(null);
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState({
    isOpen: false,
    image: null,
    largeImage: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (data) => {
    try {
      setIsLoading(true);
    const picture = await fetchPictures(data);
    
      if (picture.hits.length === 0) {
        alert('Pictures don`t finde. Try again')
        return
      }
      
      setImages(picture.hits);
      setPage(1);
  } catch (e) {
      
      
      setError(error);
  } finally {
      setIsLoading(false);
      
  }
  }

  const hendalFormSubmit = data => {
    data ? fetchImages(data) : alert('Not search');
 
    setQuery(data);
    
  }

 const fetchImagesMore =async (data,page) => {
    try {
      setIsLoading(true)
    const picture = await fetchPicturesMore(data,page);
  
      setImages([...images, ...picture.hits])
  } catch (error) {
    
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const hendalLoadMore = () => {
    
    setPage(page + 1);
    fetchImagesMore(query, (page + 1));

  }

  

  const onOpenModal = (src, alt) => {
    
    setModal({
      isOpen: true,
      image: src,
      largeImage: alt,
    })
  }

  const onCloseModal = (e) => {
  
    if (e.currentTarget === e.target  ) {
      setModal({
        isOpen: false,
        image: null,
        largeImage: null,
      })
    }
  }

  
    return (
    <div
      style={{
        height: '100vh',
        textAlign: 'center',
        fontSize: 40,
          color: '#010101'
        
      }}
    >
      <Searchbar
        onSubmit = {hendalFormSubmit}
      />
      {images && <ImageGallery 
          images={images}
          onClick={onOpenModal}
      />}


        {images && ((!isLoading&&<Button
          onClick={hendalLoadMore}
        />)||(isLoading&&<Loader />))}  

        {modal.isOpen && <Modal
          image={modal.image}
          largeImage={modal.largeImage}
          onClick={onCloseModal}
        />}

    </div>
  );
  };
