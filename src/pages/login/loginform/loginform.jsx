import { useNavigate } from "react-router-dom";
import { supabase } from "../login";

export default function LoginForm() {
    
    const navigate = useNavigate();

    const userLogin = async(e) => {
        e.preventDefault();
        const userLoginForm = Object.fromEntries(new FormData(e.target));
        const { data: {user}, error } = await supabase.auth.signInWithPassword(
            {
                email: userLoginForm.email,
                password: userLoginForm.password,
            })

            if(error) {
                console.log('Hatalı şifre veya böyle bir kullanıcı bulunamadı');
                return;
            }
        navigate('/');
    }
    return(
        <form id="login" autoComplete="off" className="form" onSubmit={userLogin}>
            <input required type="email" name="email" placeholder="e-mail"/> 
            <input required type="password" name="password" placeholder="password" />
            <button className="btnLogin" type="submit">login</button>
        </form>
    );
}