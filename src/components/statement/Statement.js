import './Statement.css';

function Statement() {
   return (
      <div>
         <div className="statement">
            <span className="date">PE 21.8</span>
            <span className="amount">+358,86 EUR</span>
            <div className="statement-div">
               <span className="name">LAXMI MATA OY</span>
               <div>
                  <span className="message">Viesti: Lasku 1564...</span>
                  <button>
                     <img className="polygon" src={process.env.PUBLIC_URL + `/images/Polygon.png`} alt="" />
                  </button>
               </div>
            </div>
            <span className="total">-4 465,45 EUR</span>
         </div>
         <div className="statement-info">
            <div>
               <div className="first-column">
                  <span>Saaja:</span>
                  <span>Selite:</span>
                  <span>Viesti:</span>
                  <span>Maksaja:</span>
               </div>
               <div className="second-column">
                  <span>Kirjauspäivä:</span>
                  <span>Arvopäivä:</span>
                  <span>Maksupäivä:</span>
                  <span>Määrä:</span>
                  <span>Arkistotunnus:</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Statement;
