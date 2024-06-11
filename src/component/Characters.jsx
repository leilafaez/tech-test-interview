import Card from "./Card"

export default function Characters({ characters }) {
  return (
    <div>
      {characters.map((char) => {
        const films = char.films.map((film) => film.split("/").slice(-2)[0]);
        console.log(films);

        return (
          <Card
            key={char.name}
            name={char.name}
            height={char.height}
            birth_year={char.birth_year}
            gender={char.gender}
            url={char.url}
            films={films}
          />
        );
      })}
    </div>
  );
}