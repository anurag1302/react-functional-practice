import { useState } from "react";
import SelectComponent from "./SelectComponent";

export default function ConditionalsIfElse()
{
    const [selectedValue, setSelectedValue]=useState(1);

    function showMessage()
    {
        if(selectedValue===1)
        {
            return <p>too low of a number - {selectedValue}</p>
        }
        else if (selectedValue===2)
        {
            return <p>you can do better - {selectedValue}</p>
        }
        else if(selectedValue===3)
        {
            return <p>getting better - {selectedValue}</p>
        }
        else{
            return (
                <>
                <h3>very good</h3>
                <h4>indeed - {selectedValue}</h4>
                </>
            )
        }
    }
    return (
        <>  
        <h2>If Else Example using useState</h2>
        <div>
            <select onChange={(e)=>
            {
                console.log(e.currentTarget.value);
                setSelectedValue(parseInt(e.currentTarget.value));
            }}>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
                <option value={5}>Five</option>
            </select>
        </div>
        <div>
            <p>usage usi9ng SelectComponent</p>
            <SelectComponent arrayLimit={7} onSelected={setSelectedValue}/>
        </div>
        <div>
            {showMessage()}
        </div>
        </>
    )
}