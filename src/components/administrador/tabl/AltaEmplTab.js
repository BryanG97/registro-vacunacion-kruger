import React from 'react';
import AltaEmplRow from './rows/AltaEmplRow';

const AltaEmplTab = ({data, setDataToEdit, deleteData}) =>{
    return(
        <div>
            <h2>ESCOJA EMPLEADO A DAR DE ALTA</h2>
            <table>
                <thead>
                    <tr><th>CÉDULA</th>
                        <th>NOMBRES</th>
                        <th>APELLIDOS</th>
                        <th>CORREO</th>
                        <th>ALTA</th></tr>
                    </thead>

                    <tbody>
                    {data.length === 0?<tr>
                        <td colSpan="5">NO HAY DATOS</td>
                        </tr>:data.map(el=> <AltaEmplRow 
                        key={el.id} 
                        element={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}/>)}
                        </tbody>
            </table>
        </div>
    );
}
export default AltaEmplTab;