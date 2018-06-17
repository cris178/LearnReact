import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Use this file to test JS React files

//Lab 1 Create a Car Dealership Web app
function SiteTitle(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  )
}

function Options(props){
  return(
    <div>
      <form>
        <h2>Choose Options</h2>
        New Only <CheckBox/><br />
        Select Type <DropDown/><br />
      </form>
    </div>
  )

}


//Dropdown and CheckBox could be implemented inside of Options
//In order to simplify the code.
function CheckBox(props){
  return(
    <div>
      <input type = "checkbox" name = "new" value = "New Only" defaultchecked />
    </div>
  )
}

function DropDown(props){
  return(
    <div>
      <select name = "vehicleTypes">
        <option value = "all">All</option>
        <option value = "cars">Cars</option>
        <option value = "trucks">Trucks</option>
        <option value = "convertible">Convertible</option>
      </select>
    </div>
  )
}
function Table(props){
    return(
      <div>
        <table>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <td>{props.year}</td>
            <td>{props.model}</td>
            <td>{props.price}</td>
            <td><button>Buy Now</button></td>
          </tr>
        </table>
      </div>
    )
}

function VehicleData(props){
  return(
    <div>
    {props.lists.map((vehicle) =>{
      return <Table year={vehicle[0]} model={vehicle[1]} price={vehicle[2]} />
   })}
    </div>
  )
}

function InfoTable(props){
  return(
    <div>
      <h2>{props.type}</h2>
      <VehicleData lists={props.lists}/>
    </div>
  )
}

function DisplayTable(props){
  return(
    <div>
      <InfoTable type={"Cars"} lists={[["2013", "A", "$32000"], ["2011", "B", "$4400"], ["2016", "B", "15500"]]} />
      <InfoTable type={"Trucks"} lists={[["2014", "D", "$1800"], ["2013", "E", "$5200"]]}/>
      <InfoTable type={"Convertibles"} lists={[["2009", "F", "2000"], ["2010", "G", "6000"], ["2012", "H", "12500"], ["2017", "M", "50000"]]}/>
    </div>

  )
}

function CarApp(props){
  return(
    <div>
      <SiteTitle  title = "Welcome to Tesla" description = "The most innovative green vehicles on the planet"/>
      <Options />
      <DisplayTable />
    </div>
  )
}


ReactDOM.render(
  <CarApp />,
  document.getElementById('root')
)

//ReactDOM.render(<Feature active = {true}/>, document.getElementById('root'));
registerServiceWorker();
