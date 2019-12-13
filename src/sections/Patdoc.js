import React from 'react'

const Patdoc = (props) =>{
    return(<section className="pd">
                {props.patdoc.map(el=> 
                <div className={el.classname}>
                    <div className="title">
                        <h3>{el.title}</h3>
                        <h2>{el.parag}</h2>
                    </div>
                    <div class="country">
                    <select class="select">
                        <option>CHOOSE COUNTRY</option>
                        <option>ARGENTINA</option>
                        <option>AUSTRALIA</option>
                        <option>BRAZIL</option>
                        <option>CHILE</option>
                        <option>COLOMBIA</option>
                        <option>CZECH</option>
                        <option>FRANCE</option>
                        <option>ITALY</option>
                        <option>MEXICO</option>
                        <option>PERU</option>
                        <option>POLAND</option>
                        <option>PORTUGAL</option>
                        <option>SPAIN</option>
                        <option>TURKEY</option>
                        <option>UK</option>
                    </select>
                </div>    
                        <img src={el.image}/>
                    
                </div>
                                                 )}
           </section>
    );
}

export default Patdoc;