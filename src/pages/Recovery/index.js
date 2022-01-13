import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmailPassword from './../../components/EmailPassword';

const Recovery = props => {
    return [
        <PageHeader />,
        <div className="container">
            <EmailPassword />
        </div>
    ];
}

export default Recovery;