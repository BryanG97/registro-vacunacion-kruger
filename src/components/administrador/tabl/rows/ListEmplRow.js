import React from 'react';

const ListEmplRow = ({element, setDataToEdit, deleteData}) =>{
    let{cedula, nombres,apellidos,correo,id}=element;
    return(
        <tr><td>{element.cedula}</td>
            <td>{element.nombres}</td>
            <td>{element.apellidos}</td>
            <td>{element.correo}</td>
            <td><button onClick={()=>setDataToEdit(element)}>Editar</button></td>
            <td><button onClick={()=>deleteData(id)}>Eliminar</button></td></tr>
    );
}
export default ListEmplRow;