import React from 'react';

const Docs =(props)=>{
    return(<div className="docs">
        {props.docs.map(el =>
            <div className={el.classname}>
                <img src={el.image}/>
                <span>{el.name}</span>
            </div>
        )}
    </div>

    )
}

export default Docs;