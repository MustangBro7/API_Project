import { useState } from 'react';
import './App.css';
import SearchBar from './searchbar';
import Results from './results';
import sample_data from './sample.json'
function App() {
  let [results , setResults] = useState([])
  return (
    <div className="App">
      <SearchBar />
      <Results></Results>
      {/* {
        sample_data.map(val =>{return(
          <div key={val.idDrink}>{val.strDrink}</div>)
          })
      } */}
      
    </div>
  );
}

export default App;
