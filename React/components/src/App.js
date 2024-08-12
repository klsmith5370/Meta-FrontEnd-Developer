// Practice with audio selection
import React from "react";

function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  };

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;

// Practice using Assets in React
// import logo from "./assets/logo.png"

// function App() {
//   return (
//     <div className="App">
//       <h1>Task: Add an image below</h1>
//       <img src={logo} alt="Logo" />
//     </div>
//   );
// };

// export default App;

// * Practice with using routes

// import "./App.css";
// import Homepage from "./Homepage";
// import AboutLittleLemon from "./Completed/AboutLittleLemon";
// import { Routes, Route, Link } from "react-router-dom";
// import Contact from "./Contact";

// function App() {
//   return (
//     <div> 
// 	  <nav>
//       <Link to="/" className="nav-item">Homepage</Link>
//       <Link to="/about" className="nav-item">About Little Lemon</Link>
//       <Link to="/contact" className="nav-item">Contact</Link>
// 	  </nav>
//       <Routes> 
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// *Practice using state

// import React from "react";
// import Fruits from "./Fruits";
// import FruitsCounter from "./FruitsCounter";

// function App() {
//   const [fruits] = React.useState([
//       {fruitName: 'apple', id: 1},
//       {fruitName: 'apple', id: 2},
//       {fruitName: 'plum', id: 3},
//   ]);

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits={fruits} />
//       <FruitsCounter fruits={fruits} />
//     </div>
//   );
// }

// export default App;

// * Practice using event handlers
// function App() {
//   function handleClick() {
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number'); 
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }

//   return (
//     <div>
//       <h1>Task: Add a button and handle a click event</h1>
//       <button onClick={handleClick}>Guess the number between 1 and 3.</button>

//     </div>
//   );
// }

// export default App;

// * Using props to create multiple instances
// import "./App.css";
// import Card from "./Card";

// function App() {
//   return (
//     <div>
//       <h1>"Task: Add 3 cards"</h1>
//       <Card h2='First card h2' h3='First card h3'/>
//       <Card h2='Second card h2' h3='Second card h3'/>
//       <Card h2='Third card h2' h3='Third card h3'/>
//     </div>
//   );
// }


// * Using props
// import Heading from './Heading'

// function App() {
//   return (
//     <div className='App'>
//       <Heading firstName='Kara'/>
//       <Heading firstName='Bob'/>
//     </div>
//   );

// }