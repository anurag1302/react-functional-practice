export default function SelectComponent(props:SelectProps)
{
    const arr=Array(props.arrayLimit).fill(0);
    return (
        <>
        <p>Select Component</p>
        <select onChange={(e)=>
        {
            console.log(e.currentTarget.value);
            props.onSelected(parseInt(e.currentTarget.value));
        }}>
            {arr.map((_,index)=>{
                return <option key={index+1} value={index+1}>{index+1}</option>
            })}
        </select>
        </>
    )
}

interface SelectProps
{
    arrayLimit:number;
    onSelected(value:number):void;
}

SelectComponent.defaultProps={
    arrayLimit:10
}