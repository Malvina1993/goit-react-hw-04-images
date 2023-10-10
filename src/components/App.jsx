import { Component } from "react";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import { fetchPictures, fetchPicturesMore } from "services/api";


export class App extends Component {
  state = {
    images: null,
    page: null,
    query: '',
    modal: {
      isOpen: false,
      image: null,
      largeImage: null,
    },
    isLoading: false,
    error: null,
  }

  fetchImages = async (data) => {
    try {
    this.setState({ isLoading: true })
    const picture = await fetchPictures(data);
    
      if (picture.hits.length === 0) {
        alert('Pictures don`t finde. Try again')
        return
      }
      
      this.setState({ images: picture.hits, page: 1,});
  } catch (error) {
    this.setState ({error: error.message})
  } finally {
    this.setState({ isLoading: false })
  }
  }

  hendalFormSubmit = data => {
    data ? this.fetchImages(data) : alert('Not search');
    this.setState({ query: data})
    
  }

  fetchImagesMore =async (data,page) => {
    try {
      this.setState({ isLoading: true })
    const picture = await fetchPicturesMore(data,page);
    this.setState({ images: [...this.state.images, ...picture.hits]});
    console.log([...this.state.images, ...picture.hits])
  } catch (error) {
    this.setState ({error: error.message})
    } finally {
      this.setState({ isLoading: false })
    }
  }

  hendalLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
    this.fetchImagesMore(this.state.query, (this.state.page + 1));
    console.log(this.state.page + 1)

  }

  // hendalImageClick = (data) => {
  //   console.log(data);
  // }

  onOpenModal = (src, alt) => {
    this.setState({
      modal: {
        isOpen: true,
        image: src,
        largeImage: alt,
      }
    })
  }

  onCloseModal = (e) => {
    if (e.currentTarget === e.target)
    this.setState({
      modal: {
        isOpen: false,
        image: null,
        largeImage: null,
      }
    })
  }

  // componentDidMount() {
  //   this.fetchImages();
  // }

  render() {
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
        onSubmit = {this.hendalFormSubmit}
      />
      {this.state.images&&<ImageGallery 
          images={this.state.images}
          onClick={this.onOpenModal}
      />}


        {this.state.images && ((!this.state.isLoading&&<Button
          onClick={this.hendalLoadMore}
        />)||(this.state.isLoading&&<Loader />))}  

        {this.state.modal.isOpen && <Modal
          image={ this.state.modal.image}
          largeImage={this.state.modal.largeImage}
          onClick={this.onCloseModal}
        />}

    </div>
  );
  }
};
