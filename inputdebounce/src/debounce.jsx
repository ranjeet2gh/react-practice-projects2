import React, { useState, useEffect } from "react";
import axios from "axios";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0)
  const [debouncedValue, setDebouncedValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");


  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })

  useEffect(() => {
    console.log("Input value changed:", inputValue);

    const debounceTimer = setTimeout(() => {
      console.log(
        `Debounce timer expired. 
    Updating debounced value:`,
        inputValue
      );
      setDebouncedValue(inputValue);
    }, 5000); // Debounce time: 500 milliseconds

    return () => {
      console.log("Clearing debounce timer");
      clearTimeout(debounceTimer);
    };
  });

  useEffect(() => {
    console.log("Input value changedT:", inputValue);

    const throttleTimer = setTimeout(() => {
      console.log(
        `Throttle timer expired. 
            Updating throttled value:`,
        inputValue
      );
      setThrottledValue(inputValue);
    }, 1000); // Throttle time: 100 milliseconds

    return () => {
      console.log("Clearing throttle timer");
      clearTimeout(throttleTimer);
    };
  }, [inputValue]);

  const handleChange = (event) => {
    console.log("Input value changing:", event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <div>
        <p>Debounced value: {debouncedValue}</p>
        <p>Throttled value: {throttledValue}</p>
      </div>
      <input
        type="text"
        value={count}
        onChange={e => setCount(count => count +1)}
        placeholder="Type something..."
      />

    </div>
  );
};

export default InputComponent;
