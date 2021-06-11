import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class  Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datosCargados: false,
            monito:[]
           
         }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    submitHandler = e => {
      
        e.preventDefault()
        console.log(this.state)
    }
    
   
    componentDidMount (){
        console.log(this.props.match.params.id)
        
        axios.put("http://localhost:9000/api/" +this.props.match.params.id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            console.log(datosRespuesta);
            this.setState({datosCargados: true,
                 monito:datosRespuesta[0]})
        })
        .catch(console.log)
             
         
     }
 
   
    render() { 
        const{datosCargados, monito}=this.state
       

        
        return ( <div className="card">
            <div className="card-header">
                Editar monitores
            </div>
            <div className="card-body">
              
                
                <form onSubmit={this.submitHandler}>
                

                <div className="form-group">
                  <label for="">ID</label>
                  <input type="text" readOnly class="form-control" name="id" value={monito.id} id="id" aria-describedby="helpId" placeholder=""></input>
                  <small id="helpId" class="form-text text-muted"></small>

                  </div>
            

                       <div className="form-group">
                         <label htmlFor="">Nombre:</label>
                         <input type="text" name="nombremoni" onChange={this.changeHandler}value={monito.nombremoni}  id="nombremoni" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escribe el nombre completo</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Programa:</label>
                         <input type="text" name="programa" onChange={this.changeHandler} value={monito.programa}  id="programa" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el programa academico</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Semestre:</label>
                         <input type="text" name="semestre" onChange={this.changeHandler}  value={monito.semestre} id="semestre"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el semestre</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Telefono:</label>
                         <input type="number" name="telefono" onChange={this.changeHandler} value={monito.telefono}id="telefono"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba un telefono</small>
                       </div>
                       <div className="btn-group" role="group" aria-label="">
                           <button type="submit" className="btn btn-success">Agregar</button>
                           <Link to={"/"} class="btn btn-cancel">Cancelar</Link>
                           
                       </div>


                   </form>
                
            </div>
            <div className="card-footer text-muted">
             
            </div>
        </div> );
        
    }
}
 
export default Editar ;