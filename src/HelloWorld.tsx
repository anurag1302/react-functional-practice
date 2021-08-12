import { useEffect, useState } from "react";
import './HelloWorld.css';

export default function HelloWorld() {
  // eslint-disable-next-line
  const [todayDate, todayDateUpdate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      todayDateUpdate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const person = {
    name: "Anurag",
    age: 35,
    isActive: true,
  };

  const logoUrl='https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png';

  const squared=(value:number)=>value*value;

  return (
    <div className='simple'>
        <img alt='iron-man' src={logoUrl} />
      <h1>Hello World</h1>
      <p>A functional component</p>
      <p>{2 + 3}</p>
      <p>{todayDate.toString()}</p>
      <p>
        Hi I am {person.name.toUpperCase()} and I am {person.age} years old !!!
      </p>
      <p>{person.isActive ? <div>person is present</div> : <div>person is absent</div>}</p>
      <p>{squared(25)}</p>
    </div>
  );
}
