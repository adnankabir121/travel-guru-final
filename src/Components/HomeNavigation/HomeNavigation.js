import React from 'react';
import logo from '../../image.png'
import './HomeNavigation.css'
import { Link } from 'react-router-dom';
const HomeNavigation = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <a href="/home"><img className="w-75" src={logo} alt=""/></a>
                    </div>
                    <div className="col-md-3">
                        <div className="search-box">
                        <input className="w-100" type="search" name="" id="" placeholder="Search Your Destination....."/>
                        </div> 
                    </div>
                    <div className="col-md-5">                        
                        <div className="main-menu text-right">
                            <nav>
                                <ul>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Destination</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>  
                    </div>

                    <div className="col-md-2 text-center">
                    <Link to="/sign-up">
                        <button className="login-header">Login</button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNavigation;