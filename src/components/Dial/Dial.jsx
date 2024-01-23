/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple' ,margin:'20px'}}>
            <h3>This is dial component</h3>
           <p> Your Steps count:{props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;