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
        console.log('Personas actualizadas:', data.personas);
      } catch (error) {
        console.error('Error al cargar personas:', error);
      }
    };

    const deleteUser = async (id) =>{
      alert(`Eliminar usuario ${id}`) 
      try {
        const dataDelete = await axios.delete(`${URL}/${id}`);
        if (dataDelete.status===200){
          alert(`Persona con ID ${id}eliminado exitosamente`)
          getPersona()
        }else{ 
          console.log('Error al eliminar tu persona:');
      }
    }catch (error){
      console.log(error);
      console.log('error al eliminar tu persona');
    }
  }
  
    useEffect(() => {
      getPersona()
    }, []) 

    return (
        <> 
        <h1 className='text-center'>
            Lista de tus Personas Favoritas
        </h1>
        <div className='container'>  
    <Table className='container' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
          <th>Borrar</th>
          <th>Actualizar</th>
        </tr>
      </thead>
      <tbody>
          {personas.map(persona =>
            <tr key={persona._id}>
              <td>{persona._id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.dni}</td>
              <td><Button onClick={()=>deleteUser(persona._id)} variant="danger">Delete</Button></td>
              <td><a href={`/update/${persona._id}`} className='btn btn-warning'>Actualiza</a></td>
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


