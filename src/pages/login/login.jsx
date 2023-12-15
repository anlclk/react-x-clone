import { useRef, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import SignIn from "./register/register";
import LoginForm from "./loginform/loginform";


export const supabase = createClient('https://lidphrkwukyweuidqvrw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZHBocmt3dWt5d2V1aWRxdnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NTQyNjksImV4cCI6MjAxNjQzMDI2OX0.3MfFWLCYehENg4UzNfw1I452MesQKqw0MgNJLNjNSqk');


export default function Login() {
    const [login, setLogin] = useState("login");
    const sliderRef = useRef();


    function handleRegister() {
        console.log('sigin tıklandı');
        sliderRef.current.classList.remove('left');
        setLogin("sigin");
    }
    function handleLogin() {
        sliderRef.current.classList.add('left');
        console.log('logintıklandı')
        setLogin("login");
    }   
    return(
        <div className="loginRegisterPage">
            <div className="loginRegister">
                <div className="btnBox">
                    <div className="slider" ref={sliderRef}>
                        <svg viewBox="0 0 24 24" height="40" width="40">
                            <path 
                              fill="#fff"
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </svg>
                    </div>
                    <button className="btnToggle" onClick={handleLogin} >Log In</button>
                    <button className="btnToggle" onClick={handleRegister} >Sign In</button>
                </div>
                
                {login === "login" ? <SignIn /> : <LoginForm />}
                
            </div>
        </div>
    );
}



