import { supabase } from "../login"; 
import { useRef } from "react";

export default function SignIn() {
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


    const addUser = async(e) => {
        e.preventDefault();
        const userSignIn = Object.fromEntries(new FormData(e.target));
        
        const { data, error } = await supabase.auth.signUp(
            {
                email: userSignIn.email,
                password: userSignIn.password,
                options: {
                    data: {
                        bio: userSignIn.bio,
                        username: userSignIn.username,
                        userId: userSignIn.userId
                    }
                }
            }
        );

        const  { data: updateData , error: updateError } = await supabase.from("profiles").update(
            {
                user_name: userSignIn.username,
                user_id: userSignIn.userId,
                bio: userSignIn.bio
        })

        const { data: imgWallpaper, error: imgWallpaperError } = await supabase.storage
            .from('profileandwallpaper')
            .upload(`${userSignIn.email}1.jpg`, userSignIn.wallpaperImg);
            
        
        

        const { data: imgProfilePictures, error: imgProfilePicturesError } = await supabase.storage
            .from('profileandwallpaper')
            .upload(`${userSignIn.email}.jpg`, userSignIn.profilePicturesUpload);
        
}

    return(
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
    );
}