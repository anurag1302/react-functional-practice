import React, { useState } from "react";

export default function Events()
{
    const [isActive, setIsActive]=useState(false);

    const [name, setName]=useState('');
    
    const handleCheckBoxOnChange=function()
    {
        setIsActive(!isActive);
    };

    function handleOnKeyUpChange(e:React.KeyboardEvent<HTMLInputElement>)
    {
        alert(e.currentTarget.value);
    }
    return (
        <>
        <h2>Events Example</h2>
            <div>
                <p>Checkbox onchange Event - external function</p>
                <input type='checkbox' onChange={handleCheckBoxOnChange} />
            </div>

            <div>
                <p>Button onclick event - inline arrow function</p>
                <button onClick={()=>
                {
                    alert('I have been clicked');  
                }}>Click Me</button>
            </div>

            <div>
                <p>Input field onkeyup event - external function</p>
                <input type='text' onKeyUp={(e)=>handleOnKeyUpChange(e)} />
            </div>

            <div>
                <p>Input field onkeyup event - arrow function - 2</p>
                <input type='text' onKeyUp={(e)=>{
                    console.log(e.currentTarget.value);
                    setName(e.currentTarget.value);
                }} />
            </div>

            <div>
                {isActive ? <div>I am active</div>:
                <div>I am not active</div>
                }
            </div>
            <div>
                {name}
            </div>
        </>
        )
}