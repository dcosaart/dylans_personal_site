import profImg from "C:\\Users\\Dylan\\Pictures\\Dylan_11.jpg";
import "./aboutMe.css";

const Intro = () => {
    return (
        <>

            <h2>Introduction</h2>

            <p> Hello stranger! My name is Dylan Cossaart, an aspiring computer scientist.I have interests in software
                development, artificial intelligence, and program.In my free time, I focus my effort into creating different
                projects and learning new aspects of computer science. As of June 2024, I am a junior at Wichita State
                University, with two more years until graduation.<br></br>  I grew up in Minneapolis, Kansas and moved to Wichita in
                August 2022.  In May 2023, I started a data analyst position at the Wichita Area Metropolitan Planning
                Organization(WAMPO).WAMPO taught me the essentials of data analytics.Through Wichita State and other courses,
                I also learned the essentials of programming. My web development class taught me the tools to create this
                website. I am in a prime position to excel at any internship or position I am accepted too. I have expertise in
                multiple languages, I apply my knowledge consistently to projects at work or at home, and I give my full
                effort every single day, no matter the task. Most importantly, I am the most passionate person when it comes
                to anything computer science related. </p>

        </>
    );
};
const Home = () => {
    return (
        <>
            <h2>My Hometown</h2>
            <a href="#location">Location</a> &nbsp;
            <a href="#about">About</a> &nbsp;
            <a href="#things_to_do">Things to do</a>

            <section id="location">
                <h3>Location</h3>
                <p><a href="https://www.google.com/maps/place/Minneapolis,+KS+67467/@39.1193154,-97.7222021,14z/data=!3m1!4b1!4m6!3m5!1s0x87bd297d4894cc39:0x2baa1e58dcc1ffe8!8m2!3d39.1219448!4d-97.7067028!16zL20vMHQ5ZnE?entry=ttu" target="_blank">
                    Minneapolis</a> is located in north central Kansas.  No major cities are
                    in the general area.  The closest Walmart and fast food restaurant is in
                    Salina, a half an hour south.   The region it is located in mainly consists
                    of farmland and open ranges, perfect for livestock and agriculture.  Many
                    of my friends either worked in that field, or engaged in activities
                    relating to it.  I guess I was one of the only ones that did not have
                    interest in it.  As you can see, instead I decided to try to be a tech nerd
                    and major in Computer Science.  Furthermore, the major business in the general vicinity
                    are mainly agricultural and manufacturing.
                </p>
                <img src="https://live.staticflickr.com/1877/43612353875_5fd41d652d_b.jpg"
                    alt="Minneapolis Sign" title="Sign of Mineapolis Kansas" width="250" />
            </section>

            <section id="about">
                <h3>About</h3>
                <div id="description">
                    <h4>Description</h4>
                        <p>With a land area of 1.76 square miles, about two thousand people call Minneapolis home.  Important features that run through it are: the Solomon River, and the  Missouri Pacific
                            Railroad.  Near is Kansas Highway 135, and I-70 twenty five minutes south. It is largely
                            known as the home of George Washington Carver, the man  who invented peanut butter.  Minneapolis
                        is, in many ways, just a regular midwestern small town.  But, with my experience living there, it
                        has a special place in my heart, and I would not wish to be raised anywhere else.  For now, it is only one and a half
                        hours from where I live, and everytime I visit I receive nothing but love and great memories.
                        </p>
                </div>

                <div id="lifestyle">
                    <h4>Lifestyle</h4>
                    <p>Minneapolis Kansas definitely has a small-town feel to it. Everybody knows each other, which
                        brings a sense of tight unity.  The advantage of this is that when you need support, you have
                        a family of people you can turn back to.  The con would be if you do anything embarrassing,
                        the whole town would know about it before you even get the chance to blush.  With all things
                        considered, the hospitality and love given by the community of Minneapolis sets it apart from
                        the rest.</p>
                </div>

                <div id="sports">
                    <h4>Sports</h4>
                    <p>There are only high school sports in Minneapolis, which includes basketball, football,
                        volleyball, cross country, track and field, baseball, and wrestling.  We are not known
                        for our skill at any of those sports.  At best, we are in the middle of the pack. </p>
                    <ul>
                        <li> <a href="https://www.usd239.org/o/district/page/high-school-football" target="_blank">Football</a></li>
                        <li> <a href="https://www.usd239.org/o/district/page/high-school-volleyball" target="_blank">Volleyball</a></li>
                        <li> <a href="https://www.usd239.org/o/district/page/high-school-cross-country" target="_blank">Cross Country</a></li>
                    </ul>
                </div>
            </section>

            <section id="things_to_do">
                <h3>Things to do</h3>
                <ul>
                    <li>Go to the <a href="http://minneapolis-ks.com/calendar.aspx?eid=433" target="_blank">Ottawa County fair</a></li>
                    <li>Go to <a href="http://minneapolis-ks.com/calendar.aspx?eid=431" target="_blank">Minne-K Day</a></li>
                    <li>Eat at <a href="https://www.google.com/maps/place/Fajitas+Mexican+Restaurant/@39.1228401,-97.7117419,15z/data=!4m6!3m5!1s0x87bd297c97067e65:0xde199960cf780e65!8m2!3d39.1228398!4d-97.7061267!16s%2Fg%2F11dyzkz56g?entry=ttu" target="_blank">
                        Fajitas</a> and <a href="https://www.facebook.com/people/Papas-Burger-Mill/61553642264242/" target="_blank"> Papa&apos;s Burger Mill</a></li>
                    <li>Enjoy a drink or play pickle ball at <a href="https://www.thefarmminneapolis.com/" target="_blank">The Farm</a></li>
                    <li>Mainly just drive around and hang out, lol</li>
                </ul>
            </section>


        </>
    );
};



const Hobbies = () => {

    return (
        <>
            <h2>Personal interests and hobbies</h2>
            <section id="fitness" className='section_hobbies'>
                <h3>Fitness</h3>
                <p>
                    In 2023, I made physical fitness a more important priority.  I believe it is beneficial to wake up before everyone
                    else and get a good workout in.  Whether that be cardio or lifting weights, getting a sweat going the first instance
                    you wake up sets a fantastic mojo for the rest of the day.  And a great day can turn into a week, which can turn into
                    a great month, which can turn into a great year, and so on and so on.
                </p>
              
                <div id="cardio">
                    <h4>Cardio</h4>
                    <p>
                        In the moment of creating this website, I am placing more focus on my cardiovascular system and running endurance.
                        Running a great distance is, in my opinion, the toughest exercise your body can do.  At least in my experience, I&apos;d
                        rather do anything else other than running, but that is why I do it.  Partaking in the suffering of running calluses
                        your mind.  So when tough tasks get thrown your way, you can overcome them more easily.  By having your mind be
                        comfortable in uncomfortable situations, you learn how to stay calm in many more difficult situations.

                    </p>

                    <img src="https://th.bing.com/th/id/OIP.KNfqsHSrgiOjhShJ16hGhQAAAA?rs=1&pid=ImgDetMain" alt="David Running" width="300px" id="davidRunning"></img>
                    
                </div>
                <div id="strength_training">
                    <h4>Strength Training</h4>
                    <p>
                        I am naturally skinny, so lifting weights allows me to fill out a little bit.  I hit a three day circuit involving
                        arms, back, chest, and core.  Like running, weight lifting is beneficial to your mental health, and physical of
                        course.  In my experience, if your physical side gets worked and endures loads of difficult workouts, your mind
                        prospers.  You feel when you wake up everyday that you have a goal to complete and a purpose to give it your all that
                        day.
                    </p>
                    <img src="https://broscience.com/wp-content/uploads/2023/10/sam-sulek-training.png" alt="Sulek Lifting" id="sulekLifting" width="300px"></img>
                    
                </div>
            </section>
            <section id="programming" className="section_h">
                <h3>Programming</h3>
                <p>
                    Believe it or not, I spend my free time learning new skills and creating new projects.  For example, this website is a project and a medium
                    for me to learn new skills in web development.  I know I am a nerd, but I love doing this.  I get to dive deep into my love for programming,
                    it pushes me mentally, and makes me grow even more in my expertise and knowledge of development.
                </p>
                <div id="projects">
                    <h4>Projects</h4>
                    <p>As previously stated, I have completed some projects and will continue on more.  Projects completed(as of June 2024) have been a
                        Spotify API project, an automated report on commuter statistics, a website to look up products for a mock-company, and homemade rc-car.
                        This is subject to change in the future with more projects I complete.  If the date seems a little dated to you, I encourage you to take a
                        look at my resume.</p>
                </div>
                <div id="courses"> 
                    <h4>Courses</h4>
                    <p>In addition to projects, I spend time taking online courses.  The courses I take are self-paced, meaning I could progress through them as I
                        please.  The main sources of these courses include: EdX, LinkedIn Learning, and others.  My top source of information is EdX.  They provide a
                        variety of courses.  Through them, I took a Harvard Python course through their CS50 series, and a Java course by Georgia Tech as well.  Through LinkedIn
                        Learning, I polish up the skills needed for the workplace.  Last but not least, simply searching up a YouTube video about how to write a
                        certain program, or to learn a new concept provides great information my brain and heart desires.  As you can see, I love spending my free
                        time learning new things and aspects of computer science.</p>
                    <img src="https://web3.career/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc3lRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a9f42bff4cdeac423f15e5e93445f0f94415453/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQWlBRGFRS1FBWHNHT2d4bmNtRjJhWFI1U1NJTFEyVnVkR1Z5QmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--910b983e7da43fe5999e46500b12c26e401df697/cs50-harvard%20(1).png" alt="CS50 duck" id="cs50duck"></img>

                </div>
            </section>
            <section id="normal" className="section_h">
                <h3>More &quot;Normal&quot; Hobbies</h3>
                <p>My whole free time is not spent on learning. I enjoy spending time with friends and especially family. I attend sporting events and love watching
                    them and even participate in some competitions in basketball, volleyball, football, and running. I enjoy watching movies, attending social events,
                    connecting with people, and love adventures. Going out to vacation is my favorite pastime. When you don&apos;t have to worry about anything, and
                    you realize that life isn&apos;t worth stressing all that much about. Especially if you bring friends, the memories you will make are endless.
                    I&apos;ve been to California, Ohio, Arkansas, Tennessee, Washington DC, Texas, Colorado, and Oklahoma. All of those vacations were great, and I
                    wouldn&apos;t trade them for anything.</p>
       
            </section>
        </>
    );
    
};

const Goals = () => {
    return (
        <>
            
            <h2>My Goals and Aspirations</h2>
            <section>
                <ul>
                    <li>
                        <ld>Make a steady income</ld>
                    </li>
                    <li>
                        <ld>Explore my full potential in the computer science industry</ld>
                    </li>
                    <li>
                        <ld>Have fun, because life is short.  YOLO!</ld>
                    </li>
                </ul>
            </section >
            

        </>
    );
};

const FunFacts = () => {
    return (
        <>
            <h2>Fun Facts About Me</h2>
            <section>
                <ul>
                    <li>
                        <ld>I&apos;m part of a fraternity, named Phi Delta Theta</ld>
                    </li>
                    <li>
                        <ld>My nickname is &ldquo;pickle&rdquo;</ld>
                    </li>
                    <li>
                        <ld>I like a blend of pop and hip hop music</ld>
                    </li>
                    
                    

                </ul>


            </section>
        </>
    );
}




function Main() {
    return (
        <>
            <html lang="en">
                <body>
                    <h1>About me</h1>
                    <div className="section" id="IntroSection">
                        <Intro />
                    </div>

                    <div className="section" id="homeSection">
                        <Home />
                    </div>

                    <div className="section" id="hobbiesSection">
                       <Hobbies />
                    </div>

                    <div className="section" id="goalsSection">
                        <Goals />
                    </div>

                    <div className="section" id="funFactsSection">
                        <FunFacts />
                    </div>


                </body>
            </html >
        </>



    );
}


export default Main