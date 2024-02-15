import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({});
  const URL = `http://localhost:3001/rickandmorty/character`

  function onSearch (){
    const urlCharacter = `${URL}/${id}`;
    axios(urlCharacter)
      .then(({ data }) => {
        if (data.name) setCharacter(data);
        else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => console.log(error));
    }

  useEffect(() => {
      onSearch();
    }, [])

  return (
  <div>
      <h1>Detalles de tu carta #{id}</h1>
      {character.id && (
          <div>
              <h1>Nombre: {character.name}</h1>
              <img src={character.image} alt="Not Found" />
              <h1>Estado: {character.status}</h1>
              <h1>Especie: {character.species}</h1>
              <h1>Género: {character.gender}</h1>
              <h1>Origen: {character.origin?.name}</h1>
              <h1>Ubicación: {character.location?.name}</h1>
          </div>
        )}
  </div>   
)}

export default Details
