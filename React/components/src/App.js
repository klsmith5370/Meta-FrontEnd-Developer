

// * Practice using event handlers
function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3.</button>

    </div>
  );
}

export default App;

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