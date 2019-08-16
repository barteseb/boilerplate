import React from 'react';

const AppChild = (props: any) => {
    const clickHandler = () =>{
        console.log('hello')
        //props.handler('fire with value');
    }
    return (
        
       <div>
           <button onClick={props.handler}>fire</button>
           <button onClick={clickHandler}>fire with value</button>
       </div>
       
    )
}

export default AppChild;