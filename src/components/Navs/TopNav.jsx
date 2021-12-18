import React from 'react'


const TopNav = () => {
    return (
        <div className="topnav">
            <img src="/images/poetry.png" />
            <a href="#home">خانه</a>
            <a href="#about">فال حافظ</a>
            <a href="#news">گنجینه اشعار</a>
            <a href="#contact">درباره ما</a>
            <button href="#signin" style={{ textAlign: 'left', justifyContent: "right" }}>ورود</button>
        </div>
    );
}

export default TopNav;