import { useNavigate } from "react-router-dom";
import { supabase } from "../../../pages/login/login"


export default function Usershortcut() {
    const logoutnavigate = useNavigate();
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        logoutnavigate('/login');
        console.log(error);
    }
          
    return(
        <div className="shortcutArea">
            <div className="shortcutContent">
                <div className="shortcutImg">
                    <img src="https://picsum.photos/id/2/40/40" alt="" />
                </div>
                <div className="shortcutUser">
                    Anıl ÇElik <br />
                    @anlclk
                </div>
                <div className="shortcutSignout">
                    <button className="btnLogout" onClick={signOut}>log out</button>
                </div>
            </div>
        </div>
    );
}