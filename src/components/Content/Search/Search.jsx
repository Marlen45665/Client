// import shadows from "@mui/material/styles/shadows";
import "../Search/Search.scss"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search(props){
    console.log(props.shadow)
    
    
    return(
        <div className={props.shadow ? "input-box shadow" : "input-box"}>
            <div className="input-wrapper">
                <div className="input-container">
                    <SearchSharpIcon style={{fontSize: "25px", marginRight: "5px"}}/>
                    <input className="main-input" placeholder="Search"></input>
                </div>
            </div>
        </div>
    )
}

export default Search