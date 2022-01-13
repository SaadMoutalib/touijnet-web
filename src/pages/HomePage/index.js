import React from 'react';
import './styles.scss';

import Logo from './../../assets/logo-min.png';

const HomePage = props => {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <img src={Logo} alt="touijnet" />
                <h1 className="display-4 font-weight-normal">TouijNet</h1>
                <p className="lead font-weight-normal">Taste healthy home made food wherever you are. </p>
                <a className="btn btn-outline-secondary" href="#">Coming soon</a>
            </div>
        </div>
    );
};

export default HomePage;