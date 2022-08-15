import React, {useState} from 'react';
import ToDoLists from './ToDoLists';

const App=()=>{

const [inputList, setInputList] = useState("");
const [Items, setItems]=useState([]);


const itemEvent=(event)=>{
setInputList(event.target.value);
};

const listOfItems=()=>{
 setItems((oldItems)=>{
return(
  [...oldItems, inputList]
)
 })
 setInputList("")
}

const deleteItems = (id) => {
  console.log("deleted");
  setItems((oldItems) => {
    return oldItems.filter((arrElem, index)=>{
return index !== id;
   })
  })
}

return(
<>
<div className="main_div">
<div className="center_div">
<br/>
<h1> TODO List</h1>
<br/>
<input type="text" placeholder="Add a Item" 
value={inputList}
onChange={itemEvent} />
<button onClick={listOfItems}> + </button>

<ol>
{Items.map((itemval, index) => {
  return(
  <ToDoLists 
  key={index} 
  id={index}
  texts={itemval} 
  onSelect={deleteItems}
  />)
})}
</ol>
</div>
</div>
</>
)

};

export default App



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
