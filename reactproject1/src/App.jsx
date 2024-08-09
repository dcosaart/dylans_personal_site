//import { useState } from 'react'
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './App.js';
import Home from './Home.jsx';
import AboutMe from './aboutMe.jsx';
import Career from './Career.jsx';
import Education from './Education.jsx';
import Orgs from './Orgs.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Linkdin_logo from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\linkdin_link1.png";
import Github_logo from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Git_Hub_link.png";
import Email_logo from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\email_logo2.png";
import Phone_logo from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Phone_logo.png";
import profImg from "C:\\Users\\Dylan\\Pictures\\Dylan_11.jpg";

function Tab() {

    useEffect(() => {
        // Get all tab buttons
        const tabButtons = document.querySelectorAll('.nav-link');

        // Add click event listener to each tab button
        tabButtons.forEach(function (tabButton) {
            tabButton.addEventListener('click', function (event) {
                setActive(event, tabButton);
            });
        });
    }, []);

    function setActive(event, tabButton) {
        // Prevent default behavior of the link
        event.preventDefault();

        // Get all tab buttons
        const tabButtons = document.querySelectorAll('.nav-link');

        // Remove "active" class from all tab buttons
        tabButtons.forEach(function (btn) {
            if (btn.className == "nav-link active") {
                btn.classList.remove('active');
                const contentId = btn.id.replace('-tab', '');
                const content = document.getElementById(contentId);
                content.classList.remove('show');
                content.classList.remove('active');
            }
        });

        // Add "active" class to the clicked tab button
        tabButton.classList.add('active');
        const contentId = tabButton.id.replace('-tab', '');
        const content = document.getElementById(contentId);
        content.classList.add('show');
        content.classList.add('active');
    }


    return(
        <>
            

            <div id='body'>

                <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button className="nav-link" id="nav-about-me-tab" data-bs-toggle="tab" data-bs-target="#nav-about-me" type="button" role="tab" aria-controls="nav-about-me" aria-selected="false">About Me</button>
                        <button className="nav-link" id="nav-career-tab" data-bs-toggle="tab" data-bs-target="#nav-career" type="button" role="tab" aria-controls="nav-career" aria-selected="false">Experience</button>
                        <button className="nav-link" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Education</button>
                        <button className="nav-link" id="nav-organizations-tab" data-bs-toggle="tab" data-bs-target="#nav-organizations" type="button" role="tab" aria-controls="nav-education" aria-selected="false">Organizations</button>
                        <button className="nav-link" id="nav-projects-tab" data-bs-toggle="tab" data-bs-target="#nav-projects" type="button" role="tab" aria-controls="nav-projects" aria-selected="false">Projects</button>
                        <button className="nav-link" id="nav-resume-tab" data-bs-toggle="tab" data-bs-target="#nav-resume" type="button" role="tab" aria-controls="nav-resume" aria-selected="false">Resume</button>
                        <button className="nav-link" id="nav-testimonials-tab" data-bs-toggle="tab" data-bs-target="#nav-testimonials" type="button" role="tab" aria-controls="nav-testimonials" aria-selected="false">Testimonials</button>


                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Home /></div>
                    <div className="tab-pane fade" id="nav-about-me" role="tabpanel" aria-labelledby="nav-about-me-tab"><AboutMe /></div>
                    <div className="tab-pane fade" id="nav-career" role="tabpanel" aria-labelledby="nav-career-tab"><Career /></div>
                    <div className="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab"><Education /></div>
                    <div className="tab-pane fade" id="nav-organizations" role="tabpanel" aria-labelledby="nav-organizations-tab"><Orgs /></div>
                    <div className="tab-pane fade" id="nav-projects" role="tabpanel" aria-labelledby="nav-projects-tab"><Projects /></div>
                    <div className="tab-pane fade" id="nav-resume" role="tabpanel" aria-labelledby="nav-resume-tab"><Resume /></div>
                    <div className="tab-pane fade" id="nav-testimonials" role="tabpanel" aria-labelledby="nav-testimonials-tab"><h1>COMING SOON!</h1></div>
      
                </div>
            </div>


        </>
    )
}

function App() {
 

  return (
      <>
        <header>
              <h1 id='title'>Dylan<span>/</span>Cossaart</h1>
              <h1 id='subtitle'>Computer Scientist<span>&nbsp;|&nbsp;</span>Data Analyst</h1>
              <p> <a href="tel:+17858290293">(785)829-0293</a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:DylanJCossaart@outlook.com?subject=Saying%20Message%20from%20Your%20Website">DylanJCossaart@outlook.com</a></p>
        </header>

          <div id='link_tab'>
              <a href="tel:+17858290293"><img src={Phone_logo} alt="phone_logo"></img></a>
              <a href="mailto:DylanJCossaart@outlook.com?subject=Saying%20Message%20from%20Your%20Website">
                  <img src={Email_logo} alt="email_logo"></img>
              </a>
                  <a href="https://www.linkedin.com/in/dylan-cossaart-51281424a" target="_blank">
                      <img src={Linkdin_logo} alt="linkdin_logo"></img>
                  </a>
          
                  <a href="https://github.com/dcosaart" target="_blank">
                      <img src={Github_logo} alt="github_logo"></img>
                  </a>
        </div>

        <div id="tab" >
            <Tab />
        </div>  

    </>
  )
}

export default App;
