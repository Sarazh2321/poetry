import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPoets } from './../../services/poetService';
import PoetCard from './PoetCard';

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
            <div className='landingpage'>

                <h1 style={{ fontSize: 50, textAlign: 'center' }}>صندوقچه شعرا</h1>
            </div>
            <div className='poetsdisplay'>
                {
                    (poets || []).map((poet) => (
                        <PoetCard
                            key={poet.id}
                            fullname={poet.name}
                            nickname={poet.nickname}
                            imageUrl={poet.imageUrl}
                            poetId={poet.id}
                        />
                    ))
                }
            </div>

        </div>
    );
}

export default Poets;