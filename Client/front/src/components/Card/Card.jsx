import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addFav, removeFav} from "../../redux/actions/actions";

function Card ({
   name, 
   id, 
   image, 
   status, 
   species, 
   gender, 
   origin, 
   onClose
}) {
   
   const dispatch = useDispatch();
   const favorites= useSelector((state) => state.myFavorites)
   const [isFav, setIsFav] = useState(false);

   useEffect(()=>{
      favorites.some((fav) => fav.id === id) && setIsFav(true)
   }, [favorites])

   const handleClick = () => {
      onClose(id)
      }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      }
      else {
         setIsFav(true)
         dispatch(addFav({
            name,
            id, 
            image, 
            status, 
            species, 
            gender, 
            origin, 
            onClose
            })
         )
      }
   } 

return (
   <div id ={ id }>
      { !isFav && (<button onClick={handleClick}>X</button>)}
      { isFav ? (<button onClick={handleFavorite}>❤️</button>) :
         (<button onClick={handleFavorite}>🤍</button>)}
      <Link to={`/detail/${id}`} >
         <h2>Nombre: {name}</h2>
         <img src={image} alt='Not found' />
      </Link>
         <h2>Especie: {species}</h2>
   </div>
    );
 }

export default Card;