import React, { Component } from 'react';               //Mando a llamar a component de React

import Plotly from '../src/custom-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

import Gconfig2 from '../src/t_graph_config2.js';       //Mando a llamar la configuracion de las graficas
import { Row, Col, Card } from 'reactstrap';            //MAndo a llamar componentes de Reacstrap

function MyGraphArray() {                               //Inicializo al componente personalizado MyGraph
  var i=0;                                              //Dicho fragmento de JSX se ejcutara por cada componente en el array usando un map
  
  var html1 = Gconfig2.map((info) =>  
    <Col key={i} sm="6" xs="12" className="px-1" >
    
      <Card key={i} className="m-1" style={{height:"200px",backgroundColor:"rgb(60,80,100)"}}>
        <Plot key={i++}
          data={[info[2],info[3],info[4]]} layout={info[0]} config={info[1]}
        />
      </Card>

    </Col>
  );
  return (                                              //Retorna el fragmento de codigo JSX
    <Row className="mx-0">{html1}</Row>
  );
}


class Section21 extends Component {                     //Inicializo al componente
  render() {                                            //Retorno el fragmento de JSX
    for(var i=0;i<12;i++){
      Gconfig2[i][0]['height']=195;
    }
    const myheight = ((window.innerHeight)-70) + "px";
    return (
      <div>
        <Card className="m-1" style={{height:myheight, overflow:"auto",backgroundColor:"transparent"}} >
          <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                                                        {/*Mando a llamar al componente personalizado*/}
            <MyGraphArray/>
              
          </div>
        </Card>
      </div>
    );
  }
}

export default Section21;                         //Exporto el componente


/*
----------Complete call for Graph but very high Bundle Size----------

import Plot from 'react-plotly.js';                     //Mando a llamar las graficas de Plotly-React 
*/

/*
----------Call with 3 type basic graphs: Scatter, Bars and Pie graphs, size of bundle is more low----------

import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
*/

/*
----------Customize method
create local file "custom-plotly.js" and add the next code:

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/bar'),
    require('plotly.js/lib/histogram'),
    require('plotly.js/lib/scatter'),
    require('plotly.js/lib/scatterpolar'),
]);
module.exports = Plotly;

After the add initialize Plot componente with the next code:
import Plotly from '../src/custom-plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
*/