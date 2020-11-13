import './Navigation.css';

function Navigation(props) {
   return (
      <div className={props.top ? 'navigation top' : 'navigation bottom'}>
         <ul>
            <li>Etusivu</li>
            <li className="active">Tilit</li>
            <li>Palkanlaskenta</li>
            <li>Tulosseuranta</li>
            <li>Kirjanpito</li>
            <li>Ohjeet</li>
            <li>Hinnoittelu</li>
            <li>Asetukset</li>
         </ul>
      </div>
   );
}

export default Navigation;
