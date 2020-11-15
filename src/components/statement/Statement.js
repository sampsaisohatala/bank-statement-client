import { useState } from 'react';
import './Statement.css';

function Statement(props) {
   const [openStatement, setOpenStatement] = useState(false);

   return (
      <div>
         <div className="statement">
            <span className="date">PE 21.8</span>
            <span className={props.statement.maara > 0 ? 'amount' : 'amount negative'}>
               {' '}
               {props.statement.maara > 0 ? `+${props.statement.maara.toFixed(2)} EUR` : `${props.statement.maara.toFixed(2)} EUR`}
            </span>
            <div className="statement-div">
               <span className="name">{props.statement.saaja}</span>
               <div>
                  <span className="message">{`Viesti: ${props.statement.viesti}`}</span>
                  <button>
                     <img
                        className={openStatement ? 'polygon flipped' : 'polygon'}
                        src={process.env.PUBLIC_URL + `/images/Polygon.png`}
                        alt=""
                        onClick={() => {
                           setOpenStatement(!openStatement);
                        }}
                     />
                  </button>
               </div>
            </div>
            <span className="total">-4 465,45 EUR</span>
         </div>

         {/* Show info of specific statement when collapsed button is clicked */}
         <div className={openStatement ? 'statement-info active' : 'statement-info'}>
            <div>
               <div className="column">
                  <div className="row">
                     <span className="row-head">{`Saaja:`}</span>
                     <span className="row-body">{`${props.statement.saaja}`}</span>
                  </div>

                  <div className="row">
                     <span className="row-head">{`Selite:`}</span>
                     <span className="row-body">{`${props.statement.selite}`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Viesti:`}</span>
                     <span className="row-body">{`${props.statement.viesti}`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Maksaja:`}</span>
                     <span className="row-body">{`${props.statement.maksaja}`}</span>
                  </div>
               </div>
               <div className="column">
                  <div className="row">
                     <span className="row-head">{`Kirjauspäivä:`}</span>
                     <span className="row-body">{`${props.statement.kirjauspvm}`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Arvopäivä:`}</span>
                     <span className="row-body">{`${props.statement.arvopvm}`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Maksupäivä:`}</span>
                     <span className="row-body">{`${props.statement.maksupvm}`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Määrä:`}</span>
                     <span className="row-body">{`${props.statement.maara.toFixed(2)}€`}</span>
                  </div>
                  <div className="row">
                     <span className="row-head">{`Arkistotunnus:`}</span>
                     <span className="row-body">{`${props.statement.arkistotunnus}`}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Statement;
