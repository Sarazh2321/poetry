import React, { useEffect, useState } from 'react';
import { getFortune } from '../../services/fortuneService';
import Player from '../Player/Player';

const Fortune = (props) => {

    const [fortuneData, setFortuneData] = useState({});

    useEffect(() => {
        getFortune().then(data => {
            setFortuneData(data.data);
        }).catch(err => console.log(err));
    }, [])

    const { title, plainText, htmlText, recitations, verses } = fortuneData;
    // const { mp3Url } = (recitations || [])[1];

    console.log(((recitations || [])[1] || {}).mp3Url);

    return (
        <div>
            <div className="landingpage">
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
                <div className='landingpage' style={{ backgroundColor: "#3816d1" }}>
                    <Player mp3Url={((recitations || [])[1] || {}).mp3Url} />
                    <br />
                </div>
            </div >
            <br />
        </div >
    );
}

export default Fortune;