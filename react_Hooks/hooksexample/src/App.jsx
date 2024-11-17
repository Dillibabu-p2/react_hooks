// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(null);

//   const handleAdd = () => {
//     setNum((currValue) => {
//       return currValue + 1;
//     });
//   };

//   const handleSub = () => {
//     setNum((currValue) => {
//       return currValue - 1;
//     });
//   };

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleSub}>Sub </button>
//     </div>
//   );
// };

//export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [text, setText] = useState("Hello");

//   function handleChange(e) {
//     setText(e.target.value);
//   }
//   return (
//     <div>
//       <input value={text} onChange={handleChange} />
//       <p>you typed: {text}</p>
//       <button onClick={() => setText("Hello")}>Reset</button>
//     </div>
//   );
// };

// export default App;

//Example for UseRef Hooks

import { useState, useEffect, useRef } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(10);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;
