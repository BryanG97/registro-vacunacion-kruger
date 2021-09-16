import React from 'react';

const AltaEmplRow = ({element, setDataToEdit}) =>{
    let{cedula, nombres,apellidos,correo,id}=element;
    return(
        <tr><td>{element.cedula}</td>
            <td>{element.nombres}</td>
            <td>{element.apellidos}</td>
            <td>{element.correo}</td>
            <td><button onClick={()=>setDataToEdit(element)}>DAR ALTA</button></td></tr>
    );
}
export default AltaEmplRow;