import React from 'react';

const Footer = (props) =>{
    let Footert=props.a;

    return (<div>
        <p>We are leaders in 10 countries: {Footert.map(el=><a href="#">{el},</a>)}</p>
        <p className="site">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser. www.docplanner.com © 2019</p>
        </div>)
}
  
export default Footer;