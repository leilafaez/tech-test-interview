
import { useState } from "react";
import "./card.css";

export default function Card({name,height,birth_year,gender,url,films}){

    const[showAlert, setShowAlert] = useState(false);

    const handlCardClick = () => {
        if(!showAlert){
            alert(
              `${name} has appeared in the following films: ${films.join(", ")}`
            );
            setShowAlert(true);
        }
      
    };

    const handleClick =(e)=>{
        e.preventDefault();
        window.open(url, "_blank")
    }

    return (
      <section className="character-card" onClick={handlCardClick}>
        <h2>{name}</h2>
        <p>{height}</p>
        <p>{birth_year}</p>
        <p>{gender}</p>
        <a href={url} onClick={handleClick}>
          Link
        </a>
      </section>
    );
}