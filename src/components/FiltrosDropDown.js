import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import RangoFechas from './RangoFechas';
import { Button } from 'primereact/button';

const FiltrosDropDown = () => {
    const parques = [
        {label: 'Parque 1', value: 'Parque 1'},
        {label: 'Parque 2', value: 'Parque 2'},
        {label: 'Parque 3', value: 'Parque 3'},
        {label: 'Parque 4', value: 'Parque 4'},
        {label: 'Parque 5', value: 'Parque 5'}
    ];
    const sucursal = [
        {label: 'Sucursal 1', value: 'Sucursal 1'},
        {label: 'Sucursal 2', value: 'Sucursal 2'},
        {label: 'Sucursal 3', value: 'Sucursal 3'},
        {label: 'Sucursal 4', value: 'Sucursal 4'},
        {label: 'Sucursal 5', value: 'Sucursal 5'}
    ];

    const atm = [
        {label: 'ATM 1', value: 'ATM 1'},
        {label: 'ATM 2', value: 'ATM 2'},
        {label: 'ATM 3', value: 'ATM 3'},
        {label: 'ATM 4', value: 'ATM 4'},
        {label: 'ATM 5', value: 'ATM 5'}
    ];

    const [selectedParque, setSelectedParque] = React.useState(null);
    const [selectedSucursal, setSelectedSucursal] = React.useState(null);
    const [selectedATM, setSelectedATM] = React.useState(null);

    return (
        <div className="grid grid-cols-12 gap-12 ">
            <div className='col-span-2'>
                <Dropdown 
                value={selectedParque} 
                options={parques} 
                onChange={(e) => setSelectedParque(e.value)} 
                placeholder="Selecciona un parque"
                filter
                showClear
                />
            </div>
            <div className='col-span-2'>
                <Dropdown 
                value={selectedSucursal} 
                options={sucursal} 
                onChange={(e) => setSelectedSucursal(e.value)} 
                placeholder="Selecciona una Sucursal"
                filter
                showClear
                />
            </div>
            <div className='col-span-2'>
                <Dropdown 
                value={selectedATM} 
                options={atm} 
                onChange={(e) => setSelectedATM(e.value)} 
                placeholder="Selecciona un ATM"
                filter
                showClear
                />
            </div>
            <div className='col-span-4 flex justify-between ml-20'>
                <RangoFechas/>
            </div>
            <div className='col-span-2'>
            <Button
                label=""
                icon="pi pi-search"
                className="p-button-help bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            />
            </div>
        </div>
    );
};

export default FiltrosDropDown;