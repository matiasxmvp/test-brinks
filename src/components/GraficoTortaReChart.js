
import React, { useState} from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend} from 'recharts'
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

//Aqui comienza el grafico de torta

const COLORS =['#7270bc', '#332edd','#dd2ed4','#2eddc7','#9fdd2e','#dda92e'

]

const dataOptions = {
    'Banco Estado': [
        {name:"Grupo A", value: 2400},
        {name:"Grupo B", value: 3400},
        {name:"Grupo C", value: 4400},
        {name:"Grupo D", value: 5400},
        {name:"Grupo F", value: 6400},
    ],
    'Banco Santander': [
        {name:"Grupo A", value: 1400},
        {name:"Grupo B", value: 2400},
        {name:"Grupo C", value: 3400},
        {name:"Grupo D", value: 2400},
        {name:"Grupo F", value: 10000},
    ],
    'Banco de Chile': [
        {name:"Grupo A", value: 1400},
        {name:"Grupo B", value: 2400},
        {name:"Grupo C", value: 3400},
        {name:"Grupo D", value: 4400},
        {name:"Grupo F", value: 5400},
    ]
};
  
const nodes = [
    { label: 'Banco Estado', value: 'Banco Estado' },
    { label: 'Banco Santander', value: 'Banco Santander' },
    { label: 'Banco de Chile', value: 'Banco de Chile' },
];

const GraficoTortaReChart = () => {
    const [currentData, setCurrentData] = useState(dataOptions['Banco Estado']);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    

    return (
        <Card>
            <div style={{ width: '80%', height: 300 }}>
            <Dropdown
                value={selectedNodeKey}
                onChange={(e) => {
                    setSelectedNodeKey(e.value);
                    if (e.value in dataOptions) {
                        setCurrentData(dataOptions[e.value]);
                    }
                }} 
                options={nodes}
                className="place-content-start border-2"
                placeholder="Seleccione Banco"
            />

            <div className="ml-40">
                <ResponsiveContainer className="pb-8"width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={currentData}
                            dataKey="value"
                            innerRadius={70}
                            outerRadius={125}
                            fill="#82ca9d"
                        >
                            {currentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
        </Card>
        
    );
};
export default GraficoTortaReChart;




