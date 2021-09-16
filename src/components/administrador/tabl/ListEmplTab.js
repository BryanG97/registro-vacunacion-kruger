import React from 'react';
import ListEmplRow from './rows/ListEmplRow';

const ListEmplTab = ({data, setDataToEdit, deleteData}) =>{
    return(
        <div>
            <table>
                <thead>
                    <tr><th>CÉDULA</th>
                        <th>NOMBRES</th>
                        <th>APELLIDOS</th>
                        <th>CORREO</th>
                        <th>ACTUALIZAR</th>
                        <th>ELIMINAR</th></tr>
                    </thead>

                    <tbody>
                    {data.length === 0?<tr>
                        <td colSpan="6">NO HAY DATOS</td>
                        </tr>:data.map(el=> <ListEmplRow 
                        key={el.id} 
                        element={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}/>)}
                        </tbody>
            </table>
        </div>
    );
}
export default ListEmplTab;