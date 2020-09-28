import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";
const Card = (props) => {
    return (
        <div>
            <div className="single-card mb-4">
                <div className="card-image">
                    <img className="" src={props.image} alt="" />
                </div>
                <div className="card-text">
                    <h1>{props.heading}</h1>
                    <Link to="/booking-info">
                        <button className="btn btn-success w-100">Booking</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Card;