import React, {useEffect, useState} from 'react';
import axios from "axios"
import Character from "./components/Character";
import * as styles from "./Styling/styles"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
//a


useEffect(() => {
  axios.get("https:swapI.dev/api/people/")
  .then(res => {
    console.log(res);
    setCharacters(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}, [])

  return (
    <div className="App">
      <styles.BackgroundSettings>
        <Character className="Header" child={characters}></Character>
      </styles.BackgroundSettings>
    </div>
  );
}

export default App;
