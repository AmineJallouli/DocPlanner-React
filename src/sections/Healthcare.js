import React from 'react';


const Healthcare = (props) => {
    let healtht = props.health;
    let leftbox = []
    let rightbox=[]
    const Boxesleft = () => {
        for (let i = 0; i < 2; i++) {
            leftbox.push(healtht[i])
        }
        return (<div className="boxes-left">
            {leftbox.map(el =>
                <div className={el.classname}>
                    <img src={el.image} />
                    <h3>{el.title}</h3>
                    <p>{el.p}</p>
                </div>
            )}
        </div>)
        }

        const Boxesright = () => {
           let i=2
           do{
               rightbox.push(healtht[i])
               i++
           }while (i<healtht.length)
            return (<div className="boxes-right">
                {rightbox.map(el =>
                    <div className={el.classname}>
                        <img src={el.image} />
                        <h3>{el.title}</h3>
                        <p>{el.p}</p>
                    </div>
                )}
            </div>)
        }    

    return (<div className="healthcare">
        <div class="title">
            <h2>The world's<br />
                biggest healthcare platform</h2>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <img src="https://www.docplanner.com/img/logo.png" />
        </div>
        <div className="boxes">
            {Boxesleft()}
            {Boxesright()}
        </div>
    </div>)
}

export default Healthcare;