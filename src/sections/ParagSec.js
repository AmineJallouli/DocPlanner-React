import React from 'react'

const paragSec = (props) => {
    return (<div  className="intro">
        <img src="https://www.docplanner.com/img/sygnet.png"></img>
        <h1>Making the healthcare experience more human</h1>
        <div className="parag">
            {props.parag.map(el=><p className={el.className}>{el.p}</p>)}
        </div>
    </div>);
}
export default paragSec;