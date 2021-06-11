import React from 'react'
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container" align="center">
                <h1>BIENVENIDOS</h1>
                <div className="card">
                
                    <div className="card-body">
                    <img src="assets/images/monitorias.jpg" width="100%" height="459" ></img>
                        
                    </div>
                    <div className="card-footer text-muted">
                   
                    </div>
                </div>
                
                

               
                
            </div>
         );
    }
}
 
export default home;