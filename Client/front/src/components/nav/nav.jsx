import Searchbar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

export default function Nav ({ onSearch }){
    return (
        <nav>
            <h1>Hola, este es mi Ricky Martin</h1>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorites</Link>
            <Searchbar onSearch={onSearch}/>
            <Link to="/login">Logout</Link>
        </nav>
    )
}