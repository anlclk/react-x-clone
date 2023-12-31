import { useNavigate } from "react-router-dom";
import { supabase } from "../../../pages/login/login"
import SiteContext from "../../../context/SiteContext"
import { useContext } from "react";



export default function Usershortcut() {
    const logoutnavigate = useNavigate();
    const user = useContext(SiteContext);
    console.log(user);

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        logoutnavigate('/login');
    }

    async function getImg() {
        const { data, error } = await supabase.storage.from('profileandwallpaper').download('370px 377px.jpg');
    }
    return(
        <div className="shortcutArea">
            <div className="shortcutContent">
                <div className="shortcutImg">
                    <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/avatar/${user?.email}.jpg`} alt="" />
                </div>
                <div className="shortcutUser">
                    <p>{user?.user_metadata?.username}</p>
                    <p>{user?.user_metadata?.userdataname}</p>
                </div>
                <div className="shortcutSignout">
                    <button className="btnLogout" onClick={signOut}>çıkış yap</button>
                </div>
            </div>
        </div>
    );
}