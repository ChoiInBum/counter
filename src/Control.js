function Control({onSetCount, reset}) {
    // console.log('랜더링');
    return(
        <div>
            <button onClick={()=>onSetCount(-1)}>-1</button>
            <button onClick={()=>onSetCount(-10)}>-10</button>
            <button onClick={()=>onSetCount(-100)}>-100</button>
            <button onClick={()=>onSetCount(100)}>+100</button>
            <button onClick={()=>onSetCount(10)}>+10</button>
            <button onClick={()=>onSetCount(1)}>+1</button>
            <button onClick={reset}>초기화</button>
        </div>
    );
}

export default Control;