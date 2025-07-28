import {UserLogin, UserProfile} from "../Component/UserComponent";
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








function Hello(){
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
  return(
    <div>
      {/* <PropsArray name = {playersName}/> */}
     {/* <Object userData = {objectData}/> */}
     {/* <Object userData = {objectData2}/> */}
    {/* <ControlledComponent/> */}
    {/* <CheckBoxes/> */}
    <RadioButton/>
    </div>
  )
}

export default Hello;