import React from 'react';
import './styles.scss';
import SignIn from './../../components/SignIn';

import PageHeader from '../../components/PageHeader';

const Login = props => {
    return [
        <PageHeader />,
        <div className="container">
            <SignIn />
        </div>
    ];
}

export default Login;