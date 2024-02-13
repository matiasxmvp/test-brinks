import React from 'react';
import { Calendar } from 'primereact/calendar';

const RangoFechas = () => {
    const [dates, setDates] = React.useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar 
            value={dates} 
            onChange={(e) => setDates(e.value)} 
            selectionMode="range" 
            dateFormat="dd/mm/yy"
            placeholder="Selecciona un rango de fechas"
            readOnlyInput
            
            />
        </div>
        
    );
};

export default RangoFechas;