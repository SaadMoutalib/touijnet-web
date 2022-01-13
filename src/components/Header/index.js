import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { signOutUserStart } from './../../redux/User/user.actions';

import Logo from './../../assets/logo.png';
import ToolBar from '../ToolBar';

const mapState = (state) => ({
    currentUser: state.user.currentUser
});

const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <header className="site__header d-lg-block d-none">
            <div className="site-header">
                <ToolBar />
                <div className="site-header__nav-panel">
                    <div className="nav-panel">
                        <div className="nav-panel__container container">
                            <div className="nav-panel__row">
                                <div className="nav-logo">
                                    <Link to="/">
                                        <img src={Logo} alt="touijnet" />
                                    </Link>
                                </div>
                                <div className="nav-links">
                                    <ul>
                                        <li>
                                            <Link className='btn btn-outline-secondary' to="/">
                                                <>Home</>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-indicators">
                                    <ul>
                                        {!currentUser && [
                                            <li>
                                                <Link className='btn btn-outline-secondary' to="/registration">
                                                    <>Register</>
                                                </Link>
                                            </li>,
                                            <li>
                                                <Link className='btn btn-primary' to="/login">
                                                    <>Login</>
                                                </Link>
                                            </li>
                                        ]}

                                        {currentUser && [
                                            <li>
                                                <Link className='btn btn-outline-secondary' to="/account">
                                                    <>My Account</>
                                                </Link>
                                            </li>,
                                            <li>
                                                <Link className='btn btn-primary' to="" onClick={() => signOut()}>Logout</Link>
                                            </li>
                                        ]}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;