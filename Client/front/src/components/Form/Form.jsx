import style from "./Form.module.css"
import { useState } from "react";
import validation from "./Validation";


export default function Form({ login }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserData({
            ... userData, 
            [name]: value
        });
        setErrors(validation({
            ... userData,
            [name]: value
        }));
    }

    function handleSubmit (e){
        e.preventDefault();
        login(userData);
    }

    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <h1 className={style.text}>LOGIN</h1>
            <h3 className={style.text}>¡Vamos Morty ingresa!</h3>
            <label className={style.label}>
                Email:
                <input
                    type="email"
                    placeholder="mail@mail.com"
                    name="email"
                    key="email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </label>
            {errors.email && <p>{errors.email}</p>}
            <label className={style.label}>
                Contraseña:
                <input
                    type="password"
                    placeholder="Contraseña123"
                    name="password"
                    value={userData.password}
                    key="password"
                    onChange={handleChange}
                />
            </label>
            {errors.password && <p>{errors.password}</p>}
            <br />
            <button type="submit" className={style.button}>Enviar</button>
        </form>
    )
}