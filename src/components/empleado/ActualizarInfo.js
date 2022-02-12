import React, { useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import ActInfoForm from './forms/ActInfoForm';
import Cookies from "universal-cookie/es6";
import InfoEmplTab from './tabl/InfoEmplTab';
//const cookies= new Cookies();

const ActualizarInfo=()=>{
    
    //Guarda datos de la base
    const [db, setDb] = React.useState(null);
    const [dataToEdit,setDataToEdit] = React.useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/empleados";
    //LEER DATOS DE JSON-SERVER
    useEffect(()=>{
        api.get(url).then(res=>{
            if(!res.err){
                setDb(res);
            }else{
                setDb(null);
            }
        });
    },[]);

    ////////////////////////////////ACTUALIZAR REGISTROS
    //EN ESTE CASO NOS SERVIRÁ PARA ACTUALIZAR LOS CAMPOS QUE FALTANA
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
                let isDelete = window.confirm(`Información Actualizada`);
                //window.location.href="./miinfo";
            }else{
            }
        });
    };


    return(
        <div>
                <br/>
                <br/>
                <br/>
                <h1 align="center">ACTUALIZAR INFORMACIÓN</h1>

                <ActInfoForm
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit} />
            </div>
    );
}
export default ActualizarInfo;
