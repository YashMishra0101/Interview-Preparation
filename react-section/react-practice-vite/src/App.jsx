import "./App.css";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";
import { Hide } from "./Hide";
import { TakeInputValue } from "./TakeInputValue";
import SkillsCheckbox from "./SkillsCheckbox";
import Clock from "./ClocK";
import FetchEmployess from "./FetchEmployess";

function App() {
  return (
    <>
      <div className="overflow-hidden pb-14">
        <Counter />
        <DevelopersInfo />
        <RoleAssign />
        <Hide />
        <TakeInputValue />
        <SkillsCheckbox />
        <Clock />
        <FetchEmployess />
      </div>
    </>
  );
}

export default App;
