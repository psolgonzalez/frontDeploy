import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0, width: '100%' }}>
      <MDBContainer className='pt-4'>
        {/* Contenido del footer */}
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
        App-Love!!
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;

