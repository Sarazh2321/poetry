import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="landingpage-part">
                <p>تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و هنر،
                    از دیرباز با شعر و ادبیات در هم پیچیده و ایران،
                    مهد پرورش شاعران بزرگی بوده و درپیر دار فراز
                    و نشیب هایی که در طول تاریخ بر آن گذشته، اما
                    شاهنامه وزین و پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا
                    و عشق بازی اش با حق، غزل های عاشقاهنه و عارفانه عالم گیر
                    در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار نیشابوری
                    همه و همه همچون مرهمی بر زخم های کوچک و برزگش تسکین داده اند.</p>
                <div >
                    <button>
                        <Link to="/poets" style={{ color: 'white' }}> گنجینه اشعار</Link>
                    </button>
                    <button>
                        <Link to="/fortune" style={{ color: 'white' }}>فال حافط</Link>
                    </button>
                </div>
            </div>
            <img src="/images/hafez_mainpage.jpg" />

        </div>
    );
}

export default LandingPage;