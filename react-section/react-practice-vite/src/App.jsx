import "./App.css";

import { Toaster } from "react-hot-toast";
import Counter from "./Counter";
import DevelopersInfo from "./DevelopersInfo";
import RoleAssign from "./RoleAssign";
import { Hide } from "./Hide";
import { TakeInputValue } from "./TakeInputValue";
import SkillsCheckbox from "./SkillsCheckbox";
import Clock from "./Clock";
import FetchEmployess from "./FetchEmployess";
import ReactCss from "./ReactCSS";
import UseRef from "./UseRef";
import React18Form from "./React18Form";
import React19Form from "./React19Form";
import InputFieldData from "./InputFiledData";
// import Practice from "./Practice.jsx";

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
        <ReactCss />
        <UseRef />
        <React18Form />
        <React19Form />
        {/* <Practice /> */}
        <InputFieldData />
        <Toaster />
      </div>
    </>
  );
}

export default App;
