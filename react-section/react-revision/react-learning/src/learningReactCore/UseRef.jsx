import { useRef } from "react";
//About useRef : The useRef hook in React is used to store a mutable value that persists across re-renders without causing the component to re-render when the value changes. It returns an object with a .current property, where you can store any value you want — like DOM elements, timers, or data that shouldn’t trigger re-rendering. Unlike useState, which re-renders the component every time its value updates, useRef simply updates the .current value silently in the background. This makes useRef ideal for situations where you want to remember something between renders (like input focus, scroll position, or previous values) without re-rendering the component. In short, useState updates cause re-rendering, while useRef updates do not.
const UseRef = () => {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!userName.current.value) {
      userName.current.focus();
      return;
    }
    if (!userEmail.current.value) {
      userEmail.current.focus();
      return;
    }
    alert("Form Submited");
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col py-6 mt-8 border-2 border-green-500">
        <h2 className="font-bold text-green-600 mb-6 text-2xl">
          Use of useRef hook
        </h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              ref={userName}
              placeholder="Enter your name"
              className="border-2 border-gray-400 focus:border-blue-500 outline-0"
            />
          </div>
          <div>
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              ref={userEmail}
              placeholder="Enter your name"
              className="border-2 border-gray-400 focus:border-blue-500 mt-2 outline-0"
            />
          </div>
          <button className="border-2 border-green-600 outline-0 p-2 rounded-2xl mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
