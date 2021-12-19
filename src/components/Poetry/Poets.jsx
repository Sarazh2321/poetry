import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPoets } from './../../services/poetService';

const Poets = (props) => {

    const [poets, setPoets] = useState([]);

    useEffect(() => {
        getPoets().then(response => {
            setPoets(response.data);
        }).catch((error) => console.log(error));
    }, []);

    console.log(poets);

    return (
        <div>
            <h1>Salam</h1>
            <Link to="poet/2">Hafez</Link>
        </div>
    );
}

export default Poets;