import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Actualiza = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const { id } = useParams()
    const URL = 'https://backdeploy-production.up.railway.app/users/crear'
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updateUser = await axios.put(`${URL}/${id}, {
                nombre: nombre,
                apellido: apellido,
                dni: dni
            }`)
            console.log('Respuesta: ', updateUser.data);
            navigate('/usuarios')

        } catch (error) {
            console.log(`Hay un error en ${error}`);
        }
    }

    useEffect(() => {
        getPersona(id)
    }, [id])

    const getPersona = async () => {
        try {
            const response = await axios.get(`${URL}/${id}`);
            const responseData = response.data; 

            if (responseData && responseData.mensaje === "usuario encontrado") {
                const userDataArray = responseData.userById;

                if (userDataArray && userDataArray.length > 0) {
                    const userData = userDataArray[0];  
                    setNombre(userData.nombre || '');
                    setApellido(userData.apellido || '');
                    setDni(userData.dni || '');
                } else {
                    console.error('No se encontraron datos para la persona');
                }
            } else {
                console.error('No se encontraron datos para la persona');
            }
        } catch (error) {
            console.error(`Error al obtener la persona: ${error.message}`);
        }
    }


    return (
        <>
            <h1 className="container mt-5 text-center">Actualizar Persona</h1>
            <div className="container mt-5 d-flex">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ingresa tu nombre"
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            placeholder="Ingresa tu apellido"
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>DNI:</Form.Label>
                        <Form.Control
                            type="number"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            placeholder="Ingresa tu DNI"
                            required />
                    </Form.Group>
                    <div>
                        <Button type="submit" variant="light">Enviar</Button>
                    </div>

                </Form>
            </div>
        </>
    );
}
export default Actualiza