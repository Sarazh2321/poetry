import React, { useEffect, useState } from 'react';
import { getSinglePoet } from '../../services/poetService';
import config from "../../services/config.json";

const Poet = ({ match }) => {

    const poetId = match.params.id;

    console.log(poetId);

    const [poet, setPoet] = useState({});

    useEffect(() => {
        getSinglePoet(poetId).then(response => {
            setPoet(response.data);
        }).catch((error) => console.log(error));
    }, []);

    console.log(poet);

    return (
        <div>
            <h2>
                Bye Bye
            </h2>
            <img src={`${config.ganjoor}${poet.poet.imageUrl}`} />
        </div>
    );
}

export default Poet;