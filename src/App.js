
import { useEffect, useState } from "react";
import Characters from "./component/Characters";


function App() {

  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data);
      });
  }, []);

 
  return (
    <div className="App">
      <Characters characters={characters} />
    </div>
  );
}

export default App;
