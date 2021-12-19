import React, { useEffect, useState } from 'react';
import { getFortune } from './../services/fortuneService';

const Fortune = (props) => {

    const [fortuneData, setFortuneData] = useState({});

    useEffect(() => {
        getFortune().then(data => {
            setFortuneData(data.data);
        }).catch(err => console.log(err));
    }, [])

    const { title, plainText, htmlText, recitations, verses } = fortuneData;
    // console.log(verses);


    return (
        <div>
            <div className="fortunesection">
                <div className="fortunetext" >
                    <h3>{title}</h3>
                    <div className='coupletIndex'>
                        {
                            (verses || []).map((item) => (
                                <p key={item.id} className='versePosition'>{item.text}</p>
                            ))
                        }
                    </div>
                </div>

            </div >
        </div >
    );
}

export default Fortune;