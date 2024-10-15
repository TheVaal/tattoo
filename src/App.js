import logo from './img/logo.webp';
import call from './img/call.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Gallery from './Gallery';
import './App.css';
import 'animate.css'
import WOW from 'wowjs';
import emailjs from '@emailjs/browser';
import { useEffect,useState } from 'react';

function App() {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  const [imagePath, setImagePath] = useState("");
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  // Function to open modal
  const openModal = (value) => {
    setImagePath(value);
  };

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm("service_zl9xnm7", "template_pzwime2", e.target, 'Qmw-JCtsvJwfH6N76');
  }
  // Function to close modal
  const closeModal = () => {
    setImagePath("");
  };
  return (
    <div className="App">
      <script src="wow.min.js"></script>
        <script>
          new WOW().init();
        </script>
      <header className="App-header">
        <div className="Flex-row">
          <div className="Left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
          <div className = "Header-info call"><img src={call} className="Call-icon" alt="logo" />&nbsp;+380(97)&nbsp;370-23-35</div>
        </div>
        <div className="Flex-row">
          <p className="Header-title">
            SHNUROFF<br/>TATTOO
          </p>
          
        </div>
        <div className="Flex-row">
          <div className="Left">
            <button className="App-Button" onClick={()=> setIsCallbackOpen(true)}>REQUEST CALL BACK</button>
          </div>
          <div className = "Header-info">
            <ul>
              <li><a href="https://www.instagram.com/shnurof_tattoo/">INSTAGRAM</a></li>
              <li><a href="https://www.tiktok.com/@shnurof">TIKTOK</a></li>
            </ul>
          </div>
          
        </div>
      </header>
      <section className='App-card'>
        <div className='App-card-column wow animate__animated animate__bounceInDown' data-wow-delay="0.35s">
          <h1 className='title'>OLEG<br/>SHNUROF</h1>
          <h3>ARTIST, TATTOO MASTER</h3>
          <ul>
            <li><span>— ARTIST WITH EDUCATION AND EXPIRIENCE IN TATTOO.</span></li>
            <li><span>— Likes to implement unusual ideas.</span></li>
            <li><span>— Prefers to work in color.</span></li>
            <li><span>— Favorite style - NEO-TRADITIONAL.</span></li>
            <li><span>— Creates truly personalized sketches, making the most of his <br/>creative talents and imagination.</span></li>
          </ul>
        </div>
        <div className='App-card-column'>
          <img className="wow animate__animated animate__bounceInDown" data-wow-delay="0.35s" src={require('./img/oleg.png')} alt="Oleg"></img>
        </div>
      </section>
      <section className="App-content">
        <h2 className='title'>
          MY RECENT<br/>WORK
        </h2>
        
        <Gallery handler = {(value)=>openModal(value)}/>
      </section>
      
      <footer className="App-footer">
        
        <div className="Footer-content">
          <div className='Footer-item'>
            <h2 className='title'>
              IF YOU WANT A <br/>
              COOL TATTOO FOR <br/>
              YOURSELF? <br/>
              <span> CONTACT ME!</span>
            </h2>
            <button className="App-Button align-center" onClick={()=> setIsCallbackOpen(true)}>REQUEST CALL BACK</button>
          </div>
          <div className='Footer-item Footer-item-end'>
              <h3>
                CONTACTS<br/>
                <p className="Footer-title-main">
                  &nbsp;+380(97)&nbsp;370-23-35<br/><br/> 
                  <span>
                    Україна,<br/>
                    Дніпропетровська обл,<br/>
                    м. Кривий Ріг,<br/>
                    вул. Героїв АТО 17,<br/>
                    студія The Fly
                  </span>  
                </p>
              </h3>
              <ul className="Footer-list-items">

                <li className='Footer-list-item'>
                  <a href='https://www.instagram.com/shnurof_tattoo/' id ="insta">
                    <FontAwesomeIcon icon={faInstagram} /> 
                  </a>
                </li>
                <li className='Footer-list-item'>
                  <a href='https://www.tiktok.com/@shnurof'  id ="tiktok">
                  <FontAwesomeIcon icon={faTiktok} />        
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <iframe title='App-Map' className='App-Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.2399719650057!2d33.392360897178754!3d47.907766576746106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db20bc71340ee9%3A0x285ab29f1ab8659b!2z0JPRgNGD0LfQtNCy0L7RgA!5e0!3m2!1suk!2sua!4v1728295095717!5m2!1suk!2sua" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </footer>
        {imagePath !== "" && (
          <div className="modal"  >
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={imagePath} alt="Full-size" />
            </div>
          </div>
        )}
        {
          isCallbackOpen === true && (
            <section className='modal modal-end'>
                <div className='Callback-content'>
                  <span className="close Callback-close" onClick={()=>setIsCallbackOpen(false)}>&times;</span>
                  <div>
                    <h2 className="Callback-heading-title">request<br/>a call back</h2>
                  </div>
                  <div className="Callback-sub-text">Leave your contact details for feedback</div>
                  <form name = "contactForm" onSubmit={sendEmail}>
                    <div className="Callback-content-div">
                      <label for="form-field-name" className="elementor-field-label">
                        Your name
                      </label>
                      <input size="1" type="text" name="fromName" id = "fromName" className="" placeholder="Type your name" required="required" aria-required="true"/>		
                    </div>
                    
                    <div className="Callback-content-div">
                      <label for="form-field-field" className="elementor-field-label">
                        Phone number
                      </label>
                      <input size="1" type="tel" name="fromTel" id = "fromTel" className="" placeholder="Type your phone number" required="required" aria-required="true" pattern="[0-9()#&amp;+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted."/>		
                    </div>
                    <div className="Callback-hint">
                      I agree to the processing of personal data	
                    </div>

                    <button type = "submit" className="Callback-button" onClick={()=> setIsCallbackOpen(true)}>REQUEST CALL BACK</button>
                  </form>
                </div>
            </section>
          )
        }
    </div>

  );
}

export default App;