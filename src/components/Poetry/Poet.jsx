import React, { useEffect, useState } from "react";
import { getSinglePoet } from "../../services/poetService";
import config from "../../services/config.json";
import { getCatPoems } from './../../services/categoryService';

const Poet = ({ match }) => {
    const poetId = match.params.id;

    const [data, setData] = useState({});
    // const [cat, setCat] = useState({});
    // const [poet, setPoet] = useState({});

    useEffect(() => {
        getSinglePoet(poetId)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const { poet, cat } = (data || {});

    const {
        name,
        description,
        nickname,
        imageUrl,
        birthYearInLHijri,
        deathYearInLHijri,
        birthPlace,
        deathPlace,
    } = (poet || {});

    const { children } = (cat || {});

    const handleCatButton = catId => {
        getCatPoems(catId).then(response => {
            console.log(response.data);
        }).catch((error) => console.log(error));
    }

    return (
        <div className="poetstatus">
            <div className="poetdesc" >
                <p>شرح حال: {description}</p>
                <div className="categories">
                    {
                        (children || []).map(item => (
                            <div key={item.id} className="cat">
                                <button onClick={() => handleCatButton(item.id)}>
                                    {item.title}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="poetinfo">
                <img src={`${config.ganjoor}${(imageUrl || '2')}`} />
                <h1 style={{ fontSize: 30 }}>{name}</h1>
                <p style={{ fontsize: 20 }}>{`ملقب به ${nickname}`}</p>
                <div className="pisection">
                    <text style={{ flex: 1 }}>تولد: {birthYearInLHijri}</text>
                    <text style={{ flex: 1 }}>وفات: {deathYearInLHijri}</text>
                </div>
            </div>
        </div>
    );
};

export default Poet;
