import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Navbar,
  BlogsList,
  BlogInfo,
} from "./component/index";
function App() {
  return (
    <>
      {/* BrowserRouter is a wrapper component in React Router that enable
      client-side routing for apps. It works by using the HTML5 History API
      (pushState, popstate) to keep the UI in sync with the browser’s URL,
      allowing seamless navigation without page reloads. */}
      <BrowserRouter>
        {/* <Navbar /> */}
        {/*Routes  looks at the current URL path in the browser and decides which <Route> to render. */}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogsList" element={<BlogsList />} />
            <Route path="/blogInfo/:id" element={<BlogInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
