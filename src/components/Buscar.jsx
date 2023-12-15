import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Buscar = ()=>{
    const [ personas, setPersonas] = useState([]);
    const [query, setQuery] = useState('');

    const URL = 'https://backdeploy-production.up.railway.app/users/buscar';

    useEffect(() => {
   const getPersona = async () => {
try {
    const { data } = await axios.get(`${URL}?nombre=${query}`);
    setPersonas(data.personas);
    console.log(data);
    
} catch (error) {
    console.log('Error en la busqueda', error);
}
  } 
    getPersona()
    }, [query]) 



    return (
        <> 
        <h1 className='text-center'>
            Buscar Personas
        </h1>
        <div className='container mt-5 text-center'>   
      <Card style={{ width: '18rem' }}>
      <Card.Body>   
        <Card.Title>Ingrese Nombre o Apellido</Card.Title>
        <Card.Text>
        <input 
        type="text" 
        value={query}
        placeholder='Buscar Nombre'
        //toLowerCase (Preguntar al profe si es la f q convierte a minuscula todo)
        onChange={(e)=>setQuery(e.target.value)}/>
        
        </Card.Text>
        <Button variant="primary">Consultar</Button>
        </Card.Body>
       </Card>
        </div>
        
        <div className='container mt-5 text-center'> 
        {personas.map(persona => 
          <tr>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
           </tr>
        )}
        </div>
        </>
    )
}
export default Buscar;

/*ERROR QUEME SALE EN CONSOLA EN BUSCAR POR NOMBRE Y EN USUARIOS 

Access to XMLHttpRequest at 'https://backdeploy-production.up.railway.app/users/buscar?nombre=' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. */