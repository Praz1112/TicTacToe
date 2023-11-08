import { useState } from 'react';
import classes from './Board.module.css'; 
import Cell from './Cell';

let count=0;
const Board=(props)=>{
const[bord,setval]=useState([null,null,null,null,null,null,null,null,null]);
const[currPlayer,setCurrPlayer]=useState(true);

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


const setBord=(i,val)=>{
    count=count+1;
    
    let temp=[...bord];
    let flag=false;
     temp[i-1]=""+val;
     setval(temp);
   for(let index=0;index<8;++index){
    if(temp[win[index][0]]!==null){
        if(temp[win[index][0]]===temp[win[index][1]]&&temp[win[index][0]]===temp[win[index][2]]){
            flag=true;
            props.setWinner(true);
            props.setply(val);
        }
    }
   }
   if(!flag&&count===9)props.setDraw(true);
}
    return(
        <div className={classes.board}>
                <div className={classes.row}>
                    <Cell  data={bord} value={1} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={2} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={3} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                </div>
                <div className={classes.row}>
                    <Cell  data={bord} value={4} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={5} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={6} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                </div>
                <div className={classes.row}>
                    <Cell  data={bord} value={7} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={8} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                    <Cell  data={bord} value={9} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} setBord={setBord}/>
                </div>
        </div>
    );
}

export default Board;