import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Progress from "react-progressbar";

const Player = ({ mp3Url }) => {

    const [start, setStart] = useState(false);
    const [playChar, setPlayChar] = useState('▶️');
    const [muted, setMuted] = useState(false);
    const [playedRange, setPlayedRange] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [progressRate, setProgressRate] = useState(0);

    const handleStart = () => {
        setStart(!start);
        if (playChar === '▶️') {
            setPlayChar('⏹️');
        }
        else {
            setPlayChar('▶️');
        }
    }

    return (
        <div>
            <ReactPlayer
                url={mp3Url}
                playing={start}
                height={10}
                onProgress={({ played, playedSeconds }) => {
                    setProgressRate(played * 100)
                    setPlayedRange(playedSeconds - (minutes * 60));
                    setMinutes(Math.floor(playedSeconds / 60))
                }}
                muted={muted}
            />
            <Progress completed={progressRate} />
            <text style={{ color: 'white', marginRight: 15 }}>{`${minutes} : ${Math.floor(playedRange)}`}</text>
            <button
                className='mediabtn'
                onClick={handleStart}>{playChar}</button>
            <button
                className='mediabtn'
                onClick={() => setMuted(!muted)}>🔇</button>
        </div>
    );
}

export default Player;