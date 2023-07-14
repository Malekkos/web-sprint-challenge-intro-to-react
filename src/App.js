import React, {useEffect, useState} from 'react';
import axios from "axios"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get("https:swapI.dev/api/people/")
  .then(res => {
    console.log(res);
    setCharacters(res.data)
  })
}, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
