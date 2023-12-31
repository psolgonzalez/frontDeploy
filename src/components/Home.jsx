import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import '../css/Home.css'; 

const Home = () => {
  const fotos1 = [
    { src: img1, altText: 'Slide 1' },
    { src: img2, altText: 'Slide 2' },
    { src: img3, altText: 'Slide 3' },
  ];

  const fotos2 = [
    { src: img4, altText: 'Slide 4' },
    { src: img5, altText: 'Slide 5' },
    { src: img6, altText: 'Slide 6' },
  ];

  const fotos3 = [
    { src: img7, altText: 'Slide 7' },
    { src: img8, altText: 'Slide 8' },
    { src: img9, altText: 'Slide 9' },
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

      {/* Agregar carruseles */}
      <Row>
        <Col>
          <UncontrolledCarousel items={fotos1} className="carousel-image" />
        </Col>
        <Col>
          <UncontrolledCarousel items={fotos2} className="carousel-image" />
        </Col>
        <Col>
          <UncontrolledCarousel items={fotos3} className="carousel-image" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
