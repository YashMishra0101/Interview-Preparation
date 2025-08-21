import "./App.css";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";

function App() {
  return (
    <>
      <div className="overflow-hidden pb-14">
        <Counter />
        <DevelopersInfo />
        <RoleAssign />
      </div>
    </>
  );
}

export default App;
