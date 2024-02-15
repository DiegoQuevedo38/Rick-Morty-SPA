import {useState} from "react";


export default function SearchBar({ onSearch }) {

const [id, setId] = useState("");

function handleChange(event){
   const { value } = event.target;
    const input = Number(value);
    if (isNaN(input)) throw new TypeError("Must be a number");
    else setId(value);
}

function handleClick() {
   onSearch(id);
 }

    return (
       <div>
         <input type='search' placeholder="Busca por ID" name="searchbar" onChange={handleChange} />
         <button onClick={handleClick}>Agregar</button>
       </div>
    );
 }
