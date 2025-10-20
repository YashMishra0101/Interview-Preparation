import { TanStackDataFetch, AddInfo, NavBar } from "./components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<TanStackDataFetch />} />
          <Route path="/addInfo" element={<AddInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
