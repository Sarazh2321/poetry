import React from 'react';
import { Link } from 'react-router-dom';
import config from "../../services/config.json";

const PoetCard = ({ fullname, nickname, imageUrl, poetId }) => {

    return (
        <div className='poetcard'>
            <img src={`${config.ganjoor}${imageUrl}`} />
            <h3>{fullname}</h3>
            <p>{`ملقب به ${nickname}`}</p>
            <button>
                <Link to={`/poet/${poetId}`} style={{ color: 'white' }}>اطلاعات بیشتر</Link>
            </button>
        </div>
    );
}

export default PoetCard;