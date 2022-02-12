import React, { useEffect } from 'react';

//Inicializar Formulario
const initialForm={
    id:null,
    cedula:"",
    nombres:"",
    apellidos:"",
    correo:"",
    
    fecha:"DATO INCOMPLETO",
    direccion:"DATO INCOMPLETO",
    telefono:"DATO INCOMPLETO",
    estvacuna:"DATO INCOMPLETO",
    tipovacuna:"DATO INCOMPLETO",
    fechavacuna:"DATO INCOMPLETO",
    numerodosis:"DATO INCOMPLETO",

    usuario:"",
    contra:""
};

const InsertAltaForm=({createData, updateData,dataToEdit,setDataToEdit})=>{
    //IGUALO A LOS VALORES INICIALES PRE ESTABLECIDOS
    const[form, setForm] = React.useState(initialForm);


    //Para enviar datos de la tabla a los campos
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);

    //EVENTOS
    //PARA IGUALAR LOS VALORES AL VALUE
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    //PARA HACER EL SUBMIT 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.cedula){
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
            <h2>INGRESE USUARIO Y CONTRASEÑA</h2>

            <form onSubmit={handleSubmit} autocomplete="off"> 
                <input type="text" name="cedula" placeholder="Cedula" readOnly onChange={handleChange} value={form.cedula}/><br/>
                <input type="text" name="nombres" placeholder="Nombres" readOnly onChange={handleChange} value={form.nombres}/><br/>
                <input type="text" name="apellidos" placeholder="Apellidos" readOnly onChange={handleChange} value={form.apellidos}/><br/>
                <input type="text" name="correo" placeholder="Correo" readOnly style={{display:'none'}} onChange={handleChange} value={form.correo}/><br/>
                
                <input type="text" name="usuario" placeholder="Usuario" onChange={handleChange} value={form.usuario}/><br/>
                <input type="text" name="contra" placeholder="Contraseña" onChange={handleChange} value={form.contra}/><br/>
                <input type="submit" value="GUARDAR"/>
            </form>
        </div>
    );
}
export default InsertAltaForm;
