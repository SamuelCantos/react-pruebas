import React from 'react';
import './App.css';
 import ConsumiendoApi from './componentes/ConsumiendoApi';
import Imprimir from './componentes/Impresion';
import RandomUser from './componentes/RandomUser';

function App() {
  return (
    <div className='App'>
      
    <header className='App-header'>
   {/*  <ConsumiendoApi/>
      <h1></h1>
      <RandomUser numero={22}/>  */}
      <Imprimir/>
    </header>
  
    </div>
  );
}

export default App;
