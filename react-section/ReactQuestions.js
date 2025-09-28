/*
#Q1)Consider the following React code snippets. For each snippet, predict what happens when the button is clicked. Will it display an alert? If yes, what will be the alert message? If no, explain why. Assume these snippets are in a React project and the component is rendered correctly.
1)
const userName = () => {
  alert("Hi My Name is Vanin");
};
function UserInfo() {
  function userName() {
    alert("Hi My Name is Yash");
  }
  return (
    <>
      <button onClick={userName}>Cllick Me</button>
    </>
  );
}

export default UserInfo;


2)
const userName = () => {
  alert("Hi My Name is Vanin");
};

function UserInfo() {

  return (
    <>
      <button onClick={userName}>Cllick Me</button>
    </>
  );
}

export default UserInfo;

3)
function UserInfo() {
  function userName() {
    alert("Hi My Name is Yash");
  }
  return (
    <>
      <button onClick={userName}>Cllick Me</button>
    </>
  );
}

export default UserInfo;
const userName = () => {
  alert("Hi My Name is Vanin");
};

4)
function UserInfo() {
  return (
    <>
      <button onClick={userName}>Cllick Me</button>
    </>
  );
}

export default UserInfo;
const userName = () => {
  alert("Hi My Name is Vanin");
};

#2)What is the meaning of caret ^ symbol.

When you see something like:

"react": "^19.0.1"

-> The **caret (`^`)** means:
  Install the **latest minor and patch versions** of that package, but **don’t upgrade the major version**.

Example:

`"^19.0.1"` means npm/yarn can install anything from:

  ```
19.0.1  →  19.x.x  (latest minor/patch)
  ```

but it **will not automatically upgrade** to version **20.0.0** (because major version changes may break compatibility).

--- Comparison with other symbols:
* `"~19.0.1"` → Only allow patch updates (like `19.0.2`, `19.0.3`) but not minor (`19.1.0`).
* `"19.0.1"` (no symbol) → Exactly that version, no auto-updates.
* `"*"` → Install absolutely any version (very risky).
* `"latest"` → Always pulls the newest available version.

--- So in short:
`^` keeps you safe from breaking changes (major updates) but still lets you get bug fixes and new features from minor/patch updates not from major updates.

#3)What is useState hook.
With the help of that we can update the state.

useState returns an array with two elements. The first element is the current state value and 
the second element is a function that you use to update that state.

We pass an initial state to `useState()`. This can be any data type: number, string, object, array, or even `null`.

When we call the update function, React re-renders the component with the new state value.

#4)Fragment Tag in React.
In React, a Fragment (<React.Fragment> or shorthand <> </>) lets us group multiple elements without adding 
an extra node to the DOM.
Normally, React components must return a single root element, so we wrap everything in a <div>. But that 
adds unnecessary DOM nodes. Fragments solve this by grouping elements invisibly.
Fragments let us group elements without creating unnecessary DOM nodes. This keeps the DOM tree smaller, 
cleaner, and better for performance in big apps.

#5)Named and Default Exports in JavaScript.
Default Export → Only one per file. Imported without curly braces.
Named Export → Can export multiple values. Imported with curly braces.

Example:

export default Greet;
export const Add = (a, b) => a + b;

// app.js
import Greet from "./Greet";  // default import
import { Add } from "./Add"; // named import

#6)What is useRef hook.
useRef is mainly designed to store a reference to DOM elements like input fields or buttons. We can access 
the element using the .current property. Unlike state, changing a ref value does not trigger a re-render. 
This makes useRef very useful when we want to manipulate the DOM or store mutable values without causing 
the component to re-render.

#7)What is Pure Component and Impure Component
--Pure Component
A pure component always renders the same output given the same props and state.
It doesn’t rely on external factors or introduce side effects.
--Impure Component
An impure component may produce different outputs for the same props and state.
This usually happens when it depends on random values, time, or external variables.

Example (Pure):
const Greeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};
👉 If I pass name="Yashu", it will always render Hello, Yashu!.

Example (Impure):
const RandomGreeting = ({ name }) => {
  const randomNum = Math.floor(Math.random() * 10);
  return <h2>Hello, {name}! Your number is {randomNum}</h2>;
};
👉 Even with name="Yashu", the number keeps changing, so the output is not predictable.


A pure component in React behaves like a pure function in JavaScript — it always returns the same output for the same input, which makes it predictable and easy to optimize. An impure component, on the other hand, can produce different outputs for the same input because it depends on external factors like random values or time

#8)Derived State in React
Derived state is a value that is calculated from existing state or props, instead of being stored separately in the state. It allows you to avoid storing redundant information and keeps your components more predictable and easier to maintain.

---Why Use Derived State:

->Reduces chances of inconsistent state.
->Makes the component simpler and more maintainable.
->Optimizes React rendering, since you don’t update extra state unnecessarily.

If you need some value or want to calculate something, you don’t always need to create a new state. You can use existing states to derive the value you need. This approach helps keep your component simpler and more maintainable. It also avoids redundancy and reduces the chance of your states becoming inconsistent.

Note:
For a practical example of derived state, please visit the React section in your notes, where you can see the Derived State Example in action.
*/