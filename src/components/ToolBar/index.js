import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from './../../Utils';
import './styles.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Toolbar = props => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return (
        <div className="site-header__topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    <div className="topbar__item topbar__item--link">
                        <Link className="topbar-link" to="/admin">
                            My Admin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;