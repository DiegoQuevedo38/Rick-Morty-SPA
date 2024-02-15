function validation({ email, password }) {
    // userData -> {email: "", password: ""}
    const errors = { }
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexPassword = /^(?=.*\d).{1,}$/
    
    if (!regexEmail.test(email)) {
        errors.email = "Debe ser un email"
    }
    if(email.length > 35){
        errors.email = "Debe contener menos de 35 caracteres";
    }
    if(email.length < 1){
        errors.email = "Este campo es obligatorio";
    }  
    if (password.length < 8) {
        errors.password = "Debe tener al menos 8 caracteres"
    }
    if (!regexPassword.test(password)) {
        errors.password = "Debe tener al menos 1 número"
    }
    if(password.length < 1){
        errors.password = "Este campo es obligatorio";
    }
    return errors
}

export default validation