import React, { useState } from "react";

function App() {
  let a = 5;
  let b = -19;
  console.log(a + b);
  const [val, setVal] = useState(0);

  return (
    <>
      <h1>hello</h1>

      <div className=" absolute left-[50%] -translate-x-[90%]"> {val} </div>
      <button
        onClick={() => setVal(val + 1)}
        className=" ml-90 bg-blue-500 bg-blend-screen  ml-5 px-4 py-2 rounded-xl hover:bg-red-900  cursor-pointer t hover:text-white shadow-2xl"
      >
        add
      </button>
      <div>
        <div class="bg-white dark:bg-gray-800">
          <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
          <p class="text-gray-600 dark:text-gray-300">hi</p>
        </div>
      </div>
      <div className=" ml-30 text-red-700 ">karan is back</div>
      <div></div>
      <h1>hii</h1>
      <div className="h-52 w-52 border-4 mt-20  hover:rotate-45  animate-spin     absolute left-[50%] -translate-x-[90%] "></div>
    </>
  );
}

export default App;