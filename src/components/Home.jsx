import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import logo from '../assets/logo.svg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img5 from '../assets/img5.jpg';

const Home = () => {
  const fotos = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img5,
    },

  ];

  return (
    <>
      <h1 className='text-center'>
        Bienvenidos App-Love!!!
      </h1>
      <div>
        <h4>
          Encuentra tu persona favorita
          <img
            src={logo}
            className='App-logo'
            alt="App-logo"
          />
        </h4>
      </div>

      {/* Agregar Carousel */}
      <UncontrolledCarousel items={fotos} />
    </>
  );
};

export default Home;
