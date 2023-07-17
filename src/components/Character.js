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
      const characterName = val.name;
      const characterGender = val.gender;
      // const characterBYear = val[birthyear];
      const characterAppearance = val.films;
      return (
        <>
        <h1>{characterName}</h1>
        <h3>{characterGender}</h3>
        <h3>{characterAppearance}</h3>
        </>
      )
    })}
    </div>
  )
} 

//aaaaaa

export default Character
// Used information from data
// name
// gender
// birth_year
// films - can be done as 'appearences'
// a
//