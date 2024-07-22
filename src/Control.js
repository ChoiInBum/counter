function Control({onSetCount}) {

    return(
        <div>
            <button onClick={()=>onSetCount(-1)}>-1</button>
            <button onClick={()=>onSetCount(-10)}>-10</button>
            <button onClick={()=>onSetCount(-100)}>-100</button>
            <button onClick={()=>onSetCount(100)}>+100</button>
            <button onClick={()=>onSetCount(10)}>+10</button>
            <button onClick={()=>onSetCount(1)}>+1</button>
            <button onClick={()=>onSetCount(0)}>reset</button>
        </div>
    );
}

export default Control;