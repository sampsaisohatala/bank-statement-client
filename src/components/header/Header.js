import './Header.css';
import Navigation from '../navigation/Navigation';

function Header() {
   return (
      <div className="header">
         <div className="rectangle" />
         <img className="vector" src={process.env.PUBLIC_URL + `/images/Vector.svg`} alt="" />
         <Navigation />
         <div className="user">
            <div className="line" />
            <span>Maisa Yrittäjä</span>
            <div className="line" />
         </div>
         <img className="logo" src={process.env.PUBLIC_URL + `/images/tilijaska_logo 1.png`} alt=""></img>
      </div>
   );
}

export default Header;
