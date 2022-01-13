import React, { Component } from 'react';
import SignUp from './../../components/SignUp';
import './styles.scss';

import PageHeader from '../../components/PageHeader';

class Registration extends Component {

    render() {
        return [
            <PageHeader />,
            <div className="container">
                <SignUp />
            </div>
        ]
    }
}

export default Registration;