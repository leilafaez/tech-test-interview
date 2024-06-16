import { useEffect,useState } from "react";
import Card from "./Card"

export default function Characters({ characters }) {

  const [films, setFilms] = useState([]);

  //characters is an array where each character object has a `films` property.
  //for each character we need to map over the `film` array (url) and creates a Promise for each url 
  //the promises will fetch the film data and parse the JSON response 
  //the result of mapping is an array of array of Promises
  //each inner array related to a character and contains Promises to fetch their films
  //by using flat() method we can flattens one level of nesting and turning array of array to a single array
  useEffect(() => {
    const fetchFilms = async () => {
      const filmPromises = characters
        .map((char) =>
          char.films.map((filmUrl) => fetch(filmUrl).then((res) => res.json()))
        )
        console.log(filmPromises);

        const flatFilm = filmPromises.flat();
        console.log(flatFilm);
        

      const filmData = await Promise.all(flatFilm);
        const filmMap = {};
      filmData.forEach(film => {
        filmMap[film.url] = film.title;
      });

      setFilms(filmMap);
    };
   
    fetchFilms();
  }, [characters]);

  return (
    <div>
      {characters.map((char) => {

       const filmTitles = char.films.map((filmUrl) => films[filmUrl] || "Loading...");

        return (
          <Card
            key={char.name}
            name={char.name}
            height={char.height}
            birth_year={char.birth_year}
            gender={char.gender}
            url={char.url}
            films={filmTitles}
          />
        );
      })}
    </div>
  );
}