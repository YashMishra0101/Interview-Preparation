import "./App.css";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";
import { Hide } from "./Hide";
import { TakeInputValue } from "./TakeInputValue";
import SkillsCheckbox from "./SkillsCheckbox";
import RadioSelect from "./RadioSelect";
import Clock from "./Clock";


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
        <RadioSelect />
        <Clock/>
      </div>
    </>
  );
}

export default App;
