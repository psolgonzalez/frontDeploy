import { useState, useEffect } from 'react';
import axios from 'axios';

const Buscar = () => {
    const [personas, setPersonas] = useState([]);
    const [query, setQuery] = useState('');
    const URL = 'https://backdeploy-production.up.railway.app/users/buscar';

    useEffect(() => {
        const getPersona = async () => {
            try {
                const { data } = await axios.get(`${URL}?nombre=${query}`);
                
                if (data && data.personas) {
                    setPersonas(data.personas);
                    console.log(data);
                } else {
                    console.error('Respuesta inesperada:', data);
                }
            } catch (error) {
                console.error('Error en la búsqueda:', error);
            }
        };

        getPersona();
    }, [query]);

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Buscar Personas
            </h1>
            <div className="container mt-5 text-center">
                <input 
                    type='text'
                    value={query}
                    placeholder='Buscar por Nombre'
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="container mt-5 text-center">
                {personas && personas.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personas.map(persona =>
                                <tr key={persona._id}>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.apellido}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                ) : (
                    <p>No se encontraron personas.</p>
                )}
            </div>
        </>
    );
}

export default Buscar;
