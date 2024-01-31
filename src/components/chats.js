import profile from "../assets/images/IcOutlineSearch.svg"
import star from "../assets/images/HealthiconsStarSmall.svg"
let pic1 =  "https://ui-avatars.com/api/?background=random"


function Chat(props){
    return(
      <div className="card">
  
        <img className="profile" src={pic1} alt="im"></img>
  
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",flexGrow:1}} className="">
        <h2 className="name">{props.name}</h2>
        <p className="msg">{props.msg}</p>
        </div>
  
        <div className="time">
        <p>{props.time}</p>
        <img className="star" src={star} alt="star"></img>
        </div>
  
      </div>
    )
  }

  const person=[
    {   
        profile:{profile},
        name:"Sandhya",
        msg:"hii,whatapp bro?",
        time:"12.15 am",
        star:{star}
    },
  
    {   
      profile:{profile},
      name:"Magesh",
      msg:"finished studying?",
      time:"11.15 pm",
      star:{star}
  },
  
  {   
    profile:{profile},
    name:"Geetha",
    msg:"saptiya",
    time:"11.35 am",
    star:{star}
  },
  
  {   
    profile:{profile},
    name:"Aakash",
    msg:"hii,bro?",
    time:"13.00 pm",
    star:{star}
  },
  
  {   
    profile:{profile},
    name:"Macha",
    msg:"hii,whatapp bro?",
    time:"12.15 pm",
    star:{star}
  },
  
  {   
    profile:{profile},
    name:"Friend",
    msg:"Va outing pola..",
    time:"10.35 pm",
    star:{star}
  },
  ]


export default Chat
export {person}
