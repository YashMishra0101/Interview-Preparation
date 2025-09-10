import "./App.css";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";
import {Hide} from "./Hide"
import { TakeInputValue } from "./TakeInputValue";

function App() {
  return (
    <>
      <div className="overflow-hidden pb-14">
        <Counter />
        <DevelopersInfo />
        <RoleAssign />
        <Hide/>
        <TakeInputValue/>
      </div>
    </>
  );
}

export default App;
