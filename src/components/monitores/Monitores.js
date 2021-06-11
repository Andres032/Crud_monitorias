import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';



class Monitores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            datosCargados:false,
            monitor: []
           
           
            
        }  


       
    }
    borrarRegistros =  async (id)=>{
        
        
       await axios.delete("http://localhost:9000/api/" +id)
            this.cargarDatos();
            
        
    }
    

    cargarDatos(){
        fetch("http://localhost:9000/api")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({datosCargados: true, monitor:datosRespuesta})
        })
        .catch(console.log)
    }

    componentDidMount(){
        this.cargarDatos();
    }

   
   
    render() { 
        const{datosCargados, monitor}=this.state
        if(!datosCargados){return(<div>Cargando INICIAR LA API.</div>)}
        else{
        
        return ( 
         <div className="card">
             <div className="card-header">
             <Link  className="btn btn-success" to={"/crear"}>Agregar Monitor</Link>
             </div>
             <div className="card-body">
                 <h4> Lista de Monitores</h4>
             <div className="container"><table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Completo</th>
                    <th>Programa</th>
                    <th>Semestre</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {monitor.map(
                    (monitor)=>(
                        <tr key={monitor.id}> 
                        <td>{monitor.id}</td>
                        <td>{monitor.nombremoni}</td>
                        <td>{monitor.programa}</td>
                        <td>{monitor.semestre}</td>
                        <td>{monitor.telefono}</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="">
                            <Link  className="btn btn-primary"  to={"/editar/"+monitor.id}>Editar</Link>
                            <button type="button" className="btn btn-danger" onClick={()=>this.borrarRegistros(monitor.id)}>Borrar</button>
                            
                           </div>
                        </td>
                    </tr>
                      

                    )
                )

                }
                       
                    
                      
                    
                
               
            </tbody>
        </table>
        </div>
                 
             </div>
             <div className="card-footer text-muted">
                 
             </div>
         </div>
        );
        }
    }
}
 
export default Monitores;