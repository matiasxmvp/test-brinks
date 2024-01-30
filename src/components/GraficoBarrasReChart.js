
import React, { useState }from 'react'
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis,Bar, YAxis, Tooltip, Legend } from 'recharts'
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


//Array que alimenta el grafico de barras.
const GraficoBarrasReChart = () => {
    const [showingLast30Days, setShowingLast30Days] = useState(false);

    const dataOptions={
        'Banco Estado':[{

        }

        ],
        'Banco Santander':[{

        }

        ],
        'Banco de Chile':[{

        }

        ]
    }
    const [data] = useState([
        { name: "Matias", age: 10, weight: 80, moles : 40 },
        { name: "Matias2", age: 11, weight: 60, moles : 50 },
        { name: "Matias3", age: 13, weight: 65, moles : 40 },
        { name: "Matias4", age: 15, weight: 70, moles: 80 },
        { name: "Matias5", age: 17, weight: 75, moles : 200 },
        { name: "Matias6", age: 19, weight: 85, moles : 300 },
    ]);

    const [data2] = useState([
        { name: "Fer", age: 12, weight: 60 ,moles : 300},
        { name: "Fern2", age: 14, weight: 90 ,moles: 200},
        { name: "Fer3", age: 16, weight: 70 ,moles : 100},
        { name: "Fer4", age: 18, weight: 60 ,moles : 50},
        { name: "Fer5", age: 20, weight: 55 ,moles : 25},
        { name: "Fer6", age: 22, weight: 45 ,moles : 30},
    ]);


    const handleFilterBy7Days = () => {
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - 7); // Retroceder 7 días

        console.log("Fecha de inicio de los últimos 7 días:", startDate.toLocaleDateString());

        
        setShowingLast30Days(false); // Asegúrate de que esté mostrando los últimos 7 días
    }

    const handleFilterBy30Days = () => {
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        startDate.setDate(startDate.getDate() - 30); // Retroceder 30 días

        console.log("Fecha de inicio de los últimos 30 días:", startDate.toLocaleDateString());

        setShowingLast30Days(true); // Establece el estado para mostrar los últimos 30 días
    }

    const getDataToShow = () => {
        return showingLast30Days ? data2 : data;
    }

    const nodes = [
        { label: 'Banco Estado', value: 'Banco Estado' },
        { label: 'Banco Santander', value: 'Banco Santander' },
        { label: 'Banco de Chile', value: 'Banco de Chile' },
    ];

    
    const [currentData, setCurrentData] = useState(dataOptions['Banco Estado']);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);       


    return (
        <Card>
            <div className="text-center font-semibold mb-4">
                <h1>GRAFICO 1</h1>
            </div>

            <div className='flex flex-col mb-8 items-center'>
                <div className='flex justify-between'>
                    <div className=" ">
                        <Dropdown
                            value={selectedNodeKey}
                            onChange={(e) => {
                                setSelectedNodeKey(e.value);
                                if (e.value in dataOptions) {
                                    setCurrentData(dataOptions[e.value]);
                                }
                            }} 
                            options={nodes}
                            placeholder="Seleccione Banco"
                        />
                    </div>
                    <div className='mr-4 ml-4'>
                        <Button
                            label="Export"
                            icon="pi pi-upload"
                            className="p-button-help bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        />
                    </div>
                </div>     
            </div>


            <div className="flex flex-col items-center">
                <div className="w-full">
                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart 
                            data={getDataToShow()} 
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="4 1 2"/>
                            <XAxis dataKey="sex"/> 
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="weight" fill="#6b48ff"/>
                            <Bar dataKey= "age" fill="#1ee3cf" />
                            <Bar dataKey= "moles" fill="#0a8aae"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
    
                <div className="mt-4">
                    <Button className="mr-4" onClick={handleFilterBy7Days}>
                        <i className='pi pi-calendar'></i>
                        Últimos 7 días
                    </Button>
                    <Button onClick={handleFilterBy30Days}>
                        <i className='pi pi-calendar'></i>
                        Últimos 30 días
                    </Button>
                </div>
            </div>
        </Card>
    );
}
export default GraficoBarrasReChart;