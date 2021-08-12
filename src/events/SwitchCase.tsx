import { useState } from "react";

export default function SwitchCase()
{
    const [inputText, setInputText]=useState('');

    function display()
    {
        switch(inputText)
        {
            case 'A':
                return <img alt='a' src='https://img.icons8.com/ios/452/a.png'/>
                
            case 'B':
                return <img alt='b' src='https://img.icons8.com/ios/452/b.png'/>
              
            default:
                return <p>No Image Found</p>

        }
    }
    return (
        <>
        <h2>Switch Case Example - using useState</h2>
        <div>
            <input onBlur={(e)=>
            {
                console.log(e.currentTarget.value);
                setInputText(e.currentTarget.value);
            }} />
        </div>
            {display()}
        <div>

        </div>
        </>
    )
}