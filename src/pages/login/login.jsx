export default function Login() {
    return(
        <div className="loginRegisterPage">
            <div className="login">
                <h1>Login</h1>
                <form className="loginForm">
                    <input required type="text" name="userId" placeholder="@userId"/> 
                    <input required type="password" name="password" placeholder="password" />
                    <button className="btnLogin">login</button>
                </form>
            </div>
            {/* <div className="register">
                <h1>Register</h1>
                <form>
                    <input required name="username" type="text" placeholder="username" />
                    <input required type="text" name="@userId" />
                    <input required type="password" name="password" placeholder="password" />
                    <button>kayıt ol</button>
                </form>
            </div> */}
        </div>
    );
}