// Write your Character component here
import React from "react"

const Character = (props) => {
  // console.log(props);
  const { child } = props;
  console.log(child);
  return (
    <div>
    {child.map(val => {
      console.log(val)
      const character = val;
      return (
        <h1>{character.name}</h1>
      )
    })}
    </div>
  )
} 

//aaaa

export default Character
// Used information from data
// name
// gender
// birth_year
// films - can be done as 'appearences'
// a
//