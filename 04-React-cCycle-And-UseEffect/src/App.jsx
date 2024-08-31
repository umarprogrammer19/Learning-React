import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [btn, setBtn] = useState(true);
  const [update, setUpdate] = useState("Show And Hide");
  const [add, setAdd] = useState(0);
  const updateValue = () => {
    const newValue = prompt("Enter New Value");
    setUpdate(newValue);
  }

  const addValue = () => {
    setAdd(add + 1);
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      setData(res.data)
    })()
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => setBtn(!btn)}>Button</button>
      <button onClick={updateValue}>Update Button</button>
      {btn ? <p>{update}</p> : null}
      <button onClick={addValue}>Number {add}</button>

      {data ? data.map(item => {
        return <div key={item.id}>
          {item.name}
        </div>
      }) : <h1>Loading.........</h1>}
    </>
  );
};

export default App;

// falsy values in javascript
// 0
// "" or '' or ``
// null
// undefined
// false
// NaN
