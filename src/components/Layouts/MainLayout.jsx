import React, { Fragment } from 'react'
import TopNav from './../Navs/TopNav';
import BottomNav from './../Navs/BottomNav';
import { withRouter } from 'react-router-dom';

const MainLayout = (props) => {

    const { pathname } = props.location;

    return (

        <Fragment>
            <div className='back'>
                {pathname == "/fortune" ? null : <TopNav />}
                {props.children}
                {pathname == "/fortune" ? null : <BottomNav />}
            </div>
        </Fragment>
    );
}

export default withRouter(MainLayout);