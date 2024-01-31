import reactDOM from "react-dom/client"
import "../src/assets/css/style.css"
import Search from "./components/search.js"
import Chat from "./components/chats.js"
import {person} from "./components/chats.js"


const root = reactDOM.createRoot(document.querySelector("#root"))


root.render(
  <div>
    <Search></Search>
{ 
  person.map(function(chats){
    return(
      <Chat profile={chats.profile} name={chats.name} msg={chats.msg} time={chats.time} star={chats.star} ></Chat>  
      )})
}
      </div>
           )