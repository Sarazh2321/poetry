import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const TopNav = () => {
    return (
        <div className="topnav">
            <img src="https://s4.uupload.ir/files/poetry_g0fs.png" />
            <Link to="/">خانه</Link>
            <Link to="/fortune">فال حافظ</Link>
            <Link to="/poets">گنجینه اشعار</Link>
            <Link to="/random">شعر تصادفی</Link>
            <button href="#signin" style={{ textAlign: 'left', justifyContent: "right" }}>ورود</button>
        </div>
    );
}

export default TopNav;