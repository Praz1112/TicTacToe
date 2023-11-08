import classes from './Board.module.css';

const Result=(props)=>{

    const reload=()=>{
        window.location.reload();
    }

return(
    <div className={classes.result}>
      <div className={classes.txt}>
      <h1>{props.ply}</h1>
       <button onClick={reload}>Retry</button>
      </div>
    
    </div>
);
}

export default Result;