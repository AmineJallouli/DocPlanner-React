import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParagSec from './sections/ParagSec'
import Header from './sections/HeaderSec'
import Patdoc from './sections/Patdoc';
import Docs from './sections/Docs';
import Healthcare from './sections/Healthcare'
import ImgSec from './sections/ImgSec'
import Footer from "./sections/Footer"

const parag=[{className:"p1",p:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},
{className:"p2",p:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}]

const patdoc=[{classname:"patients",title:"For patients", parag:"Find a doctor, book a visit and solve any health-related doubt",image:'https://www.docplanner.com/img/screen-marketplace@2x.png'},
{classname:"doctors",title:'For doctors', parag:'Save time managing visits and cut no-shows by half',image:'https://www.docplanner.com/img/screen-saas@2x.png'}]

const docs=[{classname:"znamy",name:"ZnamyLekar",image:"https://www.docplanner.com/img/sygnet.png"},
            {classname:"doc",name:"Doctoralia", image:"https://www.docplanner.com/img/sygnet.png"},
            {classname:"mio",name:"MioDottore", image:"https://www.docplanner.com/img/sygnet.png"},
            {classname:"doktor",name:"DoktorTakvimi",image:"https://www.docplanner.com/img/sygnet.png"},
            {classname:"znanyl",name:"ZnanyLekarz", image:"https://www.docplanner.com/img/sygnet.png"}]

const health=[{classname:'leader',image:'https://www.docplanner.com/img/flag.png',title:'Leader in 10 countries',       p:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
              {classname:'patient',image:'https://www.docplanner.com/img/patients.png',title:'30 million unique patients',p:'visit us every month'},
              {classname:'appointment',image:'https://www.docplanner.com/img/visits.png',title:'1.5 million appointments',p:'booked last month'},
              {classname:'docters',image:'https://www.docplanner.com/img/doctors.png',title:'2 million active doctors',p:'trust in our solutions'}]

const images=[{classname:"Warsaw",image:"https://www.docplanner.com/images/warsaw.png",title:"Warsaw",btn:"SEE    OPENINGS"},
              {classname:"barcelona",image:"https://www.docplanner.com/images/barcelona.png",title:"Barcelona",btn:"SEE OPENINGS"},
              {classname:"istanbul",image:"https://www.docplanner.com/images/istanbul.png",title:"Istanbul",btn:"SEE OPENINGS"},
              {classname:"rome",image:"https://www.docplanner.com/images/rome.png",title:"Rome",btn:"SEE OPENINGS"},
              {classname:"mexico",image:"https://www.docplanner.com/images/mexico-city.png",title:"Mexico",btn:"SEE OPENINGS"},
              {classname:"curitiba",image:"https://www.docplanner.com/images/curitiba.png",title:"Curitiba",btn:"SEE OPENINGS"}]


const a=["Poland","Turkey","Spain","Italy","Czech Republic","Mexico","Colombia","Brazil","Argentina","Chile"]

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>  
        <div>
            <ParagSec parag={parag}/>
        </div>
        <Patdoc patdoc={patdoc}/> 
        <section className="global">
          <h2>We are a global company with local culture</h2>
          <Docs docs={docs}/>
        </section>
        <div className="healthcare">
          <Healthcare health={health}/>
        </div>

        <ImgSec images={images}/>

      </main>
      <footer>
        <Footer a={a}/>
      </footer>
      
    </div>
  );
}

export default App;
