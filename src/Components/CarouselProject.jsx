import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselProject extends Component {
  render() {
    return (
      <>
        <hr className="text-white" />
        <h1 className="header-sections m-2">Favorites Projects: </h1>
        <Carousel className="Carousel" variant="dark">
          <Carousel.Item interval={ 5000 } variant="dark">
            <img
              className="d-block w-100"
              src="https://caixadeseries.com/wp-content/uploads/2019/09/giphy.gif"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="header-carousel text-white">
                Neste Carausel você verá meu Projetos Favoritos
              </h2>
              <p className="text-white fs-5">OBS: Amo Broklyn 99 💙</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <img
              className="d-block w-100"
              src="./ArquivosPort/FavoriteProjects/ShopCart.gif"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className="header-carousel text-dark text-end">Shop Cart</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <img
              className="d-block w-100"
              src="./ArquivosPort/FavoriteProjects/PixelArt.gif"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="header-carousel text-dark text-end">Pixel Art</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <img
              className="d-block w-100"
              src="./ArquivosPort/FavoriteProjects/ToDoList.gif"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="header-carousel text-dark text-end">To Do List</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <img
              className="d-block w-100"
              src="./ArquivosPort/FavoriteProjects/TrybeWart.gif"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="header-carousel text-dark text-end">TrybeWart</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={ 5000 }>
            <img
              className="d-block w-100"
              src="./ArquivosPort/FavoriteProjects/ZooFunctions.gif"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className="header-carousel text-white text-end">Zoo Fuctions</h2>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </>
    );
  }
}

export default CarouselProject;
