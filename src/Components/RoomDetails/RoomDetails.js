import React from 'react';
import './RoomDetails.css'
import icon from '../../Icon/star_1_.png'
const RoomDetails = (props) => {
    return (
        <div>
            <img src={props.img} alt=""/>
            <h2 className="heading my-4">{props.heading}</h2>
            <p>4 guests   2 bedrooms   2 beds   2 baths</p>
            <p>Wifi Air conditioning Kitchen</p>
            <p>Cancellation fexibility availiable</p>
            <img className = "star"src={icon} alt=""/>
            <span className="mx-2">{props.review}</span>
            <span className="mx-2">{props.pricing}</span>
            <span className="mx-2">{props.total}</span>
        </div>
    );
};

export default RoomDetails;