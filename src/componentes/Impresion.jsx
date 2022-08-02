import React from 'react';
import { useState } from 'react';

export default function Imprimir () {

    const [value, setValue] = useState("")

    const handleInputChange = (e) =>{
        e.preventDefault()
        setValue(e.target.value)
        console.log(e.target.value)
    }

    function imprSelec(id) {
        var ficha = document.getElementById(id);
        var ventimp = window.open(' ', 'popimpr');
        ventimp.document.write( ficha.innerHTML );
        ventimp.document.close();
        ventimp.print( );
        ventimp.close();
      }

    
    return (
        <div>
            <input onChange={handleInputChange} value={value} ></input>
            <div id="seleccion">{value}</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequatur sed reiciendis repellat sequi impedit quam laboriosam voluptatum ut vitae, similique ullam facilis quia doloribus non excepturi! Laboriosam, eligendi aliquid!</div>
           <button onClick={ () => imprSelec('seleccion')}>imprimir</button>
        </div>
    )
}


    /*  function imprimirElemento(elemento) {
         var ventana = window.open('', 'PRINT', 'height=400,width=600');
         ventana.document.write('<html><head><title>' + document.title + '</title>');
         ventana.document.write('<link rel="stylesheet" href="imprimir.css">'); //Cargamos otra hoja, no la normal
         ventana.document.write('</head><body >');
         ventana.document.write(elemento.innerHTML);
         ventana.document.write('</body></html>');
         ventana.document.close();
         ventana.focus();
         ventana.onload = function() {
           ventana.print();
           ventana.close();
         };
         return true;
       } */
