import "../User/Modal.scss"
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


export function Modal (props) {


    return(
        <div className="modal-dilog" onClick={() => props.setActive(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <CloseSharpIcon style={{}} onClick={() => props.setActive(false)}/>
                {props.children}
            </div>
        </div>
    )
}