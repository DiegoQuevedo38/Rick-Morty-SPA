import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Favorites from './components/Cards/Favorites.jsx';
import Details from "./components/Details/Details.jsx"
import About from './components/About/About.jsx';
import Cards from "./components/Cards/Cards.jsx";
import Form from './components/Form/Form.jsx';
import Home from './components/Home/Home.jsx';
import Nav from "./components/nav/nav.jsx";
import './App.css';


function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const URL = 'http://localhost:3001/rickandmorty'

  const onSearch = async (input) => {
    try {
    const {status, data} = await axios(`${URL}/character/${input}`);
    if (status >= 200 && status < 400){
      if(data.name){
        setCharacters((oldState) => [ ... oldState, data])
      }
    } else {
      window.alert("¡No hay personajes con ese ID!")
    }} catch (error) {
      console.log(error)
    }
  }

  const onClose = (id) => {
    const filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered);
  }


 const login = async ({email, password}) => {
  try {
    const {data} = await axios(`${URL}/login?email=${email}&password=${password}`);
    data.access ? setAccess(true) && navigate("/home") : setAccess (false)
  } catch (error){
    console.log(error)
  }
 }


 useEffect(() => {
  if(access){
    navigate("/home")
  } else {
    navigate("/login")
  }
}, [access])

   return (
      <div className='App'>
        { pathname !== "/login" && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/detail">
            <Route
              index element={
                <div>
                  <h1>Detalles</h1>
                </div>
              } 
            />
            <Route path=":id" element={<Details />}/>
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Form login={login} />}/>
        </Routes>
      </div>
   );
}

export default App;