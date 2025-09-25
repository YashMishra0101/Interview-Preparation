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

*/