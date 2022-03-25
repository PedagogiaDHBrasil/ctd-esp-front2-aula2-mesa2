import React from "react";
import Hoc from "../../Hoc";

function CharacterList({ rickandmortyData }) {
  return (
    <section>
      {rickandmortyData.map((data, key) => {
        return (
          <article key={key} className="character">
            <img src={data.image} alt={data.name} />
            <div>
              <p>Nome: {data.name}</p>
              <p>Status: {data.status}</p>
              <p>Espécie: {data.species}</p>
              <p>Gênero: {data.gender}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Hoc(CharacterList);
