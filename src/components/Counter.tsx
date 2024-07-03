import { useState } from "react";


const Counter = () => {

const [counterValue , setCounterValue] = useState(0);

const Increment = () => {
   setCounterValue(counterValue + 1);
}

const Decrement = () =>{
    setCounterValue(counterValue - 1);
}

const Reset = () =>{
    setCounterValue(0);
}
  return (
    <section className="mb-10 flex flex-col">
      <h2 className="text-2xl">Count is : </h2>
      <p className="text-xl">{counterValue}</p>
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={Decrement}>- Decrement</button>
        <button onClick={Increment}>+ Increment</button>
      </div>
      <div className="flex gap-16 justify-center">
        <button onClick={Reset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
