import { UserLogin, UserProfile } from "../Component/UserComponent";
import { Condition } from "../Condition_JSX/Condition";
import { Counter } from "../Counter_useState/Counter";
import { UsingEvents } from "../Events_JSX/UsingEvents";
import TodoJsx from "../Jsx Folder/JsxComponent";
import { VariableWithJSX } from "../Jsx_Variables/variable";
import { MultipleCondition } from "../Multiple_Condition/MultipleCondition";
import { Object } from "../PropsObject/Object";
import { Props } from "../Props/Props";
import { StateApp } from "../State Topic/StateApp";
import { HideShow } from "../Toggle_Hide/HideShow";
import ComponentData from "./component";
import Header from "./Header";
import { PropsArray } from "../Props_Array/PropsArray";
import { Input } from "../InputFeild/Input";
import { ControlledComponent } from "../ControlledComponent/ControlledComponent";
import { CheckBoxes } from "../checkBox/CheckBoxes";
import { RadioButton } from "../RadioButtons/RadioButton";
import { ExampleUinsgMap } from "../Map_in_React/UsingMap";
import { Example } from "../MapWithComponent/Example";
import { UserData } from "../MapWithComponent/userData";
import { Clock } from "../Clock/Clock";
import { ClockStyle } from "../Clock/ClockStyle";
import { Student } from "../NestedReactExample/Student";
import { CounterFunction } from "../Hooks/Counter";
import { UisngStyleInReact } from "../StyleInReact/UsingStyleInReact";
import { Card } from "../StyleInReact/Card";
import { LearnuseRef } from "../UseRefHooks/LearnuseRef";
import { Form } from "../UseRefHooks/Form";
import { User } from "../PassingFunctionInProps/User";
import { ForwardRef } from "../ForwardRef/ForwardRef";
import { DerivedState } from "../DerivedState/DerivedState";
import { LiftingState } from "../LiftingStateInReact/LiftingState";
import { DisplayUser } from "../LiftingStateInReact/DisplayUser";
import { UpdateName } from "../ObjectsInReact/Objects";
import { ObjectsUpdate } from "../ObjectsInReact/ObjectsData";
import { UpdateArray } from "../UpdateArray/UpdateArray";








function Hello() {
  // let objectData = {
  //   username : 'deepak',
  //   gmail : "deepak@gmail.com",
  //   location: "India"
  // }
  // let objectData2 = {
  //   username : 'rahul',
  //   gmail : "rahul@gmail.com",
  //   location: "India"
  // }
  // let playersName = ['KlRahul',"Jaiswal","Sudarshan","Gill","Pant" ]

  function displayName(name){
    console.log(name)
  }
  return (
    <div>
      {/* <PropsArray name = {playersName}/> */}
      {/* <Object userData = {objectData}/> */}
      {/* <Object userData = {objectData2}/> */}
      {/* <ControlledComponent/> */}
      {/* <CheckBoxes/> */}
      {/* <RadioButton/> */}
      {/* <ExampleUinsgMap/> */}
      {/* <UserData/> */}
      {/* <ClockStyle/> */}
      {/* <Student/> */}
      {/* <CounterFunction/> */}
      {/* <UisngStyleInReact/> */}
      {/* <Card/> */}
      {/* <LearnuseRef/> */}
      {/* <Form/> */}
      {/* <User displayName = {displayName} name="deepak"/> */}
      {/* <ForwardRef/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <UpdateName/> */}
      {/* <ObjectsUpdate/> */}
      <UpdateArray/>
    
    </div>
  )
}

export default Hello;