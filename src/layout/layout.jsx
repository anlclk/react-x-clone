import { Outlet } from "react-router-dom";
import Leftbar from "./leftbar/leftbar";
import Rightbar from "./rightbar/rightbar";
import { useEffect, useState, createContext } from 'react';
import { supabase } from "../pages/login/login";
import SiteContext from "../context/SiteContext";

export default function Layout() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          setUser(session?.user);
        })
    }, []);

    return(
        <SiteContext.Provider value={user}>
            <div className="container">
                <Leftbar />
                <main className="main">
                    <main className="content">
                        <Outlet />
                    </main>
                <Rightbar />
                </main>
            </div>
        </SiteContext.Provider>
    );
}