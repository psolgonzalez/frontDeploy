import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Usuarios = ()=>{
    const [ personas, setPersonas] = useState([]);

    const URL = 'https://backdeploy-production.up.railway.app/users';


   const getPersona = async () => {
  try {
    const { data } = await axios.get(URL);
    setPersonas(data.personas);
  } catch (error) {
    console.error('Error al cargar personas:', error);
    
  }
}

 /*    const deleteUser = (id) =>{
      alert(`Eliminará un usuario del registro ${id}`) 
    }*/
  
    useEffect(() => {
      getPersona()
    }, []) 




    return (
        <> 
        <h1 className='text-center'>
            Lista de Usuarios
        </h1>
        <div className='container'>  
    <Table className='container' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
        </tr>
      </thead>
      <tbody>
        {personas.map(persona => 
          <tr key={persona._id}>
            <td>{persona._id}</td>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.dni}</td>
          </tr>
        )}
      </tbody>
    </Table>
      <Button onClick={getPersona} variant="dark">Cargar</Button>
      </div>
        </>
    )
}

export default Usuarios;


