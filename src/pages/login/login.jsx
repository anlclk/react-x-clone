import { useRef } from "react";

export default function Login() {
    const loginEl = document.querySelector("#login");
    const registerEl = document.querySelector("#register");
    const btnEl = document.querySelector(".slider");

    function handleLoginForm() {
        registerEl.style.left = "28px";
        loginEl.style.left = "-500px";
        btnEl.style.left = "0";
    }
    
    function handleRegisterForm() {
        registerEl.style.left = "650px";
        loginEl.style.left = "150px";
        btnEl.style.left = "110px";
    }

    const imagePreview = useRef();

    function previewImage(e) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            imagePreview.current.src = ev.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
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
                    <button className="btnToggle" onClick={handleLoginForm} >Log In</button>
                    <button className="btnToggle" onClick={handleRegisterForm} >Sign In</button>
                </div>
                <form id="login" className="form">
                        <input required type="text" name="userId" placeholder="@userId"/> 
                        <input required type="password" name="password" placeholder="password" />
                        <button className="btnLogin">login</button>
                </form>
                <form id="register" className="form">
                    <div className="wallpaper">
                        <img src="https://placehold.co/550x183" ref={imagePreview} alt="" />
                        <label className="wallpaperPreviewArea">
                            <input type="file" className="wallpaperUpload" name="wallpaperImg" onChange={previewImage} accept="image/png, image/jpeg" id="wallpaperInput" />
                        </label>
                    </div>
                    <div className="profilePictures">
                        <img src="https://placehold.co/377x377" alt="" />
                    </div>
                    <div className="userDetails">
                        <input required name="username" type="text" placeholder="username" />
                        <input required type="text" name="userId" placeholder="@userId"/>
                        <input required type="email" name="email" placeholder="e-mail"/>
                        <button className="btnLogin">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



