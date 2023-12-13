import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const Usuarios = ()=>{
    const [ personas, setPersonas] = useState([]);

    const URL = 'http://localhost:9000/users'

    const getPersona =async ()=>{
        const {data} =await axios.get(URL)
        console.log(data);
    }

    return (
        <> 
        <h1 className='text-center'>
            Lista de Usuarios
        </h1>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
      <Button onClick={getPersona} variant="dark">Cargar</Button>
    </Table>
        </>
    )
}

export default Usuarios;


