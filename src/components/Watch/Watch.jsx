
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';


const Watch = () => {
    const [steps,setSteps]= useState(0);
const increaseSteps = () =>{
const nextSteps=steps+1;
setSteps(nextSteps);
}

useEffect(()=>{
console.log(steps)
},[steps])
    return (
        <div style={{border:'2px solid red', margin:'10px'}}>
            <h2>This is my smart watch</h2>
            <p>steps:{steps}</p>
            <button onClick={increaseSteps}>De dour......</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;
