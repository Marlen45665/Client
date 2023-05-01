import "../ComponentCard/ComponentCard.scss"
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useState } from "react";

function ComponentCard (props){

    const [iconstate, setIconstate] = useState(false);

    function Log (e) {
        setIconstate(() => !iconstate)
    }


    const classIcon = iconstate === false ? "ComponentCard-icon" : "ComponentCard-icon active";
    const IconImg = iconstate === false ? <FavoriteBorderSharpIcon style={{fontSize: "25px"}}/> : <FavoriteSharpIcon style={{fontSize: "28px"}}/> 
    const {title, body, url} = props
    return(
        <div className="ComponentCard-container">  
            <img className="ComponentCard-img" src={url} alt="oops"></img>
            <div className="click-box">
                <div className="ComponentCard-title-block">
                    <div className="ComponentCard-title">{title}</div>
                    <p className="ComponentCard-pharagraph">{body}</p>
                </div>
                <div className="ComponentCard-icon-box">
                    <div className={classIcon} onClick={Log}>
                        {IconImg}
                        {/* <FavoriteBorderSharpIcon style={{fontSize: "30px"}}/> */}
                        {/* <FavoriteSharpIcon/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentCard;