import React from 'react'

const Header =(props) =>{
    return(<section>
        <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1'></img>
        <div className="header-btn">
            <span className="about-us"><a href="#">About us</a></span>
            <span className="career"><a href="#">Career</a></span>
            <div className="dep">   
                <a href="#" className="departments">Departments</a>
                    <div className="dropdown-dep">
                            <ul>
                                <li>Marketing & PR</li>
                                <li>Customer sucsess & Sales</li>
                                <li>IT, Product, Design & UX</li>
                                <li>Finance & Administration</li>
                                <li>HR & more</li>
                            </ul>
                    </div>
            </div>    
        </div>
    </section>)
}

export default Header