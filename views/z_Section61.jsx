import React, { Component } from 'react';               //Mando a llamar a component de React

//import Gconfig2 from '../src/t_graph_config2.js';       //Mando a llamar la configuracion de las graficas
import { Row, Col, Card } from 'reactstrap';            //MAndo a llamar componentes de Reacstrap

class Section61 extends Component {                     //Inicializo al componente
  render() {                                            //Retorno el fragmento de JSX

    return (
      <div>
        <Card className="m-1" style={{overflowX:"hidden",overflowY:"scroll",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <Row className="mx-0">

              <Col sm="6" xs="12" className="p-1" >
                <Card className="text-center text-white p-4" style={{backgroundColor:"rgb(60,80,100)", display:"flex", height:"100%", justifyContent:"center"}}>
                  <h1>Ingresen a mi sitio WEB entrando al link:</h1>
                  <h2> <a href="https://eadbeel94.herokuapp.com/" className="text-white" target="_blank">eadbeel94.herokuapp.com </a>  </h2>
                </Card>
              </Col>
              <Col sm="6" xs="12" className="p-1" >
                <img src="/IMG_3.png" alt="" style={{height:"900px"}}/>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default Section61;                         //Exporto el componente