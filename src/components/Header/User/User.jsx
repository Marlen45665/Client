import "../User/User.scss"
import { useState } from "react"



function User(props){

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(modal => !modal)
        props.opens(modal)
    }

    return(
        <p className="user-container" onClick={openModal}>
            Ref Conf 2021
        </p>
    )
}

export default User