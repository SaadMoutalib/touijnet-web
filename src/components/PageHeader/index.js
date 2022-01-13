import React from 'react';
import './styles.scss';

const PageHeader = ({ title }) => {
    return (
        <div className="page-header">
            <div className="page-header-container container">
                <div className="page-header-breadcrumb">

                </div>
                <div className="page-header-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;