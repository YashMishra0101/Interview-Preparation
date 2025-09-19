import "./App.css";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";
import { Hide } from "./Hide";
import { TakeInputValue } from "./TakeInputValue";
import SkillsCheckbox from "./SkillsCheckbox";
import Clock from "./Clock";
import FetchEmployess from "./FetchEmployess";
// import Practice from "./Practice.jsx";
import ReactCss from "./ReactCSS";

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
        <ReactCss/>
        {/* <Practice /> */}
      </div>
    </>
  );
}

export default App;
