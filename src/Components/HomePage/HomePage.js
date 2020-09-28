import React from 'react';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import './HomePage.css'
import Card from '../Card/Card';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import Sundarban from '../../Image/sundorbon.png';
const HomePage = () => {
    return (
        <div>
            <div className="header">
                <HomeNavigation />
            </div>

            <div className="hero-area hero-bg">
                
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <Card heading="Coxs-Bazar" image={Sajek}/>
                        </div>
                        <div className="col-md-6">
                            <Card heading="Sajek" image={Sreemongol}/>
                        </div>
                        <div className="col-md-6">
                            <Card heading="Sundarban" image={Sundarban}/>
                        </div>
                        <div className="col-md-6">
                            <Card heading="Sreemongol" image={Sreemongol}/>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default HomePage;