import React, { useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import InsertEmplForm from './forms/InsertEmplForm';
import ListEmplTab from './tabl/ListEmplTab';

const RegistrarEmpl = () =>{
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


    //Variables de CRUD
    ////////////////////////////////INSERTAR REGISTROS
    const createData = (data)=>{
        data.id = Date.now(); // Para agregar el id a cada empleado
        //console.log(data);//Imprimir en consola para verificar
        let options = {
            body:data,
            headers:{"content-type":"application/json"}};

        api.post(url,options)
        .then((res)=>{
            console.log(res);
            if(!res.err){
                setDb([...db, res]);
                let isDelete = window.confirm(`Empleado Agregado`);
            }else{
            }
        });
        
    };
    ////////////////////////////////ACTUALIZAR REGISTROS
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
                let isDelete = window.confirm(`Empleado Actualizado`);
            }else{
            }
        });
    };
    ////////////////////////////////ELIMINAR REGISTROS
    const deleteData = (id)=>{
        let isDelete = window.confirm(`¿Estas seguro de eliminar este registro?`);

        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {
                headers:{"content-type":"application/json"}};

            api.del(endpoint,options).then(res =>{
                if(!res.err){
                    let newData = db.filter(element=> element.id !== id);
                    setDb(newData);
                }else{
                }
            });
            
        }else{
            return;
        }
    };
    return(
        <div>
            <br/>
            <br/>
            <h1 align="center">ADMINISTRAR EMPLEADOS</h1>
            <InsertEmplForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}/>

            <hr/>
            <h2>LISTADO EMPLEADOS</h2>
            {db &&(
            <ListEmplTab 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}/>
            )}
        </div>
    );
}
export default RegistrarEmpl;