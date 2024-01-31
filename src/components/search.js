import search from "../assets/images/IcOutlineSearch.svg"


function Search(){
    return(
   
     <div className="search">
       <img src={search} alt="search"></img>
       <input type="text" placeholder="Search"></input>
     </div>

    )
}
 export default Search