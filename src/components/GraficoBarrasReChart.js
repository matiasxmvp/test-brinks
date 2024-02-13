
import React, { useState }from 'react'
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis,Bar, YAxis, Tooltip, Legend } from 'recharts'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


//Array que alimenta el grafico de barras.
const GraficoBarrasReChart = () => {
    const [showingLast30Days, setShowingLast30Days] = useState(false);


    const [data] = useState([
        { name: "Banco 1", age: 10, weight: 80, moles : 40 },
        { name: "Banco 2", age: 11, weight: 60, moles : 50 },
        { name: "Banco 3", age: 13, weight: 65, moles : 40 },
        { name: "Banco 4", age: 15, weight: 70, moles: 80 },
        { name: "Banco 5", age: 17, weight: 75, moles : 200 },
        { name: "Banco 6", age: 19, weight: 85, moles : 300 },
    ]);

    const [data2] = useState([
        { name: "Banco 1", age: 12, weight: 60 ,moles : 300},
        { name: "Banco 2", age: 14, weight: 90 ,moles: 200},
        { name: "Banco 3", age: 16, weight: 70 ,moles : 100},
        { name: "Banco 4", age: 18, weight: 60 ,moles : 50},
        { name: "Banco 5", age: 20, weight: 55 ,moles : 25},
        { name: "Banco 6", age: 22, weight: 45 ,moles : 30},
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

    
       


    return (
        <Card>
            <div className="text-center font-semibold mb-4">
                <h1>GRAFICO BARRAS</h1>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-full">
                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart 
                            data={getDataToShow()} 
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="4 1 2"/>
                            <XAxis dataKey="name"/> 
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
                        Últimas 24Hrs
                    </Button>
                    <Button onClick={handleFilterBy30Days}>
                        <i className='pi pi-calendar'></i>
                        Últimos 7 días
                    </Button>
                </div>
            </div>
        </Card>
    );
}
export default GraficoBarrasReChart;