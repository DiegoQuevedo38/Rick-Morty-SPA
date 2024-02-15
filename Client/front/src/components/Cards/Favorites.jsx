import { filterCards, orderCards, reset } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Cards from "./Cards";

export default function Favorites () {
    const favorites = useSelector((state) => state.favorites);
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const {name, value} = e.target
        if (name === "order"){
            setAux(!aux);
            dispatch(orderCards(value))
        } else if (name === "filter"){
            dispatch(filterCards(value))
        }
    }

    const handleClick = () => {
        dispatch(reset())
    }

return (
    <div> 
        <select name="order" id="order" onChange={handleChange}>
            <option value="All">Todas</option>
            <option value="Asc" >Ascendente</option>
            <option value="Desc" >Descendente</option>
        </select>
        <select name="filter" id="filter" onChange={handleChange}>
            <option value="All">Todas</option>
            <option value="Male">Hombre</option>
            <option value="Female">Mujer</option>
            <option value="Genderless">No Binario</option>
            <option value="unknown">Desconocido</option>
        </select>
        <button onClick={handleClick}>Reset</button>
        <Cards characters={favorites} />;
    </div>
    )
}