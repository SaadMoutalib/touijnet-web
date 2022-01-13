import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

const mapState = ({ user, ordersData }) => ({
    currentUser: user.currentUser
})

const Dashboard = props => {
    const { currentUser } = useSelector(mapState);

    return (
        <div className="dashboard">
            <div className="dashboard__profile card profile-card">
                <div className="card-body profile-card__body">
                    <div className="profile-card__avatar"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
                    <div className="profile-card__name">
                        {currentUser.displayName}
                    </div>
                    <div className="profile-card__email">
                        {currentUser.email}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;