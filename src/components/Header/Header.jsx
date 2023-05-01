//импорт компонентов
import Navigation from "./Navigation/Navigation"
import User from "./User/User"

//импорт стилей
import "../Header/Header.scss"

import { useState } from "react"



function Header(props){

    const [modal, setModal] = useState(false)


    const handel = () => {
            setModal(modal => !modal)
            props.opens(modal)
    }

    return(
        <div className="header-container">
            <div className="header-wrapper">
                <Navigation/>
                <User opens={handel}/>
            </div>
        </div>
    )
}

export default Header
