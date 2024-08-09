import { useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import "./Career.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Wampo = () => {
    return (
        <>
            <h2 className="header">About WAMPO</h2>
            <section id="descWampoSection" className="section_w">
                <h3>What is WAMPO?</h3>
                <p>WAMPO luckily includes an &#34;about&#34; section on their website, which describes the organization marginally better than I can:<br></br>
                <br></br>
                WAMPO is the Metropolitan Planning Organization (MPO) for the Wichita metropolitan region. MPOs are federally required regional policy bodies in
                urbanized areas with populations over 50,000. MPOs recognize the critical links between transportation and other societal goals such as economic
                health, air quality, social equity, environmental resource consumption, and overall quality of life.<br></br>
                <br></br>
                Locally, the Wichita Area Metropolitan Planning Organization (WAMPO) is responsible, in cooperation with the State of Kansas and Wichita Transit,
                for carrying out the metropolitan transportation planning process in 22 cities and 3 counties in South Central Kansas.<br></br>
                <br></br>
                Founded in 1974</p>
                <a href="https://wampo.org" target="_blank">More about WAMPO</a> <br></br>
                <img src="https://files.constantcontact.com/f4fd9679301/03e7497e-0311-4c3f-8d6a-21d083d177eb.png?a=1132968707443" alt="wampo_logo" width="35%"></img>
            </section>
            <section id="d2dSection" className="section_w">
                <h3>What We Do</h3>
                <p>Our main focus as an MPO is to develop short-range and long-range transportation plans to present to different bodies of
                    government to approve.  Many of these plans can include specific construction projects to help improve the region, or they
                    could just be a report on a specific topic that we have up to date data for.  These plans can be used to help point the area
                    in the right direction in terms of what projects need to be started and when.<br></br>
                    <br></br>

                    We have data analyst, outreach, coordinator, and director positions, each focusing on a specific part of the process.  We all
                    combine our expertise and bring our best aspects to the table when developing reports and plans.  We coordinate as a team to
                    achieve whatever goal or deadline we set.
</p>

            </section>
            
            <h2 className="header">Position</h2>
            <section className="posSection">

                <h3>Engineering &amp; Data Analyst</h3>
                <p>My position is the Engineering &amp; Data Analyst position.  I gather data from data that is either sent to us, or on the web and
                    compile it into a report for the public to see.  I joined as an Engineering and Data Analyst Intern in May 2023, and earned
                    a part-time position with the organization in November 2023.  As of June 16, 2024, I am currently working at WAMPO, and am
                    excited to pursue and grow my talent through them.<br></br>
                    <br></br>
     
                    Compiling data comes in many different ways.  If they are sent in a csv file, I would have to download and insert that file
                    into ArcGIS (the mapping program we use) and create SQL queries in the program to narrow the data being shown on the map.
                    ArcGIS allows you to access local and online databases to pick out shapefiles, csv files, and others from it.  Information is
                    also stored on our Microsoft Access server, in which we insert new information about projects in the area.  One of my tasks is
                    to create tables and maps of those projects.  Therefore, I would have to use the Access Database to compile the information.
                    From websites, such as the Census Bureau website, we can extract information.  Many times, the information can be pulled with
                    an API key, and the correct API command to the information you would like to receive.  Other times, we manually search for the
                    information.  All of these means of compiling allow me to create fantastic reports which are interesting to read. <br></br>
                    <br></br>
                    Along with the compilation of data, I automate through Python through the <a href="https://pro.arcgis.com/en/pro-app/latest/arcpy/main/arcgis-pro-arcpy-reference.htm" target="_blank">ArcPy</a> API.
                    Once the information is saved in the correct folder, (either through extracting it manually or through an API)
                    the program can pick the right files and data to import into the ArcGIS project.  Once the data is imported, it is able to make
                    any map and layout you want to show the public.  Finally, it is able to export files into a folder of your choice, which you
                    can use to upload anywhere.<br></br>
                    <br></br>
                    Once the data is compiled to a report or a full plan, I sometimes present it for approval.  This develops my presentation and
                    public speaking skills.  My other tasks could include: gathering information through surveys by attending public events, and
                    helping decide where federal funds should be distributed.<br></br>
         
                    
</p>
            </section>

            <h2 className="header">Contacts</h2>
            <section className="constactsSection">
                <p>You can acquire the contact information of coworkers and directors on this page on the WAMPO website.  Otherwise, if you
                    would like to know more about the people that work at WAMPO, you can also visit the site:</p>
                <a href="https://www.wampo.org/meet-the-team" target="_blank">Meet the Team</a>
            </section>
        </>
        
    );
};

const Projects = () => {
    return (
        <>
            {/* 
            <h2 className="header">At a Glance</h2>
            <section id="ataGlance" className="section_p">
              
                <ul id="projectList">
                        
                    <li>Spotify API &amp; SerpAPI project</li>
                    <li>Mock Company website</li>
                    <li>Automated Commuter Flows report</li>
                    <li>Personal website (this website)</li>
                    <li>Web Development webpages</li>
                    <li>Work projects in R and Python</li>
                    <li>Homemade RC Car</li>
                        
                </ul>
               
            </section>
            <h2 className="header">Python</h2>
            <section id="python" className="section_p">
                <p>Along with my education and work experience, I apply my skills by making personal projects.  As of June 2024, I have made two
                    projects with Python.  One uses the Spotify API and SerpAPI to create custom Spotify playlists. The other uses the ArcGIS
                    API through the library ArcPy to create an automated report exporting about forty unique maps in a single folder.</p>
            </section>

            <h2 className="header">Web Development</h2>
            <section id="web" className="section_p">
                <p>Additionally, I have two more projects related to web development.  The first one is a mock company website that is built
                    through HTML, CSS, and JavaScript.  The site uses PHP to take user input and create an SQL query. Then, it applies that
                    query to a database to generate a table.  Last but not least, this website is all constructed by me, from the ground up.
                    I&apos;m using a React and Vite project template in Visual Studio to run it.  The structure is built from JavaScript XML using
                    a combination of HTML and React.  It is decorated by normal CSS, along with the React framework Bootstrap.</p>
            </section>

            <h2 className="header">Hardware</h2>
            <section id="hardware" className="section_p">
                <p>Last, my project of creating a remote control RC car proves my worth on the hardware side of things as well.  I had to follow
                    the instructions carefully on the construction and wiring of the car.  In the end, the car was and still is fully functioning.</p>
            </section>
            */}
       

            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-glance-list" data-bs-toggle="list" href="#list-glance" role="tab" aria-controls="list-glance">At a Glance</a>
                        <a className="list-group-item list-group-item-action" id="list-python-list" data-bs-toggle="list" href="#list-python" role="tab" aria-controls="list-python">Python</a>
                        <a className="list-group-item list-group-item-action" id="list-web-list" data-bs-toggle="list" href="#list-web" role="tab" aria-controls="list-web">Web</a>
                        <a className="list-group-item list-group-item-action" id="list-hardware-list" data-bs-toggle="list" href="#list-hardware" role="tab" aria-controls="list-hardware">Hardware</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-glance" role="tabpanel" aria-labelledby="list-glance-list"><ul id="projectList">

                            <li>Spotify API &amp; SerpAPI project</li>
                            <li>Mock Company website</li>
                            <li>Automated Commuter Flows report</li>
                            <li>Personal website (this website)</li>
                            <li>Web Development webpages</li>
                            <li>Work projects in R and Python</li>
                            <li>Homemade RC Car</li>

                        </ul>
                        </div>
                        <div className="tab-pane fade" id="list-python" role="tabpanel" aria-labelledby="list-python-list">
                            <p>Along with my education and work experience, I apply my skills by making personal projects.  As of June 2024, I have made two
                                projects with Python.  One uses the Spotify API and SerpAPI to create custom Spotify playlists. The other uses the ArcGIS
                                API through the library ArcPy to create an automated report exporting about forty unique maps in a single folder.</p>
                        </div>
                        <div className="tab-pane fade" id="list-web" role="tabpanel" aria-labelledby="list-web-list">
                            <p>Additionally, I have two more projects related to web development.  The first one is a mock company website that is built
                                through HTML, CSS, and JavaScript.  The site uses PHP to take user input and create an SQL query. Then, it applies that
                                query to a database to generate a table.  Last but not least, this website is all constructed by me, from the ground up.
                                I&apos;m using a React and Vite project template in Visual Studio to run it.  The structure is built from JavaScript XML using
                                a combination of HTML and React.  It is decorated by normal CSS, along with the React framework Bootstrap.</p>
                        </div>
                        <div className="tab-pane fade" id="list-hardware" role="tabpanel" aria-labelledby="list-hardware-list">
                            <p>Last, my project of creating a remote control RC car proves my worth on the hardware side of things as well.  I had to follow
                                the instructions carefully on the construction and wiring of the car.  In the end, the car was and still is fully functioning.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

const Skills = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col">
                        <h3>Programming Languages</h3>
                        <p>Through Wichita State University, I have learned the languages Python, C++, the web languages JavaScript, CSS, HTML, SQL,
                            and PHP, along with assembly.  Through my web programming class, I learned how to construct queries through a
                            website to pull information from a certain database.
                        </p>
                    </div>
                    <div className="col">
                        <h3>EdX</h3>
                        <p>Along with the skills I have learned through school, I have also taken courses through EdX to further add to my skills.  First, I took two
                            classes in the Harvard &quot;CS50&quot; online class series: one in Python and the other in AI through Python.  The Python
                            course taught me the essentials of Python, such as data structures, classes and objects, and other useful
                            information.  I developed my skill of navigating APIs through the final project.  In the CS50 AI course, I used
                            data structures learned to create various models of artificial intelligence. Last, I took a Java course through
                            Georgia Tech, where I learned the basic fundamentals and components of that language.  </p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <h3>GitHub</h3>
                        <p>With creating many projects, I became proficient in my GitHub and Git abilities.  I used command-line interfaces
                            through a Linux-based system called Ubuntu in my CS50 AI course.  Moreover, I store all my code on my GitHub
                            account.</p>
                    </div>
                    <div className="col">
                        <h3>Web Development</h3>
                        <p>With the web developing languages, I used React and Vite to create this site.  I chose Bootstrap to be the framework
                            for this website.  Through Node.js, I implemented this site on the backend.  Thanks to the process of making this,
                            I have learned a great deal more about what it takes to be a web developer.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Other Skills</h3>
                        <p>Through Toastmasters, I developed a skill in public speaking and communication.  Along with that, I am very proficient in Google and
                            Microsoft software.  Especially Excel, I use Microsoft software every day at work.</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}


const Dond = () => {
    return (
        <>
            <h2 className="header">About Dondlinger</h2>
            <section id="descDondSection" className="section_d">
                <h3>What is Dondlinger?</h3>
                <p>Dondlinger&apos;s website includes a short passage about the company:<br></br>
                <br></br>
                    Dondlinger Construction has been providing quality construction services to clients across
                    the Midwest for over 125 years. From its humble beginnings in 1898, Dondlinger Construction
                    has grown to become a leader in the construction industry and has built an outstanding
                    reputation for quality work and customer service. We specialize in various areas from
                    commercial building to heavy highway, and our team of highly experienced professionals is
                    committed to delivering high-quality results on time and within budget. At Dondlinger
                    Construction we are proud of our long-standing history and look forward to continuing to
                    serve our clients for years to come.
                </p>
                <a href="https://dondlinger.build/company/about-us/" target="_blank">Dondlinger Construction</a><br></br>
                <br></br>
                <img src=" https://dondlinger.build/wp-content/uploads/2023/02/DSC2683.jpg" id="dondImg" alt="dondImg" width="30%"></img>
            </section>

            
            <h2 className="header">Position</h2 >
            
            <section className="posSection">
                <h3>Construction Laborer</h3>
                <p>My position was a laborer for the company.  I worked in commercial construction for around six
                    months. In my time working there, I developed the mental strength to use in other endeavors.
                    There were days when it was ice cold outside, being it was during winter, but we still had
                    to work anyway.  Looking back at it, the mental toughness gained from working construction
                    in the winter was the most important thing I have learned from that job.  Sure, learning how
                    to operate hardware tools was nice, but that experience doesn&apos;t come close to the mental
                    toughness I had gained from the job.
                </p>
            </section>


        </>
        
    );
};

const Messenger = () => {
    return (
        <>
            <h2 className="header">About Messenger Total Promotions</h2>
            <section id="descMessSection" className="section_m">
                <h3>What is Messenger Total Promotions?</h3>
                <p>Messenger Total Promotions specializes in selling merchandise.  Their main product is clothing, but they
                    also sell cups, koozies, and other merchandise.  As stated, their main product is clothing,
                    which they have the Minneapolis location dedicated to.  To place an order of shirts, all you
                    would have to do is bring an idea or design, and they would create the batch of shirts for
                    you.  Messenger Total Promotions is similar to 4imprint, Custom Ink, or Vistaprint, where
                    they will worry about making the shirts so you do not have to.  </p>
                <a href="https://www.mtpprint.com/" target="_blank">Messenger Total Promotions</a><br></br>
                <br></br>
                <img src="https://pbs.twimg.com/profile_images/1267551037856133131/qStKhrNM_400x400.jpg" alt="messImg" id="messImg" width="25%"></img>

            </section>

            <h2 className="header">Position</h2>
            <section className="posSection">
                <h3>General Laborer</h3>
                <p>My position was a general laborer.  I did everything except run our two biggest printers. My
                    tasks included packaging and loading shirts, maintaining a clean environment free from ink,
                    printing shirts on our heat press, tracking orders through Excel, and bagging the correct
                    clothing per individual order. Looking back at it, I would say the greatest asset I gained
                    from that job was my ambition for putting in an honest day&apos;s work. While working at Messenger
                    Total Promotions, I couldn&apos;t stop working. There was always something to do, and I
                    continue to apply that lesson to this day. </p>

            </section>
        </>

    );
};

const PizzaHut = () => {
    return (
        <>
            <h2 className="header">About Pizza Hut</h2>
            <section id="descHutSection" className="section_m">
                <h3>What is Pizza Hut?</h3>
                <p>I think you know what Pizza Hut is, just in case: &quot;Pizza Hut, LLC  is an American multinational pizza restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. The chain, headquartered in Plano, Texas, operates 19,866 restaurants worldwide as of 2023.&quot;
                    I worked at the Minneapolis, Kansas location when it was still around.  This job has a special place in my heart because it was my first and most fun job.  I had a blast working every day with my best friend.
                </p>
                <a href="https://www.pizzahut.com/" target="_blank">Pizza Hut</a><br></br>
                <br></br>
                <img src="https://duyt4h9nfnj50.cloudfront.net/resized/1522230935956-w2880-04.jpg" alt="hutImg" id="hutImg" width="30%"></img>

            </section>

            <h2 className="header">Position</h2>
            <section className="posSection">
                <h3>Cook/Laborer</h3>
                <p>Much like my Messenger Total Promotions position, I did nearly every job.  I served, cooked,
                    re-stocked ingredients, cleaned, and prepared materials for each shift.  There is nothing to
                    it other than that, just your typical fast food job.</p>

            </section>
        </>

    );
};







const Main = () => {
    /*
    useEffect(() => {
        const buttons = document.querySelectorAll(".accordion-button");

        buttons.forEach(function (button) {
            button.addEventListener('click', handleClick);
        });

        return () => {
            buttons.forEach(function (button) {
                button.removeEventListener('click', handleClick);
            });
        };
    }, []);

    function handleClick(event) {
        event.preventDefault();
        const button = event.currentTarget;
        const collapse = document.querySelector(button.getAttribute("data-bs-target"));

        if (button.classList.contains("collapsed")) {
            button.classList.remove("collapsed");
            collapse.classList.add("show");
        } else {
            button.classList.add("collapsed");
            collapse.classList.remove("show");
        }
    }

    */






    return (
        <>
            <html lang="en">
                <body>
                    <h1>My Experience</h1>
                    <div className="accordion" id="accordion">
                        <div id="techSection" className="accordion-section">
                            <h2 className="expHeader">Technical Experience</h2>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Wichita Area Metropolitan Planning Organization (WAMPO)
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div id="wampoSection" className="accordion-body">
                                        <Wampo />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Projects
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div id="projectSection" className="accordion-body">
                                        <Projects />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Skills
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div id="skillsSection" className="accordion-body">
                                        <Skills />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="otherExpSection" className="accordion-section">
                            <h2 className="expHeader">Other Experience</h2>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Dondlinger Construction
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                                    <div id="dondSection" className="accordion-body">
                                        <Dond />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Messenger Total Promotions
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                    <div id="messengerSection" className="accordion-body">
                                        <Messenger />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Pizza Hut
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordion">
                                    <div id="hutSection" className="accordion-body">
                                        <PizzaHut />
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                   

                </body>




            </html>






        </>

    )
}



export default Main