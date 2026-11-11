/*
#1) What is the meaning of the caret (^) symbol?

When you see something like:

"react": "^19.0.1"

-> The caret (`^`) means:
  Install the latest minor and patch versions of that package, but don’t upgrade the major version.

Example:

`"^19.0.1"` means npm/yarn can install anything from:

  ```
19.0.1  →  19.x.x  (latest minor/patch)
  ```

but it will not automatically upgrade to version 20.0.0 (because major version changes may break compatibility).

--- Comparison with other symbols:
  `"~19.0.1"` → Only allow patch updates (like `19.0.2`, `19.0.3`) but not minor (`19.1.0`).
  `"19.0.1"` (no symbol) → Exactly that version, no auto-updates.
  `"*"` → Install absolutely any version (very risky).
  `"latest"` → Always pulls the newest available version.

--- So in short:
`^` keeps you safe from breaking changes (major updates) but still lets you get bug fixes and new features from minor/patch updates not from major updates.

#2) What is the useState hook?
useState is a React Hook that returns an array with two elements: the current state value and a function used to update the state. We can also provide an initial state value when calling useState.

#3) Fragment Tag in React
In React, a Fragment (<React.Fragment> or shorthand <> </>) lets us group multiple elements without adding an extra node to the DOM.
Normally, React components must return a single root element, so we wrap everything in a <div id="root"> --here-- </id>. But that adds unnecessary DOM nodes. Fragments solve this by grouping elements invisibly.
Fragments let us group elements without creating unnecessary DOM nodes. This keeps the DOM tree smaller, 
cleaner and better for performance in big apps.

Fragment का use हम तब करते हैं जब हमें कई JSX elements को एक साथ रखना हो, लेकिन DOM में कोई extra wrapper means We use a Fragment when we want to group multiple JSX elements without adding an extra DOM node.

In production, neither is universally preferred. It depends on whether you actually need a DOM element.  Use Fragment when you only need to group elements and don't need a wrapper element.  Use div when the wrapper has a purpose, for example, you need CSS styling, a class, layout, positioning, or a semantic/structural container.  

#4) Named and Default Exports in JavaScript
Default Export → Only one per file. Imported without curly braces.
Named Export → Can export multiple values. Imported with curly braces.

Example:

export default Greet;
export const Add = (a, b) => a + b;

// app.js
import Greet from "./Greet";  // default import
import { Add } from "./Add"; // named import

#5) What is the useRef hook?
useRef is mainly designed to store a reference to DOM elements like input fields or buttons. We can access 
the element using the .current property. Unlike state, changing a ref value does not trigger a re-render. 
This makes useRef very useful when we want to manipulate the DOM or store mutable values without causing 
the component to re-render.

#6) What is a Pure Component and Impure Component?
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

#7) Derived State in React
Derived state is a value that is calculated from existing state or props, instead of being stored separately in the state. It allows you to avoid storing redundant information and keeps your components more predictable and easier to maintain.

---Why Use Derived State:

->Reduces chances of inconsistent state.
->Makes the component simpler and more maintainable.
->Optimizes React rendering, since you don’t update extra state unnecessarily.

If you need some value or want to calculate something, you don’t always need to create a new state. You can use existing states to derive the value you need. This approach helps keep your component simpler and more maintainable. It also avoids redundancy and reduces the chance of your states becoming inconsistent.

Note:
For a practical example of derived state, please visit the React section in your notes, where you can see the Derived State Example in action.

#8)--template react vs  --template react-swc
( pnpm create vite my-react-app --template react vs pnpm create vite my-react-app --template react-swc )

=> First learn what is Babel (Please see : In "JsQuestion.js" section question number "#38")

--template react 
->Use Babel 
->Written in Javascript
->Traditional, well-established tool but slower

--template react-swc : 
->Use (SWC-Speedy Web Compiler) 
->Written in Rust (much faster than JavaScript-based Babel)
->Faster ( Significantly faster compilation and Hot Module Replacement (HMR) )
->SWC is typically 20-70x faster than Babel because it's written in Rust instead of JavaScript. You'll notice:
-Faster initial dev server startup
-Faster hot reloads when you save files
-Faster production builds

SWC does exactly the same job as Babel - both transpiling modern JS for browser compatibility AND converting JSX. It's just written in Rust, making it much faster.

For most modern React projects, --template react-swc is the better choice. The speed improvements are noticeable, and SWC supports all standard React/JSX features. Unless you have a specific need for Babel plugins, go with SWC!

#9) What is the difference between Link, NavLink, and useNavigate?
>In short 

“`Link` and `NavLink` are JSX components used only inside the return statement for static navigation, while `useNavigate` is a hook used inside JS logic or functions for dynamic navigation and it can also handle going forward or backward.”

>In Deep

-- `Link` and `NavLink`

✅ Used only inside JSX
❌ Cannot be used inside JavaScript logic or functions

They are React components, not functions or hooks.
So they can only appear in your JSX return part, like this:

return (
  <div>
    <Link to="/home">Home</Link>
    <NavLink to="/about">About</NavLink>
  </div>
);

🧠 They are perfect for:

  Static navigation (when a user clicks something)
  Menus, navbars, or in-page links
  Showing which page is "Active" (`NavLink` only)


-- `useNavigate`

✅ Used inside JS logic or functions
❌ Cannot be used directly in JSX

It’s a hook, not a component.
You call it in your logic to navigate programmatically.

Example:

const navigate = useNavigate();

function handleLogin() {
  // after successful login
  navigate("/dashboard"); // redirects user dynamically
}

You can also use:

navigate(-1); // go back
navigate(1);  // go forward

--🧠 It’s perfect for:

  Redirecting after actions (like login, logout, form submission)
  Conditional navigation (like “if user not logged in → go to /login”)
  Going back or forward in history

-- 🔸 Link / NavLink = JSX Components → used for static navigation
-- 🔸 useNavigate = Hook → used for dynamic navigation (logic-based)

#10) What is ? (Optional Chaining)?
Optional chaining is a feature in JavaScript that allows you to safely access properties of an object or call functions without running into errors when a value in the chain is undefined or null. Normally, if you try to access a property of undefined or null, JavaScript throws an error and your app may crash. Optional chaining solves this problem by using the ?. operator. When you write object?.property, JavaScript first checks if object is defined. If it is, it returns the property value. If it is undefined or null, it simply returns undefined instead of throwing an error. This makes your code cleaner and safer, especially when working with data from APIs, where some properties might be missing or delayed.

--In simple language
Optional chaining basically ensures that if any part of the chain is undefined or null, it won’t throw an error. Instead, it simply returns undefined. This keeps your code clean and prevents unexpected crashes, especially when dealing with asynchronous data or nested objects.

--Examples:
>1
const user = {
  name: "Yashu",
  address: {
    city: "Delhi"
  }
};

console.log(user.address.city);  // "Delhi"
console.log(user.contact.phone); // ❌ Error: Cannot read properties of undefined
console.log(user.contact?.phone); // ✅ undefined (safe)

>2
const data = undefined;
console.log(data?.map(item => item.name)); // Output: undefined, safe

#11) What is react virtual DOM ?
React uses a reconciliation algorithm, also called the diffing algorithm. When the UI changes, React creates a new virtual DOM tree and compares it with the previous virtual DOM one. It identifies the differences and updates only the necessary parts of the real DOM.


#11) What is useEffect and where to use it  ?
useEffect is a React hook used to handle side effects, like data fetching or timers, after a component renders.

(A side effect is an operation that interacts with something outside the React rendering process)

examples : API request, Browser storage, Timer,  Direct DOM interaction, Subscriptions

#12) What are Props and Prop Drilling?
Props are a way to pass data from a parent to a child in React. They allow us to share data between different components, pages, or parts of the application while maintaining a one-way data flow.

Prop drilling happens when we have to pass data through multiple intermediate components because we need to reach a child component that needs the data. The intermediate components don't need the data themselves, but we still have to pass it through them to reach the child. This creates unnecessary prop passing and can make the code harder to maintain.

#13)Can we pass data from a child component to a parent component?
Yes, but not directly. The parent can pass a callback function to the child as a prop. The child can then call that function and pass the required data to the parent. The parent can receive that data and use it to update its state or perform an action.

This is a common way to handle child-to-parent communication in React.

#14) What is Context API?

Context API is a built-in React feature that allows us to share data between multiple components without passing props through every level of the component tree.

It is mainly used to avoid prop drilling for data that needs to be accessed by multiple or deeply nested components, such as user information, authentication, themes or application settings.

We create a context using `createContext()`, provide the value using a Context Provider, and access that value in a component using `useContext()`.

Short version if the interviewer wants a quick answer:

Context API is a React feature used to share data across multiple components without manually passing props through intermediate components, helping us avoid prop drilling.

#15)What is a component.
A component is a function that returns JSX and is used to build the UI in React. Reusability is one of the main advantages of components (but a component doesn't necessarily have to be reusable. Even a page can be a component)

#16)What is higher order function in JavaScript.
A higher order function is a function that either takes another function as an argument or returns a function. So like map, filter, and reduce in JavaScript are classic examples.

*/
