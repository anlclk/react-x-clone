import Logo from "./logo/logo";
import Nav from "../nav/nav";


export default function Leftbar() {
    return(
        <aside className="leftbar">
            <Logo />
            <Nav />
        </aside>
    );
}