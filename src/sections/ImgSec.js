import React from 'react';

const ImgSec = (props)=>{
    let imgt = props.images;
    let imgtop = []
    let imgbtm=[]
    const Boxestop = () => {
        for (let i = 0; i < 3; i++) {
            imgtop.push(imgt[i])
        }
        return (<div className="img-top">
            {imgtop.map(el =>
                <div className={el.classname}>
                    <img src={el.image}/>
                    <div className="white-box">
                        <h6 className="cnty">{el.title}</h6>
                        <span>{el.btn}</span>
                    </div>
                </div>
            )}
        </div>)
        }

        const Boxesbtm = () => {
           let i=3
           do{
               imgbtm.push(imgt[i])
               i++
           }while (i<imgt.length)
            return (<div className="img-bottom">
                {imgbtm.map(el =>
                    <div className={el.classname}>
                    <img src={el.image}/>
                    <div className="white-box">
                        <h6 className="cnty">{el.title}</h6>
                        <span>{el.btn}</span>
                    </div>
                </div>
                )}
            </div>)
        }    
    return(<div className="improve">
            <h1>Improve the lives of millions.</h1><h1> Change yours forever</h1>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            {Boxestop()}
            {Boxesbtm()}
           </div>)    

}

export default ImgSec;