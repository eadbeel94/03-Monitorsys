import React, { Component } from 'react';               //Mando a llamar a component de React

//import Gconfig2 from '../src/t_graph_config2.js';       //Mando a llamar la configuracion de las graficas
import { Row, Col, Card } from 'reactstrap';            //MAndo a llamar componentes de Reacstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   //Mando llamar al icono de la biblioteca de Fontawesome
import { faUsers, faChartArea, faTasks, faWindowClose } from '@fortawesome/free-solid-svg-icons';         //Solicito el icono faBars

class Section41 extends Component {                     //Inicializo al componente
  render() {                                            //Retorno el fragmento de JSX

    return (
      <div>
        <Card className="m-1" style={{overflowX:"hidden",overflowY:"scroll",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
            <Row className="mx-0">

              <Col sm="6" xs="12" className="px-1" >
                <Card className="m-1 p-3 text-center text-white" style={{height:"500px",backgroundColor:"rgb(60,80,100)"}}>
                  <h1 className="mb-5">Users <FontAwesomeIcon icon={faUsers} /></h1> 
                  <p style={{fontSize:"30px", textAlign:"justify"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error fuga id deserunt? Nesciunt dolor vitae ipsum quod dolore consequuntur veritatis ad deserunt odit voluptatum blanditiis omnis, ex eaque quam error incidunt, veniam quasi sequi neque animi porro fugiat autem commodi ut. Alias quasi eveniet enim, totam dolorum dolorem odit. </p>
                </Card>
              </Col>

              <Col sm="6" xs="12" className="px-1" >
                <Card className="m-1 p-3 text-center text-white" style={{height:"500px",backgroundColor:"rgb(60,80,100)"}}>
                  <h1 className="mb-5">Graphs <FontAwesomeIcon icon={faChartArea} /></h1> 
                  <p style={{fontSize:"30px", textAlign:"justify"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae minima nulla natus totam? Adipisci, doloribus est? Inventore mollitia consequuntur, consequatur illum, ad eveniet, cum vitae maxime est deserunt provident corporis sit esse facilis odit quaerat ipsa beatae aliquam blanditiis accusantium et quae iste? Deleniti nam, sint dolore harum laudantium maiores. </p>
                </Card>
              </Col>

              <Col sm="6" xs="12" className="px-1" >
                <Card className="m-1 p-3 text-center text-white" style={{height:"500px",backgroundColor:"rgb(60,80,100)"}}>
                  <h1 className="mb-5">Logs <FontAwesomeIcon icon={faTasks} /></h1> 
                  <p style={{fontSize:"30px", textAlign:"justify"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut illum totam placeat expedita earum perspiciatis maxime et corporis! Voluptate repellat, officia pariatur, illum dolor odio culpa saepe laboriosam veritatis iste fugiat quo voluptatum eum? Tenetur enim laborum mollitia dolores, ea fugit quas itaque atque animi, dolorem perspiciatis iste dolore molestias. </p>
                </Card>
              </Col>

              <Col sm="6" xs="12" className="px-1" >
                <Card className="m-1 p-3 text-center text-white" style={{height:"500px",backgroundColor:"rgb(60,80,100)"}}>
                  <h1 className="mb-5">Failure <FontAwesomeIcon icon={faWindowClose} /></h1> 
                  <p style={{fontSize:"30px", textAlign:"justify"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolorem quibusdam, eum corrupti provident necessitatibus rem dignissimos aperiam consequatur, hic harum porro quo. Mollitia consequuntur adipisci, officiis ducimus possimus saepe minima. Quidem, quam ipsam! Tempora iure odit neque libero sint officia quidem incidunt, ipsum quas qui animi maiores quaerat eaque! </p>
                </Card>
              </Col>

            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default Section41;                         //Exporto el componente