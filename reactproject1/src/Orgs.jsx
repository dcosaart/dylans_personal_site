import './Orgs.css'
import TM_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Toastmasters_img.png"
import linux_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Linux_img.png"
import PDT_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\PDT_img.webp"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect } from 'react';

const Main = () => {
    useEffect(() => {
        const TM_item = document.getElementById('TM_item')
        const lin_item= document.getElementById('lin_item')
        const PDT_item = document.getElementById('PDT_item')
        const TM_desc = document.getElementById('TM_desc');
        const lin_desc = document.getElementById('lin_desc');
        const PDT_desc = document.getElementById('PDT_desc');

        const next_btn = document.getElementById('carousel-control-next');
        const prev_btn = document.getElementById('carousel-control-prev');

        

        const next_shift_items = () => {
            if (TM_item.classList.contains('active')) {
                TM_desc.classList.remove('active');
                lin_desc.classList.add('active');
                PDT_desc.classList.remove('active');
            }
            else if (lin_item.classList.contains('active')) {
                lin_desc.classList.remove('active');
                TM_desc.classList.remove('active');
                PDT_desc.classList.add('active');
            }
            else if (PDT_item.classList.contains('active')) {
                PDT_desc.classList.remove('active');
                TM_desc.classList.add('active');
                lin_desc.classList.remove('active');
            }

        };

        const prev_shift_items = () => {
            if (TM_item.classList.contains('active')) {
                TM_desc.classList.remove('active');
                lin_desc.classList.remove('active');
                PDT_desc.classList.add('active');
            }
            else if (lin_item.classList.contains('active')) {
                lin_desc.classList.remove('active');
                TM_desc.classList.add('active');
                PDT_desc.classList.remove('active');
            }
            else if (PDT_item.classList.contains('active')) {
                PDT_desc.classList.remove('active');
                TM_desc.classList.remove('active');
                lin_desc.classList.add('active');
            }
        }

        next_btn.addEventListener('click', next_shift_items);

        prev_btn.addEventListener('click', prev_shift_items);

        return () => {
            next_btn.removeEventListener('click', next_shift_items);
            prev_btn.removeEventListener('click', prev_shift_items);
        };

    }, []); 
    
    return (
        <>
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-interval="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div id="TM_item" className="carousel-item active" data-bs-interval="9999999999">
                        <img src={TM_img}  className="d-block w-100" alt="Toastmasters Image"></img>
                    </div>
                    <div id="lin_item"className="carousel-item" data-bs-interval="9999999999">
                        <img src={linux_img} className="d-block w-100" alt="WuLUG Image"></img>
                    </div>
                    <div id="PDT_item" className="carousel-item" data-bs-interval="9999999999">
                        <img src={PDT_img} className="d-block w-100" alt="Phi Delta Theta Image"></img>
                    </div>
                </div>
                <button id="carousel-control-prev" className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id="carousel-control-next" className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="descriptions">
                <div id="TM_desc" className="carousel-item active">
                    <h1 className="org_headers">Toastmasters</h1>
                    <h4>About</h4>
                    <p>Toastmasters International is a nonprofit educational organization that builds confidence and teaches public speaking
                        skills through a worldwide network of clubs that meet online and in person. In a supportive community or corporate
                        environment, members prepare and deliver speeches, respond to impromptu questions, and give and receive constructive
                        feedback. It is through this regular practice that members are empowered to meet personal and professional
                        communication goals. Founded in 1924, the organization is headquartered in Englewood, Colorado with approximately
                        270,000 members in more than 14,200 clubs in 148 countries.
                    </p>

                    <h4>My Role</h4>
                    <p>
                        July 2024 through June 2025 is my first term as the president of the &quot;AeroAchievers&quot; club here in Wichita.
                        The main role as President is to conduct meetings, make sure every officer and member is where they need to be,
                        and vote in Toastmasters International.  For more information, I joined the club in March 2024.  Since then,
                        I have upgraded my public speaking and presentation skills stupendously.  I believe my upgraded speaking ability
                        makes me unique from other candidates for computer science positions.
                    </p>

                </div>
                <div id="lin_desc" className="carousel-item">
                    <h1 className="org_headers">WuLUG</h1>
                    <p>Description: The mission of WuLUG is to promote, inform, and develop an understanding of Free and Open Source Software
                        (FOSS) and Cyber Security.</p>

                    <p>Starting in January 2024, I am still a member of the computer science group.  I participate in cyber security events,
                        and different workshops covering web development and other useful computer science workshops.  Wu LUG also has events in
                        the cybersecurity realm as well.
                    </p>
                </div>

                <div id="PDT_desc" className="carousel-item">
                    <h1 className="org_headers">Phi Delta Theta</h1>
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
                </div>
            </div>
        </>
    );
};


export default Main