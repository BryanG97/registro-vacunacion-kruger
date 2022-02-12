import React,{Component} from 'react';
import axios from 'axios';

const initialForm={
    fechavacuna1:"",
    fechavacuna2:""
}

//export default class FechaVacTab extends Component{
const FechaVacTab=()=>{
    //IGUALO A LOS VALORES INICIALES PRE ESTABLECIDOS
    const[form, setForm] = React.useState(initialForm);

    //PARA ALMACENAR LOS EMPLEADOS
     const inState = {
        empleados: []
        ,status: false
    }
    const[state, setState] = React.useState(inState);

    //Almacenamos las fechas
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
        console.log(form)
    };
    //Almacenar registros filtrados
    const inState2 = {
        empleados: []
        ,status: false
    }
    const [filtrado, setFiltrado] = React.useState(inState2);
    //var filtrado=[];

    //PARA LEER LOS EMPLEADOS SEGUN RANGO DE FECHA
    const leerFechaVacuna = (e) => {
        e.preventDefault();

        if(!form.fechavacuna1 && !form.fechavacuna2){
            alert("Seleccione una rango de fechas..!");
            return;
            
        }else{
            var baseUrl="http://localhost:5000/empleados";
            axios.get(baseUrl).then(res => {
                setState({
                    
                    empleados: res.data,
                    status: true,
                })
                setFiltrado ({ 
                    empleados:(state.empleados.filter(filtrarPorFecha)),
                    status: true,
                })
            })            
        }
        
    };
    //Metodo de comparación de fechas 
    function filtrarPorFecha(obj){
        if(Date.parse(obj.fechavacuna) >= Date.parse(form.fechavacuna1) &&
        Date.parse(obj.fechavacuna) <= Date.parse(form.fechavacuna2)){
            return true;
        }else{
            return false;
        }
    }
    
    //render(){
        return(
            <div>
                <h1>FECHA DE VACUNACIÓN </h1>
                <h4>Elija el rango de fecha de vacunación </h4>
                
                <form onSubmit={leerFechaVacuna}>
                    <label>Fecha Inicio</label><br/>
                    <input type="date" name="fechavacuna1" onChange={handleChange} value={form.fechavacuna1} id="fvacuna"/>
                    <br/>
                    <br/>
                    <label>Fecha Fin</label><br/>
                    <input type="date" name="fechavacuna2" onChange={handleChange} onInput={leerFechaVacuna} value={form.fechavacuna2} id="fvacuna"/>
                    <br/>
                    <input type="submit" value="BUSCAR"/>
                    
                </form>


                <div>
                <h2>DETALLES</h2>
                <table>
                    <thead>
                        <tr><th>CÉDULA</th><th>NOMBRES</th><th>APELLIDOS</th><th>FECHA DE VACUNA{filtrado.length}</th></tr>
                    </thead> 

                    <tbody>
                    {
                        filtrado.status === true &&  (
                            
                            filtrado.empleados.map((emp) =>{
                                return(
                                    <tr >

                                        <td>{emp.cedula}</td>
                                        <td>{emp.nombres}</td>
                                        <td>{emp.apellidos}</td>
                                        <td>{emp.fechavacuna}</td>

                                    </tr>
                                );
                            })
                        )
                        
                    }
                    </tbody>                           
                </table>
            </div>


            </div>
        );
    //}
}

export default FechaVacTab;
