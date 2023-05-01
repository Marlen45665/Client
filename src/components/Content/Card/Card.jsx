import ComponentCard from "./ComponentCard/ComponentCard";
import "../Card/Card.scss"
import { useState, useEffect } from "react";

function Card(){
    const _URL = "https://jsonplaceholder.typicode.com/posts"
    // const _URL = "https://jsonplaceholder.typicode.com/photos"
    const [st, setSt] = useState([])

    useEffect(() => {
        fetch(_URL)
        .then(res => res.json())
        .then(res => setSt(res))
        console.log("fetch")
    }, [])
    
    return(
        <section className="card-container">
            <p className="card-pharagraph">{st.length} Cards</p>
            { 
            st.map(i => {
                return(
                    <ComponentCard key={i.id} img={i.url} title={i.title} body={i.thumbnailUrl}/>
                )
            })
            }
        </section>
    )
}

export default Card;