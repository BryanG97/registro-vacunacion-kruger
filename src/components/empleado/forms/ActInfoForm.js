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
    tipovacuna:"DATO INCOMPLETO",
    fechavacuna:"DATO INCOMPLETO",
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
        if(!form.fecha||!form.direccion||!form.telefono||!form.estvacuna){
            alert("Datos Incompletos");
            return;
        }

        if(vacunado.checked){
            if(!form.tipovacuna || !form.fechavacuna || !form.numerodosis){
                alert("Datos Incompletos");
                return;
            }
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

    
    ////// VERIFICAR VACUNADO NO VACUNADO

    var vacunado = document.getElementById('vacunado');
    var novacunado = document.getElementById('novacunado');

    var tvacuna = document.getElementById('tvacuna');
    var fvacuna = document.getElementById('fvacuna');
    var nvacuna = document.getElementById('nvacuna');

    function estadoVacunacion() {
        if (novacunado.checked) {
            tvacuna.disabled = true;
            fvacuna.disabled = true;
            nvacuna.disabled = true;
        } else if(vacunado.checked) {
            tvacuna.disabled = false;
            fvacuna.disabled = false;
            nvacuna.disabled = false;
        }
      }
    // PARA LLAMAR A LA FUNCION DE DETECCION DEL RADIOBUTTON
    if(vacunado){ // El if se coloca porque no reconoce el el id de radiobutton ya que aun no se ejecuta esa parte, el if hace que se ejecute luego del formulario
        vacunado.addEventListener('change', estadoVacunacion);
        novacunado.addEventListener('change', estadoVacunacion);
    }

    return(
        <div>
            <h2>INGRESE SU INFORMACIÓN</h2>

            <form onSubmit={handleSubmit} autocomplete="off">  
                <input type="text" name="cedula" placeholder="Cedula" readOnly onChange={handleChange} value={form.cedula} style={{display:'none'}}/>
                <input type="text" name="nombres" placeholder="Nombres" readOnly onChange={handleChange} value={form.nombres} style={{display:'none'}}/>
                <input type="text" name="apellidos" placeholder="Apellidos" readOnly onChange={handleChange} value={form.apellidos} style={{display:'none'}}/>
                <input type="text" name="correo" placeholder="Correo" readOnly onChange={handleChange} value={form.correo} style={{display:'none'}}/>
                
                <input type="text" name="usuario" placeholder="Usuario" readOnly onChange={handleChange} value={form.usuario} style={{display:'none'}}/>
                
                <label>Fecha de Nacimiento</label><br/>
                <input type="date" name="fecha" onChange={handleChange} value={form.fecha}/>
                <br/>&nbsp;
                <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} value={form.direccion}/>
                <input type="text" pattern="^[0-9]{1,10}$" name="telefono" placeholder="Telefono Móvil" onChange={handleChange} value={form.telefono}/>

                <label>ESTADO VACUNACIÓN</label><br/>
                <label>Vacunado</label>
                <input type="radio" value="VACUNADO" id = "vacunado" name="estvacuna" onChange={handleChange}/> <br/>
                <label>No Vacunado</label>
                <input type="radio" value="NO VACUNADO" id = "novacunado" name="estvacuna" onChange={handleChange}/> <br/>

                <br/>
                <label>SELECCIONE EL TIPO DE VACUNA</label><br/>
                <select name="tipovacuna" onChange={handleChange} id="tvacuna">
                    <option >-- SELECCIONE --</option>
                    <option value="SPUTNIK">Sputnik</option>
                    <option value="ASTRAZENECA" >AstraZeneca</option>
                    <option value="PFIZER">Pfizer</option>
                    <option value="JHONSON&JHONSON">Jhonson & Jhonson</option>
                    </select>

                <br/>
                <br/><label>Fecha de Vacuna</label><br/>
                <input type="date" name="fechavacuna" onChange={handleChange} value={form.fechavacuna} id="fvacuna"/>
                <br/>&nbsp;
                <input type="text" pattern="^[0-3]{1}$" name="numerodosis" placeholder="Número de Dosis" onChange={handleChange} value={form.numerodosis} id="nvacuna"/>
                                

                <input type="submit" value="GUARDAR"/>
            </form>
        </div>
    );
}
        
export default ActInfoForm;
