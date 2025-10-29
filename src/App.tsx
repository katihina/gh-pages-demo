import React, { useEffect, useState } from 'react';
import api from './api';
import type { RESPONSE_DATA } from './api';
import './App.css';

function App() {
    const [data, setData] = useState<RESPONSE_DATA>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get.data();
            setData(response);
        };

        fetchData();
    }, []); // Пустой массив зависимостей = выполнить только при монтировании

    return (
        <div className='App'>
            {data ? <p>{data.greeting}</p> : 'no data'}
        </div>
    );
}

export default App;
