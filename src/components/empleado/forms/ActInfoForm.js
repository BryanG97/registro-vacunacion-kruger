import React, { useEffect } from 'react';
import Cookies from "universal-cookie/es6";
const cookies= new Cookies();
//Inicializar Formulario
const initialForm={
    id:cookies.get('id'),
    cedula:cookies.get('cedula'),
    nombres:cookies.get('nombres'),
    apellidos:cookies.get('apellidos'),
    correo:cookies.get('correo'),
    
    fecha:"",
    direccion:"",
    telefono:"",
    estvacuna:"",
    tipovacuna:"",
    fechavacuna:"",
    numerodosis:"",

    usuario:cookies.get('usuario'),
    contra:cookies.get('contra')
};

const ActInfoForm=({updateData,setDataToEdit,createData})=>{
    //IGUALO A LOS VALORES INICIALES PRE ESTABLECIDOS
    const[form, setForm] = React.useState(initialForm);


    //EVENTOS
    //PARA IGUALAR LOS VALORES AL VALUE
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    //PARA HACER EL SUBMIT 
    //PARA HACER EL SUBMIT 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.fecha||!form.direccion||!form.telefono||!form.estvacuna
            ||!form.tipovacuna||!form.fechavacuna||!form.numerodosis){
            alert("Datos Incompletos");
            return;
        }

        //PARA IDENTIFICAR EL ACTUALIZAR DEL INSERTAR
        if(form.id === null){
            createData(form)
        }else{
            updateData(form);
        }
        handleReset();
    };
    //PARA SETEAR LOS CAMPOS
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

    return(
        <div>
            <h2>INGRESE SU INFORMACIÓN</h2>

            <form onSubmit={handleSubmit}> 
                <input type="text" name="cedula" placeholder="Cedula" readOnly onChange={handleChange} value={form.cedula}/>
                <input type="text" name="nombres" placeholder="Nombres" readOnly onChange={handleChange} value={form.nombres}/>
                <input type="text" name="apellidos" placeholder="Apellidos" readOnly onChange={handleChange} value={form.apellidos}/>
                <input type="text" name="correo" placeholder="Correo" readOnly onChange={handleChange} value={form.correo}/>
                
                <input type="text" name="usuario" placeholder="Usuario" readOnly onChange={handleChange} value={form.usuario}/>
                
                <label>Fecha de Nacimiento</label><br/>
                <input type="date" name="fecha" onChange={handleChange} value={form.fecha}/>
                <br/>&nbsp;
                <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} value={form.direccion}/>
                <input type="text" name="telefono" placeholder="Telefono Móvil" onChange={handleChange} value={form.telefono}/>
                <input type="text" name="estvacuna" placeholder="Estado Vacuna" onChange={handleChange} value={form.estvacuna}/>
                <input type="text" name="tipovacuna" placeholder="Tipo Vacuna" onChange={handleChange} value={form.tipovacuna}/>
                
                <label>Fecha de Vacuna</label><br/>
                <input type="date" name="fechavacuna" onChange={handleChange} value={form.fechavacuna}/>
                <br/>&nbsp;
                <input type="text" name="numerodosis" placeholder="Número de Dosis" onChange={handleChange} value={form.numerodosis}/>
                                

                <input type="submit" value="GUARDAR"/>
            </form>
        </div>
    );
}
export default ActInfoForm;
