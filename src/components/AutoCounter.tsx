import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const startCounter = () => {
    const timer = setInterval(() => {
      setCounterValue((counterVal) => {
        return counterVal + 1;
      });
      console.log("counter value updated");
    }, 1000);
    return timer;
  };

  const stopCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const resetCounter = () => {
    setCounterValue(0);
  };

  console.log('this runs everytime')

  useEffect(() => {
    //mount
    const timer = startCounter();

    return () => {
      //unmount
      clearInterval(timer);
    };
  }, []);


  return (
    <section className="mb-10 flex flex-col">
      <h2 className="text-2xl">Count is : </h2>
      <p className="text-xl">{counterValue}</p>
      <div className="flex gap-4 mb-4 justify-center">
        <button onClick={stopCounter}>- stopCounter</button>
        <button onClick={startCounter}>+ starCounter</button>
      </div>
      <div className="flex gap-16 justify-center">
        <button onClick={resetCounter}>Reset</button>
      </div>
    </section>
  );
};

export default AutoCounter;
