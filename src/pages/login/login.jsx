import { useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from "react-router-dom";


const supabase = createClient('https://lidphrkwukyweuidqvrw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZHBocmt3dWt5d2V1aWRxdnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NTQyNjksImV4cCI6MjAxNjQzMDI2OX0.3MfFWLCYehENg4UzNfw1I452MesQKqw0MgNJLNjNSqk');



const addUser = async(e) => {
    e.preventDefault();
    const userSignIn = Object.fromEntries(new FormData(e.target));
    console.log(userSignIn);
    console.log(userSignIn.profilePicturesUpload);
    console.log(userSignIn.wallpaperImg);
    
    const { data, error } = await supabase.auth.signUp(
        {
            email: userSignIn.email,
            password: userSignIn.password,
            options: {
                data: {
                    bio: userSignIn.bio,
                    username: userSignIn.username
                }
            }
        }
    );
    const { data: imgData, error: imgError } = await supabase.storage
        .from('profileandwallpaper')
        .upload('resim.jpg', userSignIn.wallpaperImg);
        console.log(imgData);
        console.log(imgError);
}
    






export default function Login() {
    const loginEl = document.querySelector("#login");
    const registerEl = document.querySelector("#register");
    const btnEl = document.querySelector(".slider");
    

    const navigate = useNavigate()

    const userLogin = async(e) => {
        e.preventDefault();
        const userLoginForm = Object.fromEntries(new FormData(e.target));
        const { data: {user}, error } = await supabase.auth.signInWithPassword(
            {
                email: userLoginForm.email,
                password: userLoginForm.password,
            })
            // console.log(userLoginForm);
            // console.log(user);

            if(error) {
                console.log('Hatalı şifre veya böyle bir kullanıcı bulunamadı');
                return;
            }


        navigate('/');
}
    

    function handleLoginForm() {
        loginEl.style.left = "-500px";
        registerEl.style.left = "28px";
        btnEl.style.left = "0";
    }
    
    function handleRegisterForm() {
        registerEl.style.left = "650px";
        loginEl.style.left = "150px";
        btnEl.style.left = "110px";
    }

    const imagePreview = useRef();
    const profilePicturesPreview = useRef();

    function previewImage(e) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            imagePreview.current.src = ev.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    function previewProfilePictures(e) {
        const readerProfile = new FileReader();
        readerProfile.onload = function(ev) {
            profilePicturesPreview.current.src = ev.target.result;
        }
        readerProfile.readAsDataURL(e.target.files[0]);
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
                <form id="login" autoComplete="off" className="form" onSubmit={userLogin}>
                        <input required type="email" name="email" placeholder="e-mail"/> 
                        <input required type="password" name="password" placeholder="password" />
                        <button className="btnLogin" type="submit">login</button>
                </form>
                <form id="register" className="form" autoComplete="off" onSubmit={addUser}>
                    <div className="wallpaper">
                        <img src="https://placehold.co/550x183" ref={imagePreview} alt="wallpaper" />
                        <label className="wallpaperPreviewArea">
                            <input type="file" className="wallpaperUpload" name="wallpaperImg" onChange={previewImage} accept="image/png, image/jpeg" id="wallpaperInput" />
                        </label>
                    </div>
                    <div className="profilePictures">
                        <div className="profilePictureRelative">
                            <img src="https://placehold.co/377x377" ref={profilePicturesPreview} alt="profilePicture" />
                            <label className="profilePicturesPreviewArea">
                                <input type="file" name="profilePicturesUpload" onChange={previewProfilePictures} accept="image/png, image/jpeg" id="profilePicturesInput" />
                            </label>
                        </div>
                    </div>
                    <div className="userDetails">
                        <input required name="username" type="text" placeholder="username" />
                        <input required type="text" name="userId" placeholder="@userId"/>
                        <input required type="text" name="bio" placeholder="bio" />
                        <input required type="email" name="email" placeholder="e-mail"/>
                        <input required type="password" name="password" placeholder="password"/>
                        <button className="btnLogin" type="submit" >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



