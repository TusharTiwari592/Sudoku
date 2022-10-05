import React, { useState } from "react";

function Sudoku({ Data }) {
  let [puzzleState, Setpuzzle] = useState([]);
  let [answers , setAnswers] = useState([]);


//when start button is clicked it splits the puzzle data and makes an array and the data is stored in puzzleState "use state hook" 
  function getData() {
    let puzzle = Data.puzzle.split("");
    Setpuzzle(puzzle);
  }
//   console.log(puzzleState);
  
  // change function sets the value of input in the puzzleState  by getting the index of the "." input.

  function change(index, e){
      puzzleState[index] = e.target.value;
    //   console.log(puzzleState)  
    }
  // Inputs function makes an input and paragraph for the Sudoku game  if we have a value then it goes in para and if we have a "."  then it creates an input.  The input have a change event 
    function Inputs() {
        return puzzleState.map((input, index) => {
            //   console.log("tushar");
            
            if (input.includes(".")) {
                return(
                    <input className="Inputs" onChange={(e)=>{change(index , e)}} type="text" />
                    )
                    
                } else {
                    return <p className="fv">{input}</p>;
                }
    });
}
//container containes digits and pass on to oneArr when one line is finished
let container = [];
// when one line is complete then it makes an array and then the container gets empty
let  oneArr = [];


    function getVal(){
        for (let i = 0 ; i<= puzzleState.length-1 ; i++){
            container.push(puzzleState[i])
            if((i+1)% 9 == 0 ){
               oneArr.push(container) 
               setAnswers([...answers , oneArr])
               container =[];
            }    
        } 
    }
// answers contains an array of all one array ihn a state
    console.log(answers);
  
    return (
        <>
      <button onClick={getData}>Start</button>
      <div className="wrapper">
        <Inputs className="AllInputs" />
      </div>
        <button onClick={getVal}>Submit</button>
    </>
  );
}

export default Sudoku;
