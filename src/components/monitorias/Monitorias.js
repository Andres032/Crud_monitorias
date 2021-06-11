import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';



class Monitorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            datosCargados:false,
            monitoria: []
           
           
            
        }  


       
    }
    borrarRegistros =  async (id)=>{
        
        
       await axios.delete("http://localhost:9000/monitorias/" +id)
            this.cargarDatos();
            
        
    }

    cargarDatos(){
        fetch("http://localhost:9000/monitorias")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({datosCargados: true, monitoria:datosRespuesta})
        })
        .catch(console.log)
    }

    componentDidMount(){
        this.cargarDatos();
    }

   
   
    render() { 
        const{datosCargados, monitoria}=this.state
        if(!datosCargados){return(<div>Cargando INICIAR LA API2.</div>)}
        else{
        
        return ( 
         <div className="card">
             <div className="card-header">
             <Link  className="btn btn-success" to={"/crearM"}>Agregar Monitoria</Link>
             </div>
             <div className="card-body">
                 <h4> Lista de Monitorias</h4>
             <div className="container"><table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Materia</th>
                    <th>Monitor</th>
                    <th>Fecha</th>
                    <th>Salon</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                {monitoria.map(
                    (monitoria)=>(
                        <tr key={monitoria.id}> 
                        <td>{monitoria.id}</td>
                        <td>{monitoria.materia}</td>
                        <td>{monitoria.nombremoni}</td>
                        <td>{monitoria.fecha}</td>
                        <td>{monitoria.salon}</td>
                        <td>
                          <div className="btn-group" role="group" aria-label="">
                            <Link  className="btn btn-primary" to={"/editar/"+monitoria.id}>Editar</Link>
                            <button type="button" className="btn btn-danger" onClick={()=>this.borrarRegistros(monitoria.id)}>Borrar</button>
                            
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
 
export default Monitorias;