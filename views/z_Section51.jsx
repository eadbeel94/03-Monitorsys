import React, { Component } from 'react';               //Mando a llamar a component de React

//import Gconfig2 from '../src/t_graph_config2.js';       //Mando a llamar la configuracion de las graficas
import { Row, Col, Card } from 'reactstrap';            //MAndo a llamar componentes de Reacstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   //Mando llamar al icono de la biblioteca de Fontawesome
import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons';         //Solicito el icono faBars

class Section51 extends Component {                     //Inicializo al componente
  render() {                                            //Retorno el fragmento de JSX

    return (
      <div>
        <Card className="m-1" style={{overflowX:"hidden",overflowY:"scroll",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <Row className="mx-0">

              <Col sm="12" xs="12" className="p-5" >
                <Card className="m-1 p-5 text-center text-white" style={{backgroundColor:"rgb(60,80,100)"}}>
                  <h1 className="mb-5">Other <FontAwesomeIcon icon={faTheaterMasks} /></h1> 
                  <p style={{fontSize:"30px", textAlign:"justify"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias esse minima quisquam facilis? Dolor numquam ullam odit vel quam possimus alias. Eligendi itaque obcaecati debitis! Vitae obcaecati officiis esse animi odio. Libero facere, debitis nihil nisi minus soluta, quod eveniet vero dicta minima, qui laudantium voluptate esse impedit ullam eum tempore in repellat iure iste. Possimus quos culpa corrupti temporibus reprehenderit accusantium, odit tempore ullam nisi est facere laborum amet molestiae sed voluptatum impedit natus voluptatibus quis eaque sequi totam eius id. Mollitia neque a corporis qui reiciendis recusandae maiores voluptatibus fuga fugit? Et enim natus aut debitis adipisci amet. </p>
                </Card>
              </Col>

            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default Section51;                         //Exporto el componente