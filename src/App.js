import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import pic1 from "./assets/seph.jpg";
import pic2 from "./assets/cloud.jpg";
// should be aboyt 8 more image imports here//
// there should be a function that renders the images by click 
//should also be a function that remebers what images were clicked to mctch and add a point
// there should be counter for whenever a clciked image isnt a mtch with second image
//the game finishes after the points hit 10
// game also resets after 10 and re rednders the balnk squares
// game renders on click command 
// muiltple blank squres appear until clicked then image is displayed
// tried resizing the images but for some reason i dont understand why 1 is bigger than the other and fills the entire page
// all images should be sized the same in 2 rows with 5 columns
// spacing between squares should be about 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clicky Game
        </p>
        <img src={pic1}/>
        <img src={pic2}/>
      </header>
      <body className="App-body" id="App-body">
      </body>
    </div>
  );
}
export default App;
