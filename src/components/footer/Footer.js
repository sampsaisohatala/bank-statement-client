import './Footer.css';
import Navigation from '../navigation/Navigation';

function Footer() {
   return (
      <div className="footer">
         <div className="rectangle" />
         <img className="vector" src={process.env.PUBLIC_URL + `/images/Vector.svg`} alt="" />
         <Navigation />
         <img className="logo" src={process.env.PUBLIC_URL + `/images/tilijaska_logo 1.png`} alt=""></img>
      </div>
   );
}

export default Footer;
