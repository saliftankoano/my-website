import './intro.css';
import btnImg from '../../assets/hireMe.svg';
import Resume from '../../assets/resume.pdf';
import profile from '../../assets/me.png';
function Intro(){
    return (
        <div className="container" >
            <section className="intro">
                <img src={profile} alt='profile' id='profile'/>
            </section>
            <div className='left'>
                <span className="intro-name">I'm <span className="salif">Salif</span><br/></span>
                <span className="job">Junior Software Developer<br/></span>
                <a  href={Resume} download="salif-resume"><button className="btn"><img src={btnImg} alt="suitcase logo" className="btn-img" />Resume</button></a>
            </div>
        </div>
        
    );
}

export default Intro;