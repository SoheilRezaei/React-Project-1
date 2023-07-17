import { useEffect, useState } from "react";

function MyButton() {
  return (
    <button>My Button</button>
  );
}


export default function MyApp() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1);
  }

  useEffect(function() {
    getAdvice()
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <p>You have already read <strong>{count}</strong> advices!</p>
      <MyButton />
    </div>
  );
}