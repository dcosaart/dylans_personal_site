import profImg from "C:\\Users\\Dylan\\Pictures\\Dylan_11.jpg";
import { useEffect } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";


const JsSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            
            <h2 className={inView ? "card-header animateJsHeader" : "card-header"} ref={ref}>JavaScript </h2>
            <p className={inView ? "card-text animateJsText" : "card-text"} ref={ref}>JavaScript is used to create animations, and also to set up user-interaction.
                With animations, you could make objects or text <div className={inView ? "rotateText" : ""} ref={ref}>rotate</div>,
                <div className={inView ? "shrinkText" : ""} ref={ref}>shrink</div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; and expand,
                 <div className={inView ? "changeTextColor" : ""} ref={ref}>change color</div>, and to
                update text or style of components.  JavaScript is also important to the workability of the website.
                It programs when each element should be animated, event listeners to promote user-interaction, and
                necessary updates to components.</p>

            <label htmlFor="JSWikiiframe"> <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">More about JavaScript:</a></label>
            <iframe src="https://en.wikipedia.org/wiki/JavaScript" className="rounded" id="JSWikiiframe"></iframe>
            <label htmlFor="JSvid">Here is a video explaining what JavaScript is and how to use it:</label>
            <iframe id="JSvid" className="rounded" width="560" height="315" src="https://www.youtube.com/embed/Ihy0QziLDf0?si=M_RQTF-heisjX8_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            



        </>
    );
};





function Main() {
    return (
        <>
            <html lang="en">
                <body>
                    <h1>Welcome!</h1>
                    <div id="cardsSection">
                        <div className="card" id="first_section">
                            <h2 className="card-header">Navigation Tutorial</h2>
                            <p>
                                If you are an employer wishing to gain knowledge about my credibility for a role, I would suggest viewing the &quot;Resume&quot; tab, and download it if you don&apos;t have it already.  My resume will have a detailed summary of the content of this website.  After, if you wish, you could view whichever tabs you think are relevant to the position I am up for.
                                The &quot;Experience&quot; tabs lists all of my working positions, starting from the most to least recent.  Furthemore, I included the projects and skills I have worked on or acquired throughout college.
                                The &quot;Education&quot; tab contains the information about the education I have received from Wichita State and online classes, and also the organizations I have been apart of.  The &quot;Organizations&quot; tab includes a more in-depth description of each.
                                Finally, the &quot;Projects&quot;  tab lists the web development, CS50p, and CS50AI, I have done through the years.  For the web development projects, I had to convert the JavaScript associated with them to JavaScript XML. For the CS50 projects, I have a photo and description of each.  

                            </p>
                        </div>
                        <div className="card" id="second_section">
                            <h2 className="card-header">Purpose</h2>
                            <p>The purpose of this website is to show my capabilities as a computer scientist.  Creating this website with the help
                                of React, Visual Studio, Node.js, and MySqL, I learned valuable experience on working front-end and back-end.
                                I also learned how to deploy a website on a web server to properly integrate it into the public domain.
                                I used many languages like HTML, CSS, JavaScript XML, and JavaScript to build this website. I used libraries such as
                                Bootstrap, EmailJS, and Swiper to build the components of this site.  Furthermore, this website provides some
                                information about myself for you to get to know me more, and why I would be a great candidate for any role I am
                                applying for.  After months of creating this website, I am very happy to introduce it to the world!

                            </p>
                        </div>
                        <div className="card right"id="htmlSection">
                            <h2 className="card-header">HTML</h2>
                            <p className="card-text">HTML, or Hyper Text Markup Language, is used to build the structure of this website.  You are able to create many different elements;
                                such as paragraphs, headers, divisions, style of text, forms, iframes, images, and embedded videos.</p>
                            <label htmlFor="HTMLWikiiframe"> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">More about HTML:</a></label>
                            <iframe src="https://en.wikipedia.org/wiki/HTML" className="rounded" id="HTMLWikiiframe"></iframe>
                            <label htmlFor="HTMLvid">Here is a video explaining what HTML is and how to use it:</label>
                            <iframe id = "HTMLvid" width="560" height="315" src="https://www.youtube.com/embed/2oCN2q1x3c4?si=QBBb_Yl7E-SzCBn7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded"></iframe>
                        </div>

                        <div className="card" id="cssSection">
                            <h2 className="card-header">CSS</h2>
                            <p>CSS, or Cascading Style Sheets, is used to create the decoration, and overall style of the website.  You are able to do many different things with this language,
                                such as setting the background, font color and size, modify the border of elements,
                                change the layout of text and elements, and even add <div id="animationForWord">animation</div> to text or elements.</p>

                            <label htmlFor="CSSWikiiframe"> <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">More about CSS:</a></label>
                            <iframe src="https://en.wikipedia.org/wiki/CSS" className="rounded" id="CSSWikiiframe"></iframe>
                            <label htmlFor="CSSvid">Here is a tutorial on css: </label>
                            <iframe id="CSSvid" className="rounded" width="560" height="315" src="https://www.youtube.com/embed/uzF1Doc3cZQ?si=wPyYWNbZy9MCY_Jv" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>

                        <div className="card right" id="jsSection">
                            <JsSection />
                        </div>

                        <div className="card" id="reactSection">
                            <h2 className="card-header">React</h2>
                            <p>Description of <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">React</a> via Wikipedia:React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library
                                for building user interfaces based on components. It is maintained by Meta (formerly Facebook)
                                and a community of individual developers and companies. I used React, along with the front-end framework 
                                 <a href="https://en.wikipedia.org/wiki/Bootstrap_%28front-end_framework%29"> Bootstrap</a> to create 
                                this website.</p>  

                            <label htmlFor="Reactvid">Here is a video on React: </label>
                            <iframe id="Reactvid" className="rounded" width="560" height="315" src="https://www.youtube.com/embed/hn80mWvP-9g?si=FMz-v4kNH7cnxRrp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    </div>
                    

                </body>
            </html >
        </>



    );
}


export default Main