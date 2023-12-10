import Logo from "./logo/logo";
import Nav from "../nav/nav";
import Usershortcut from "./usershortcut/usershortcut";


export default function Leftbar() {
    return(
        <aside className="leftbar">
            <Logo />
            <Nav />
            <Usershortcut />
        </aside>
    );
}