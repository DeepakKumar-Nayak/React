import {UserLogin, UserProfile} from "../Component/UserComponent";
import { Condition } from "../Condition_JSX/Condition";
import { Counter } from "../Counter_useState/Counter";
import { UsingEvents } from "../Events_JSX/UsingEvents";
import TodoJsx from "../Jsx Folder/JsxComponent";
import { VariableWithJSX } from "../Jsx_Variables/variable";
import { MultipleCondition } from "../Multiple_Condition/MultipleCondition";
import { Object } from "../Object_JSX/Object";
import { Props } from "../Props/Props";
import { StateApp } from "../State Topic/StateApp";
import { HideShow } from "../Toggle_Hide/HideShow";
import ComponentData from "./component";
import Header from "./Header";







function Hello(){
  return(
    <div>
      <Props 
        username = "deepak"
        gmail="deepak@gmail.com"
        coursename = "React By Anil Sidhu"
      />
    </div>
  )
}

export default Hello;