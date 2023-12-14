import Form from "react-bootstrap/Form";
import Imagen from '../components/Imagen'
import { useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';

function Formulario() {

  const [ nombre, setNombre ] = useState('');
  const [apellido, setApellido ] = useState('');
  const[dni, setDni ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

        console.log(`Nombre: ${nombre}`);
        console.log(`Apellido: ${apellido}`);
        console.log(`Dni: ${dni}`);

    try {
      const enviarDatos = await axios.post('https://backdeploy-production.up.railway.app/users/crear', {
      nombre,
      apellido,
      dni
      })
      console.log('Respuesta: ', enviarDatos.data);
      
        setNombre('');
        setApellido('');
        setDni('');

    } catch (error) {
      console.log(`Hay un error en ${error}`);
    }
  }


  return (
    <>
      <h1 className="container mt-5 text-center">Registro</h1>
      <div className="container mt-5 d-flex">
      <Form onSubmit={ handleSubmit }>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            type="text" 
            value={ nombre } 
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            value={ apellido } 
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Ingresa tu apellido" 
            required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>DNI:</Form.Label>
            <Form.Control 
            type="number" 
            value={ dni } 
            onChange={(e) => setDni(e.target.value)}
            placeholder="Ingresa tu DNI" 
            required/>
          </Form.Group>
            <div> 
            <Button type="submit" variant="light">Enviar</Button>
            </div>  
            
        </Form>
        <Imagen />


      </div>
    </>
  );
}

export default Formulario;
