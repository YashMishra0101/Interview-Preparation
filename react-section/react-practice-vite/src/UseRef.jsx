import { useRef } from "react";

const UseRef = () => {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const formHandler = (e) => {
    const refUserName = refName.current.value.trim();
    const refUserEmail = refEmail.current.value.trim();
    e.preventDefault();
    if (!refUserName) {
      refName.current.focus();
      return;
    }
    if (!refUserEmail.includes("@")) {
      refEmail.current.focus();
      return;
    }
    alert("For submitted");
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col p-3 border-2 border-green-500 mt-8">
        <h2 className="text-2xl font-bold text-center mb-5 text-green-600">User ref</h2>
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              ref={refName}
              placeholder="Enter your name"
              className="border-2 border-gray-300 outline-0 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="userEmail">Email:</label>
            <input
              type="text"
              id="userEmail"
              ref={refEmail}
              placeholder="Enter your email id"
              className="border-2 border-gray-300 outline-0 focus:border-blue-500 mt-2"
            />
          </div>
          <button className="border-2 border-blue-300 outline-0 p-2 rounded-2xl mt-2">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
