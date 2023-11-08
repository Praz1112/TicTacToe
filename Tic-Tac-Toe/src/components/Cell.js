import { useState } from 'react';
import classes from './Board.module.css';

const Cell=(props)=>{
   
    const [da,setda] = useState(null);
    const[ani,setani]=useState(false);

    const check=()=>{
        if(da===null){
            let curr=props.currPlayer;
            setda(curr?"X":"O");
            setani(true);
            props.setCurrPlayer(!curr);
            // props.data[props.value-1]=""+da;
            props.setBord(props.value,curr?"X":"O");
        }
    }
    return(
        <div className={`${classes.cell} ${ani?classes.cell_aani:undefined}`} >
            <button onClick={check} >{da}</button>
        </div>
    );
}

export default Cell;