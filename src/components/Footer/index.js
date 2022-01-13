import React from 'react';
import Logo from './../../assets/logo.png'
import "./styles.scss";

const Footer = props => {
    return (
        <footer className="site__footer">
            <div className="site-footer">
                <div className="container">
                    <div className="site-footer__widgets">
                        <img src={Logo} alt='touijnet' style={{ width: "6rem" }} />
                    </div>
                    <div class="site-footer__bottom">

                        <div class="site-footer__copyright">
                            TouijNet —
                            2022
                        </div>
                    </div>
                </div>
                <div className="totop">
                    <div className="totop__body">
                        <div className="totop__start">
                        </div>
                        <div className="totop__container container">
                        </div>
                        <div className="totop__end">
                            <button type="button" className="totop__button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" className="">
                                    <path d="M11.4 7.7l-4.9-5-4.9 5c-.4.4-.9.4-1.3 0s-.4-.9 0-1.3L6.5 0l6.2 6.4c.4.4.3.9 0 1.3s-.9.4-1.3 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;