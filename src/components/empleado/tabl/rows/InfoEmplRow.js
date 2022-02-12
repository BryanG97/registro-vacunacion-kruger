import React from 'react';

const InfoEmplRow = ({element}) =>{
    let{cedula, nombres,apellidos,correo,id,fecha,direccion,
    telefono, estvacuna, tipovacuna, fechavacuna, numerodosis}=element;
    return(
        <tr><td>{element.cedula}</td>
            <td>{element.nombres}</td>
            <td>{element.apellidos}</td>
            <td>{element.correo}</td>
            <td>{element.fecha}</td>
            <td>{element.direccion}</td>
            <td>{element.telefono}</td>
            <td>{element.estvacuna}</td>
            <td>{element.tipovacuna}</td>
            <td>{element.fechavacuna}</td>
            <td>{element.numerodosis}</td></tr>
    );
}
export default InfoEmplRow;