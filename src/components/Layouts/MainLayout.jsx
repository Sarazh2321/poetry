import React, { Fragment } from 'react'
import TopNav from './../Navs/TopNav';
import { withRouter } from 'react-router-dom';

const MainLayout = (props) => {

    const { pathname } = props.location;

    return (

        <Fragment>
            <div className='back'>
                <TopNav />
                {props.children}
            </div>
        </Fragment>
    );
}

export default withRouter(MainLayout);