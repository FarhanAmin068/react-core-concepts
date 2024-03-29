/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h3>I have a device:{props.name}</h3>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;