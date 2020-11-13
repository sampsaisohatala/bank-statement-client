import './Statements.css';
import Statement from '../statement/Statement';

function Statements(props) {
   return (
      <div className="statements">
         <div className="statement-header">
            {' '}
            <h3>ELOKUU</h3>
         </div>
         <div className="statement-container">
            <div className="total-background" />
            {props.statements.map((statement, i) => {
               return <Statement key={i} statement={statement} />;
            })}

            <div className="separator" />
         </div>
      </div>
   );
}

export default Statements;
