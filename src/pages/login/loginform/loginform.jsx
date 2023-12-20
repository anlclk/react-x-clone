import { useNavigate } from "react-router-dom";
import { supabase } from "../login";
import { useState } from "react";

export default function LoginForm() {
    const [loginfailed, isloginfailed] = useState('false');
    const navigate = useNavigate();

    const userLogin = async(e) => {
        e.preventDefault();
        const userLoginForm = Object.fromEntries(new FormData(e.target));
        const { data, error } = await supabase.auth.signInWithPassword(
            {
                email: userLoginForm.email,
                password: userLoginForm.password,
            })
            console.log(data);

            if(error) {
                isloginfailed('true');
            }
        navigate('/');
    }
    return(
        <form id="login" autoComplete="off" className="form" onSubmit={userLogin}>
            <input required type="email" name="email" placeholder="e-mail"/> 
            <input required type="password" name="password" placeholder="password" />
            <button className="btnLogin" type="submit">Giriş yap</button>
            {loginfailed ? <h1>Email ya da Şifre hatalı</h1> : ''}
        </form>
    );
}