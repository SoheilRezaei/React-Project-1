import { useEffect, useState } from "react";



export default function MyApp() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect( function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice!</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return(
    <p>You've alread read <strong>{props.count}</strong> number of advices!</p>
  );
}