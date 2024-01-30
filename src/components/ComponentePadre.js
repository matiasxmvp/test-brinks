import React, { useState} from 'react'
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { Toolbar } from 'primereact/toolbar';
import GraficoBarrasReChart from './GraficoBarrasReChart';
import GraficoTortaReChart from './GraficoTortaReChart';
import ComponenteTop10 from './ComponenteTop10';

//BOTON PDF
export const pdfButton = () => {
    return(
        <React.Fragment>
            <Button  className="ml-4 p-button-help bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span class="material-symbols-outlined">
                picture_as_pdf
            </span> 
                 PDF
            </Button>
        </React.Fragment>
    ) 
}; 
// BOTON BRINKS Y BANCOS.
export const leftButtons = () => {
    return (
        <React.Fragment>
            <Button className="p-button-help bg-yellow-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <span className="material-symbols-outlined mr-2">account_balance</span>
            Bancos
        </Button>
       
        <Button  className="p-button-help bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span className="material-symbols-outlined">
            atm
            </span>
            Brinks
        </Button>
        </React.Fragment>
    );
};


const ComponentePadre = () => {
    return (
    <div className='mt-8 mx-auto '>

        <div className="sticky top-0 z-50 bg-white p-4">
            <h1 className="text-center text-2xl font-semibold">GRAFICOS CON RECHART</h1>
            <Toolbar className="mb-4" left={leftButtons}  right={pdfButton}></Toolbar>
        </div>

        <div className='p-8'>
            <div className="grid grid-cols-2 gap-4 justify-stretch pb-2">
                <div className>
                    <GraficoBarrasReChart />
                </div>
                <div className>
                    <GraficoBarrasReChart  />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 ">
                <div className=''>
                    <h1 className='text-center font-semibold'>GRAFICO 3</h1>
                    <GraficoTortaReChart  />
                </div>
                <div className=''>
                    <h1 className='text-center font-semibold'>GRAFICO 4</h1>
                    <GraficoTortaReChart/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
            <ComponenteTop10 />
            <ComponenteTop10 />
        </div>
        
    </div>
    )
}

export default ComponentePadre;

