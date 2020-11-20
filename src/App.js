import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Header from './components/header/Header';
import Statements from './components/statements/Statements';
import Footer from './components/footer/Footer';

function App() {
   const apiUrl = 'http://localhost:5001/bank-statement-api-b2ee6/us-central1/app/api/read';
   const [statements, setStatements] = useState(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      fetch(apiUrl)
         .then((res) => res.json())
         .then((json) => setStatements(json))
         .catch(() => {
            console.error('fetching data failed');
            setError(true);
         });
   }, []);

   return (
      <div className="app">
         {/** Background */}
         <div className="background">
            <div className="bg4" />
            <img className="bg3" src={process.env.PUBLIC_URL + `/images/lower-background.png`} alt="" />
            <img className="bgLine1" src={process.env.PUBLIC_URL + `/images/bgLine1.png`} alt="" />
            <img className="bgLine2" src={process.env.PUBLIC_URL + `/images/bgLine2.png`} alt="" />
         </div>

         <Header />

         {/* Tilitapahtumat */}
         <h1 className="heading">Tilitapahtumat</h1>
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
            <img className="union" src={process.env.PUBLIC_URL + `/images/Union.png`} alt="" />
         </div>

         {/* Show statements when they are loaded from API */}
         {statements && <Statements statements={statements} />}

         {/* Show error message if fetch fails */}
         {error && (
            <div className="error">
               <h2>Error: fetching data failed. Make sure that bank-statement-api is running on localhost:5001</h2>
            </div>
         )}
         <Footer />
      </div>
   );
}

export default App;
