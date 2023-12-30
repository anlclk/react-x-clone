import { useRef, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import SignIn from "./register/register";
import LoginForm from "./loginform/loginform";


export const supabase = createClient('https://ucedfsaeksatgnqrouek.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZWRmc2Fla3NhdGducXJvdWVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzAxNTY2OSwiZXhwIjoyMDE4NTkxNjY5fQ.5f3nDqkAs5UyALNwJTZD-9FxtXVPOEH8TFh-TeIGZRI');


export default function Login() {
    const [login, setLogin] = useState("sigin");
    const sliderRef = useRef();


    function handleRegister() {
        sliderRef.current.classList.remove('left');
        setLogin("sigin");
    }
    function handleLogin() {
        sliderRef.current.classList.add('left');
        setLogin("login");
    }   
    return(
        <div className="loginRegisterPage">
            <div className="loginRegister">
                <div className="btnArea">
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
                </div>
                
                {login === "login" ? <LoginForm/> : <SignIn />}
                
            </div>
        </div>
    );
}



