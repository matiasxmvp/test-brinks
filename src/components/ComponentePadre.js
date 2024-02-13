import React  from 'react'
import 'primeicons/primeicons.css';
import GraficoBarrasReChart from './GraficoBarrasReChart';
import GraficoTortaReChart from './GraficoTortaReChart';
import ComponenteTop10 from './ComponenteTop10';
import FiltrosDropDown from './FiltrosDropDown';
import { Button } from 'primereact/button';
import RangoFechas from './RangoFechas';


//Dropdown con busqueda que ira en el toolbar







const ComponentePadre = () => {
    return (
    <div className='mt-8 mx-auto '>
        <div className="sticky top-0 z-50 bg-white p-4">
            <h1 className="text-center text-2xl font-semibold">DASHBOARD BRINKS</h1>
            <div className=' flex justify-between'>
            <FiltrosDropDown/>
                    </div>
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
        </div>
        
    </div>
    )
}

export default ComponentePadre;

