import { TanStackDataFetch, AddInfo, NavBar,EditInfo } from "./components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<TanStackDataFetch />} />
          <Route path="/addInfo" element={<AddInfo />} />
          <Route path="/editInfo/:id" element={<EditInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
