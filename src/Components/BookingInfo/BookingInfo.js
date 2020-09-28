import React from 'react';
import HomeNavigation from '../HomeNavigation/HomeNavigation';
import './BookingInfo.css'
import RoomDetails from '../RoomDetails/RoomDetails';
import img1 from '../../Image/Rectangle 26.png'
import img2 from '../../Image/Rectangle 27.png'
import img3 from '../../Image/Rectangle 28.png'
const BookingInfo = () => {
    return (
        <div>
            <div className="header">
                <HomeNavigation />
            </div>

            <div className="room-section">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-12 room-heading">
                            <p>252 stays Apr 13-17 3 guests</p>
                            <h2>Stay in Cox’s Bazar</h2>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="room-details">
                                    <RoomDetails heading="Light bright airy stylish apt & safe 
                                    peaceful stay" img={img1} review="4.9 (20)" pricing="$34/night" total="167$ total"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="room-details">
                                    <RoomDetails heading="Apartment in Lost Panorama" img={img2} review="4.8 (10)" pricing="$52/night" total="123$ total"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="room-details">
                                    <RoomDetails heading="AR Lounge & Pool (r&r + b&b)" img={img3} review="4.9 (25)" pricing="$44/night" total="198$ total"/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingInfo;