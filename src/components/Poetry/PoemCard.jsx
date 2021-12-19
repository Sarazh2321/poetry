import React, { useEffect, useState } from 'react';
import { getSinglePoem } from '../../services/poemService';

const PoemCard = ({ title, excerpt, poemId }) => {

    const [data, setData] = useState({})
    const [verses, setVerses] = useState([]);
    const [showPoem, setShowPoem] = useState(false);

    let poemSection = null;

    const handleShowPoem = () => {
        getSinglePoem(poemId).then(response => {
            // console.log(response.data);
            setData(response.data);
            setVerses((data.verses || []));
            setShowPoem(!showPoem);
        }).catch((error) => console.log(error));


    }

    return (
        <div>
            <div className='poemcard'>
                <text className='post'>تک مصرع : {excerpt}</text>
                <text className='post'>عنوان : {title}</text>
                <button className='info' onClick={handleShowPoem}>
                    {!showPoem ? "خواندن" : "بستن"}
                </button>
            </div>
            {
                showPoem == true ? (
                    <div className="fortunetext" >
                        <div className='coupletIndex'>
                            {
                                (verses || []).map((item) => (
                                    <p key={item.id} className='versePosition'>{item.text}</p>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default PoemCard;