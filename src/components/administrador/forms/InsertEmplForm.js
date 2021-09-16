import React, { useEffect } from 'react';

//Inicializar Formulario
const initialForm={
    id:null,
    cedula:"",
    nombres:"",
    apellidos:"",
    correo:"",
    
    fecha:"",
    direccion:"",
    telefono:"",
    estvacuna:"",
    tipovacuna:"",
    fechavacuna:"",
    numerodosis:"",

    usuario:"",
    contra:""
};

const InsertEmplForm = ({createData, updateData,dataToEdit,setDataToEdit}) =>{
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
            
            <h2>{dataToEdit ? "EDITAR EMPLEADO" : "AGREGAR EMPLEADO" }</h2>

            <form onSubmit={handleSubmit}> 
                <input type="text" 
                name="cedula" 
                placeholder="Cedula" 
                maxLength="10"
                onChange={handleChange} 
                value={form.cedula}/><br/>

                <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} value={form.nombres}/><br/>
                <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} value={form.apellidos}/><br/>
                <input type="text" name="correo" placeholder="Correo" onChange={handleChange} value={form.correo}/><br/>
                <input type="submit" value="ENVIAR"/>
                <input type="reset" value="LIMPIAR" onClick={handleReset}/>
            </form>
        </div>
    );
}
export default InsertEmplForm;