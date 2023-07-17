// Write your Character component here
import React from "react"
import * as styles from "../Styling/styles"
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
      // const characterAppearance = val.films
      // console.log(characterAppearance)
      const characterHeight = val.height;
      const characterWeight = val.mass;
      return (
        <>
        <styles.StyledBackground>
          <styles.StyledName>{characterName}</styles.StyledName>
          <styles.StyledGender>{characterGender}</styles.StyledGender>
          <styles.StyledHeight>{characterHeight}</styles.StyledHeight>
          <styles.StyledWeight>{characterWeight}</styles.StyledWeight>
          {/* <styles.StyledAppearence>{characterAppearance}</styles.StyledAppearence> */}
        </styles.StyledBackground>
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