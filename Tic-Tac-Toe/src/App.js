import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Result from './components/Result';

function App() {

  const [win,setWin]=useState(false);
  const[draw,setDraw]=useState(false);
  const[ply,setply]=useState(null);

  return (
    <>
    <h1 className='txt_h1'>Tic Tac Toe </h1>
    <Board setWinner={setWin} setply={setply} setDraw={setDraw}/>
    {win && <Result ply={"Winner is "+ply}/>}
    {draw && <Result ply={"Draw"}/>}
    </>
  );
}

export default App;
