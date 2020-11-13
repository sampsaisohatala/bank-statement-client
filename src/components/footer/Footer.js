import './Footer.css';
import Navigation from '../navigation/Navigation';

function Footer() {
   return (
      <div className="footer">
         <div className="footer-rectangle" />
         <img className="footer-vector" src={process.env.PUBLIC_URL + `/images/Vector.svg`} alt="" />
         <Navigation top={false} />
         <ul className="links">
            <li>Yhteistiedot</li>
            <li>Tietoturvaselite</li>
         </ul>
         <button className="footer-button">
            <span>ALOITA CHAT</span>
         </button>
         <img className="footer-logo" src={process.env.PUBLIC_URL + `/images/tilijaska_head.png`} alt=""></img>
      </div>
   );
}

export default Footer;
