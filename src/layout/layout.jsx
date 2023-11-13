import { Outlet } from "react-router-dom";
import Leftbar from "./leftbar/leftbar";
import Rightbar from "./rightbar/rightbar";


export default function Layout() {
    return(
        <div className="container">
            <Leftbar />
            <main className="main">
                <main className="content">
                    <Outlet />
                </main>
            <Rightbar />
            </main>
        </div>
    );
}