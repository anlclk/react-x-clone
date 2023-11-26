export default function Login() {
    const loginEl = document.querySelector("#login");
    const registerEl = document.querySelector("#register");
    const btnEl = document.querySelector(".slider");


    function handleLogin() {
        loginEl.style.left = "-450px";
        registerEl.style.left = "50px";
        btnEl.style.left = "0";
    }
    

    function handleRegister() {
        loginEl.style.left = "50px";
        registerEl.style.left = "450px";
        btnEl.style.left = "110px";
    }

    return(
        <div className="loginRegisterPage">
            <div className="loginRegister">
                <div className="btnBox">
                    <div className="slider">
                        <svg viewBox="0 0 24 24" height="40" width="40">
                            <path 
                              fill="#fff"
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                            </path>
                        </svg>
                    </div>
                    <button className="btnToggle" onClick={handleLogin}>Log In</button>
                    <button className="btnToggle" onClick={handleRegister}>Sign In</button>
                </div>
                <form id="login" className="form">
                        <input required type="text" name="userId" placeholder="@userId"/> 
                        <input required type="password" name="password" placeholder="password" />
                        <button className="btnLogin">login</button>
                </form>
                <form id="register" className="form">
                    <input required name="e-mail" type="email" placeholder="e-mail" />
                    <input required name="username" type="text" placeholder="username" />
                    <input required type="text" name="@userId" placeholder="userId" />
                    <input required type="password" name="password" placeholder="password" />
                    <button className="btnLogin">Sign In</button>
                </form>
            </div>
        </div>
    );
}




