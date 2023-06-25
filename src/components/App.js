import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0); //cur val
  let [sum, setSum] = useState(0); //cur sum
  console.log(count);

  // function check(count){

  //   if(count>0){
  //     setSum((Number(sum))+(Number(count)))

  //   }
  //   else if(count<0){
  //     setSum((Number(sum))-(Number(count)))
  //     console.log(count);
  //   }
  //   // console.log(typeof Number(sum))
  // }
  // console.log(sum)

  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Sum Calculator</h2>
      <input
        type="number"
        onChange={(e) => {
          setSum(sum + Number(e.target.value));
          setCount(e.target.value);
          // check(count)
        }}
        value={count}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
