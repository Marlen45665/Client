import Search from "./Search/Search";
import Card from "./Card/Card";
import "../Content/Content.scss"

function Content(props){
  // console.log(props)
    return(
      <>
          <Search shadow={props.shadow}/>
          <div className="content-container">
            <Card/>
            {props.children}
          </div>
      </>
       
    )
}

export default Content;