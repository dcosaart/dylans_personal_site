import './Resume.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import dc_Resume from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\Resume.pdf";


const Main = () => {

    return (
        <>
            <iframe id="resume_iframe" src={dc_Resume} title="dc_resume" width="90%" height="600px"></iframe>
            <button id="resume_btn" type="button" className="btn btn-primary"><a id="resume_link" href={dc_Resume} download>Download My Resume</a></button>
        </>
    );




}



export default Main