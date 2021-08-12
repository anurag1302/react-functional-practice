import SelectComponent from "./SelectComponent";

export default function MapExample(){
    const myArray=[1,2,3,4,5];
    const myArray2=Array(50).fill(0);
    return (
        <>
        <h2>Map Example</h2>
        <div>select list using hardcoded array</div>
        <select onChange={(e)=>
        {
            console.log(e.currentTarget.value);
        }}>
            {myArray.map((number)=>{
                return <option key={number} value={number}>{number}</option>
            })}
        </select>

        <div>select list using array.fill method</div>
        <select onChange={(e)=>
        {
            console.log(e.currentTarget.value);
        }}>
            {myArray2.map((number,index)=>{
                return <option key={index+1} value={index+1}>{index+1}</option>
            })}
        </select>

        <div>select list using SelectComponent</div>
        <SelectComponent onSelected={(e)=>{alert(e)}}/>

        <SelectComponent arrayLimit={100} onSelected={(e)=>{alert(e)}}/>
        </>
    )
}