import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Header from './components/header/Header';
import Statement from './components/statement/Statement';
import Footer from './components/footer/Footer';

function App() {
   const apiUrl = 'http://localhost:5001/bank-statement-api-b2ee6/us-central1/app/api/read';
   const [statements, setStatements] = useState(null);

   async function handleFetch() {
      const response = await fetch(apiUrl).catch(() => {
         console.error('data fetch failed');
      });
      const data = await response.json().catch(() => {
         console.error('json parse failed');
      });

      if (response.status === 200) {
         console.log(response.status);
         setStatements(data);
      } else {
         console.log(response.status);
      }
   }

   console.log(statements);

   // fetch country data
   useEffect(() => {
      handleFetch();
   }, []);

   return (
      <div className="app">
         <div className="background">
            <img className="bgLine1" src={process.env.PUBLIC_URL + `/images/bgLine1.png`} alt="" />
            <img className="bgLine2" src={process.env.PUBLIC_URL + `/images/bgLine2.png`} alt="" />
         </div>
         <Header />
         <h1 className="heading">Tilitapahtumat</h1>

         {/* Tilitapahtumat */}
         <div className="balance">
            <div>
               <h3>Tiliotteen saldo</h3>
               <span>92,83</span>
            </div>
            <div>
               <h3>Kuukauden tulot/menot</h3>
               <span>-4 465,45 EUR</span>
            </div>
         </div>

         {/* Input fields */}
         <div className="inputFields">
            <input type="text" placeholder="FI95 5190 0220 5004 89, KÄYTTÖTILI 92,83 €" />
            <input type="text" placeholder="Etsi tilitapahtuma"></input>
         </div>

         <div className="statements">
            <div className="statement-header">
               {' '}
               <h3>ELOKUU</h3>
            </div>
            <div className="statement-container">
               <div className="total-background" />
               <Statement />
               <Statement />
               <Statement />
               <Statement />
               <div className="separator" />
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default App;
