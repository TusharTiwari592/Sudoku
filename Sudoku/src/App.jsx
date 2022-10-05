import React, { useEffect } from 'react'
import Sudoku from './Sudoku'
import axios from "axios";
import { useState } from 'react';

function App() {
  const [sudoku , setSudoku] = useState()
  let data;
  useEffect(()=>{
const options = {
  method: 'GET',
  url: 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate',
  params: {seed: '1337'},
  headers: {
    'X-RapidAPI-Key': '109c31cdf7mshd5a3d4ba3816a91p14e9b8jsn4cae3a0c2b8b',
    'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	setSudoku(response.data);
}).catch(function (error) {
	console.error(error);
});
},[])
data = sudoku
console.log(data)

  return (
    <div>
        <Sudoku Data ={data} />
    </div>
  )
}

export default App