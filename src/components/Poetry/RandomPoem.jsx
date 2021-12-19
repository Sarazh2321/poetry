import React, { useEffect, useState } from 'react';
import { getRandomPoem } from '../../services/poemService';

const RandomPoem = (props) => {

    const [fortuneData, setFortuneData] = useState({});

    useEffect(() => {
        getRandomPoem().then(data => {
            setFortuneData(data.data);
        }).catch(err => console.log(err));
    }, [])

    const { fullTitle, htmlText, verses } = (fortuneData || {});

    return (
        <div>
            <div className="landingpage">
                <div className="fortunetext" >
                    <h3>{fullTitle}</h3>
                    <div className='coupletIndex'>
                        {
                            (verses || []).map((item) => (
                                <p key={item.id} className='versePosition'>{item.text}</p>
                            ))
                        }
                    </div>
                </div>
            </div >
            <br />
        </div >
    );
}

export default RandomPoem;