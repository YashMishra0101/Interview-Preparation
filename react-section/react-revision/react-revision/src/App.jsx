import "./App.css";

import { Toaster } from "react-hot-toast";
import Counter from "./learningReactCore/Counter";
import DevelopersInfo from "./learningReactCore/DevelopersInfo";
import RoleAssign from "./learningReactCore/RoleAssign";
import { Hide } from "./learningReactCore/Hide";
import { TakeInputValue } from "./learningReactCore/TakeInputValue";
import SkillsCheckbox from "./learningReactCore/SkillsCheckbox";
import Clock from "./learningReactCore/Clock";
import FetchEmployess from "./learningReactCore/FetchEmployess";
import ReactCss from "./learningReactCore/ReactCss";
import UseRef from "./learningReactCore/UseRef";
import React19Form from "./learningForms/React19Form";
import React18Form from "./learningForms/React18Form";
import InputFieldData from "./learningReactCore/InputFiledData";
import ChangingObjectValue from "./learningReactCore/ChangingObjectValue";
import HideShow from "./learningCustomHook/HideShow";
import PropDrillingExample from "./learningPropsDrilling/PropDrillingExample";
import CounterDisplay from "./learningContextApi/CounterDisplay";
import { AppProviders } from "./learningContextApi/context/AppProviders";
import CardInfoDisplay from "./learningContextApi/CardInfoDisplay";
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
        <InputFieldData />
        <ChangingObjectValue />
        <HideShow />
        <Toaster />
        <PropDrillingExample />
        <AppProviders>
          <CounterDisplay />

          <CardInfoDisplay />
        </AppProviders>
        {/* <Practice /> */}
      </div>
    </>
  );
}

export default App;
