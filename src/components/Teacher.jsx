import { useState } from "react";

const Teacher = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{title}</span>

      <h1>{count}</h1>

      <hr />
      <button onClick={() => setCount((prevState) => prevState - 1)}>--</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>++</button>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Teacher;
