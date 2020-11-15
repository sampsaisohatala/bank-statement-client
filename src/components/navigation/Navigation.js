import './Navigation.css';

function Navigation(props) {
   return (
      <div className={props.top ? 'navigation top' : 'navigation bottom'}>
         <ul>
            <li>Etusivu</li>
            <li className="active">
               Tilit
               <img className="underline" src={process.env.PUBLIC_URL + `/images/underline.svg`} />
            </li>

            <li>Palkanlaskenta</li>
            <li>Tulosseuranta</li>
            <li>Kirjanpito</li>
            <li>Ohjeet</li>
            <li>Hinnoittelu</li>
            <li>Asetukset</li>
         </ul>
         <div>
            <img className="hamburger" src={process.env.PUBLIC_URL + `/images/hamburger.jpg`} />
         </div>
      </div>
   );
}

export default Navigation;
