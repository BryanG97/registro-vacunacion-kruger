import React, { useEffect } from 'react';

import EstVacTab from './tabl/EstVacTab';
import TipoVacTab from './tabl/TipoVacTab';
import FechaVacTab from './tabl/FechaVacTab';

const ListarEmpl =()=>{

//class ListarEmpl extends React.Component{

    const [busqueda, setBusqueda] = React.useState(null);

        return (
            <div>
                <br/>
                <br/>
                <h1 align="center">FILTRAR EMPLEADOS</h1>
                <br/>
                <br/>

                
                <button 
                onClick={()=>setBusqueda(<EstVacTab/>)}>
                    Por Estado de Vacunación
                    </button>
                
                <button 
                onClick={()=>setBusqueda(<TipoVacTab/>)}>
                    Por Tipo de Vacuna
                    </button>
                
                <button 
                onClick={() =>setBusqueda(<FechaVacTab/>)}>
                    Por Fecha de Vacunación
                    </button>
                
                {
                    //LLAMO LAS TABLAS QUE FUERON SELECCIONADAS SEGUN EL BOTTON
                    busqueda
                }
                
                         
                    

            </div>
        );
}
export default ListarEmpl;