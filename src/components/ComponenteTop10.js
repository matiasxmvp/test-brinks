import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import React from 'react'




//DATA TOP 10

const ComponenteTop10 = () => {
    const data3 = [
        { id: 1, name: 'Equipo 1', value: 100 },
        { id: 2, name: 'Equipo 2', value: 95 },
        { id: 3, name: 'Equipo 3', value: 90 },
        { id: 4, name: 'Equipo 4', value: 85 },
        { id: 5, name: 'Equipo 5', value: 80 },
        { id: 6, name: 'Equipo 6', value: 75 },
        { id: 7, name: 'Equipo 7', value: 70 },
        { id: 8, name: 'Equipo 8', value: 65 },
        { id: 9, name: 'Equipo 9', value: 60 },
        { id: 10, name: 'Equipo 10', value: 55 }
    ];
    
    return (
        <Card>
            <div>
            <h2 className='font-semibold text-center'>TOP 10 EQUIPOS MAS GIRADORES</h2>
            <DataTable value={data3}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Nombre"></Column>
                <Column field="value" header="Valor"></Column>
            </DataTable>
        </div>
        </Card>
        
    );
}

export default ComponenteTop10 ;