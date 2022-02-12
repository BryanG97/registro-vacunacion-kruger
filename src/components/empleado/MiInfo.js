import React, { useEffect } from 'react';

import { helpHttp } from '../helpers/helpHttp';
import ActInfoForm from './forms/ActInfoForm';
import InfoEmplTab from './tabl/InfoEmplTab';


const MiInfo = ()=>{

    //Guarda datos de la base
    const [db, setDb] = React.useState(null);

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

    return(
            <div>
                <br/>
                <br/>
                <br/>
                <h1 align="center">MI INFORMACIÓN</h1>

                <InfoEmplTab/>             
                </div>
        );
    }
export default MiInfo;