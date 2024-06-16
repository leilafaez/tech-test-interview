
import { useState } from "react";
import "./card.css";
import Modal from "./Modal";

export default function Card({name,height,birth_year,gender,url,films}){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlCardClick = () => {
        if(!isModalOpen){
          setIsModalOpen(true);
           
        }
      
    };

    const handleClick =(e)=>{
        e.preventDefault();
        window.open(url, "_blank");
    }
    const closeModal =()=>{
      setIsModalOpen(false);
    }

    return (
      <section className="character-card" onClick={handlCardClick}>
        {isModalOpen && (
          <Modal name={name} films={films} onClose={closeModal} />
        )}

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