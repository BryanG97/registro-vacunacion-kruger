import React, { useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import InsertAltaForm from './forms/InsertAltaForm';
import AltaEmplTab from './tabl/AltaEmplTab';

const DarAlta=()=>{
    //Guarda datos de la base
    const [db, setDb] = React.useState(null);
    const [dataToEdit,setDataToEdit] = React.useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/empleados";

    //LEER DATOS DE JSON-SERVER
    useEffect(()=>{
        api.get(url).then((res)=>{
            if(!res.err){
                setDb(res);
            }else{
                setDb(null);
            }
        });
    },[]);

    ////////////////////////////////ACTUALIZAR REGISTROS
    //EN ESTE CASO NOS SERVIRÁ PARA ACTUALIZAR UNICAMENTE CAMPOS DE USUARIO Y CONTRASEÑA
    const updateData = (data)=>{
        let endpoint = `${url}/${data.id}`;
        let options = {
            body:data,
            headers:{"content-type":"application/json"}};

        api.put(endpoint,options)
        .then((res)=>{
            console.log(res);
            if(!res.err){
                let newData = db.map(element => element.id === data.id? data: element);
                setDb(newData);
                let isDelete = window.confirm(`Usuario y Contraseña Agregados`);
            }else{
            }
        });
    };

    return(
        <div>
            <br/>
            <br/>
            <h1 align="center">ALTA EMPLEADOS</h1>

            {db &&(
            <AltaEmplTab
            data={db} 
            setDataToEdit={setDataToEdit}/>
            )}

            <InsertAltaForm
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>

            
        </div>
    );
}
export default DarAlta;
