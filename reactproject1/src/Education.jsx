import { useEffect } from "react";
import Video from "C:\\Users\\Dylan\\Pictures\\WSUvid.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Education.css";
import Transcript from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Transcript.pdf"



const College = () => {
    return (
        <>
            <section id="transcript">
                <h3>Transcript</h3>
                <div id="highlights">
                    <h4>Highlights</h4>
                    <p>As of summer 2024, I am going into my junior year at Wichita State.  Two more years under my belt and two more to
                        go.  I started in August 2022 and will graduate in May 2026 with a Computer Science degree.
                        As of right now, I have a 3.87 cumulative GPA and made the dean&apos;s honor roll for each
                        semester of college.</p>
                </div>
                
                <button id="transBtn" type="button" className="btn btn-primary" ><a id="transcript_link" href={Transcript} download>Download My Transcript</a></button>
                
            </section>

            <section id="classes">
                <h3>Classes</h3>
                
                {/*<h4>Fall 2024Classes</h4>*/}
                <div className="accordion" id="accordionClasses">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="classesOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    
                                Fall 2024 Classes
                         
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Intro to Software Engineering, Programming Paradigms, Operating Systems, Discrete Structures II
                            </div>
                        </div>
                    </div>
               
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="classesTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">

                                Classes Taken

                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Data Structures, Web Programming, Object Oriented Programming, Intro to Programming (C++), Assembly Language Programming,
                                Intro to Digital Design, FYS: Intro to Tech and Innovation, Engineering Economy, Linear Algebra, Calculus II, Physics for Scientists
                                II, Engineering Probability and Statistics
                            </div>
                        </div>
                    </div>
                
  
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="classesThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">

                                Future Classes(2025-2026)

                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Senior Design Project, Design &amp; Analysis of Algorithms, Programming Language Concepts, Intro to Computer Architecture, Intro to Cyber Security, Computer Networks,
                                Intro to Database Systems, and Ethics and Computers
                            </div>
                        </div>
                    </div>
                </div>

                


                
            </section>

            <section id="about_wsu">
                <h3>About WSU</h3>
                <p>If you wish to know more about Wichita State, please go here: <a href="https://www.wichita.edu/about/index.php" target="_blank">About Wichita State University.</a></p>
                <p>
                    In my personal experience, Wichita State University was the best choice for me.  Sure it has its
                    ups and downs, but every college will.  I didn&apos;t know much or have much confidence in picking where I wanted to go to
                    college, but I knew that I wanted to set myself up in the best possible place once I graduate.  Being in a big city compared
                    to a small one grants you many more opportunities that are yours for the taking.  This has inspired me to go all in on my
                    computer science career because Wichita and Wichita State University have opened me up to all the possibilities that could
                    come through life.  When I was in small-town Kansas, I was not able to see my potential yet, now I do.
                </p>

            </section>
            
           



        </>
    );
};
const Edx = () => {
    return (
        <>
            
            <section id="ai">
                <h3>CS50AI</h3>
                <p>
                    In the summer of 2024, I took the online Harvard course <a href="https://www.harvardonline.harvard.edu/course/cs50s-introduction-artificial-intelligence-python" target="_blank">CS50AI</a>.
                    As of June 24, 2024, The course has taught me the logic, algorithms, and data structures needed to construct an
                    artificial intelligence that behaves like a human.  With still more to come, this class has served me greatly in my
                    curiosity for AI.
</p>
            </section>
                
            <section id="python">
                <h3>CS50p</h3>
                <p>
           
                    Another course in the <a href="https://www.edx.org/cs50" target="_blank">Harvard CS50 series</a>, <a href=" https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python" target="_blank">CS50p</a> has taught me
                    the essentials of programming in the Python language. Topics include object-oriented programming, Data Structures, and
                    applications of different libraries.  Moreover, I created my Spotify API project for the class.  Since taking the course,
                    Python has been my main language of choice.

                </p>
            </section>

            <section id="java">
                <h3>GTx Java</h3>
                <p>
                    Like Harvard, companies and other universities offer online classes through EdX.  This <a href="https://www.edx.org/learn/java/the-georgia-institute-of-technology-introduction-to-object-oriented-programming-with-java-i-foundations-and-syntax-basics" target="_blank">Java course</a> was
                    offered by Georgia Tech, which has its own <a href="https://www.edx.org/school/gtx" target="_blank">course series</a>.
                    It taught me the essentials of programming objects and classes through Java.  In summary, this course taught me the
                    syntax of different methods I knew in other languages.
</p>

            </section>

            
        </>
    );
};

const Org = () => {
    return (
        <>
            <section id="wulug">
                <h3>Wichita State Linux Users Group (Wu LUG)</h3>
                <p>Description: The mission of WuLUG is to promote, inform, and develop an understanding of Free and Open Source Software
                    (FOSS) and Cyber Security.</p>

                <p>Starting in January 2024, I am still a member of the computer science group.  I participate in cyber security events,
                    and different workshops covering web development and other useful computer science workshops.  Wu LUG also has events in
                    the cybersecurity realm as well.
</p>
            </section>
            <section id="phi">
                <h3>Phi Delta Theta</h3>
                <div>
                    <h4>About</h4>
                    <p>I have been in Phi Delta Theta since December of 2022.  One of our mottos is &quot;Become the Best Version of Yourself&quot;,
                        and I stick to that every day.  Being in the fraternity allowed me to grow bonds with some brothers, which will never fade.
                        Membership brought me the vision I have for myself, and the confidence to take action too.
</p>
                </div>
                <div>
                    <h4>Positions/Accomplishments</h4>
                    <p>For the full year of 2024, I served as House Manager for the fraternity.  The House Manager oversees the upkeep of
                        the fraternity house.  I hold cleanings whenever possible, repair broken equipment, and lead projects to further
                        strengthen and improve the house.  For these next two years, I will run for other positions, so I will keep
                        y&apos;all updated when the time comes.  Additionally, I have raised 1000 dollars for ALS through the Iron Phi
                        program.</p>
                </div>

            </section>
        </>
    );
};















const Main = () => {
    return (
        <>
            <body>
                <div id="wsuVidContainer">
                    <h1 id="wsuVidHeader">Wichita State University</h1>
                    <video id="wsuVid" loop autoPlay muted>
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
                <small id="credit">Credit to <a href="https://www.wichita.edu/" target="_blank">Wichita State University</a> for providing the great loop video!</small>


                <h2>College</h2>
                <div id="collegeSection">
                    <College />
                </div>

                <h2>EdX</h2>
                <div id="edxSection">
                    <Edx />
                </div>

                <h2>Organizations</h2>
                <div id="org">
                    <Org />
                </div>

     


            </body>
        </>

    );
        
}


export default Main



