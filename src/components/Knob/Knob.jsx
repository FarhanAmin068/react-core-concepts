/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid purple' ,margin:'20px'}}>
            <h3>This is knob component</h3>
            <p>Your steps count:{props.steps}</p>
        </div>
    );
};

export default Knob;