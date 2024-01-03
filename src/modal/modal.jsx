import { useContext, useRef } from "react";
import { supabase } from "../pages/login/login";
import SiteContext from "../context/SiteContext"

export default function Modal({ closeModal }) {
    const user = useContext(SiteContext);
    console.log(user);
    const clearInput = useRef();
    const post = async(e) => {
        e.preventDefault();
        const addpost = Object.fromEntries(new FormData(e.target));
        const postscontent = addpost.content;
        const { data: postinimg, error: postinimgerror } = await supabase.storage
            .from('postsImg')
            .upload(`${postscontent}.jpg`, addpost.postImg)
            console.log(postinimg);
            const { data, error } = await supabase.from('tweetler').insert({
                content: postscontent,
                profile_id: user.id
            });        
        clearInput.current.value = ''
        closeModal(false);
        window.location.reload(true);
    }
    return(
        <div className="addTweetArea">
            <button className="btnModal" onClick={() => { closeModal(false) }}>
                <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                        fill="#000" 
                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z">
                    </path>
                </svg>    
            </button>
            <div className="profileandTweet">
                <div className="modalProfilePictures">
                    <div className="modalImg">
                        <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/avatar/${user?.email}.jpg`} alt="" />
                    </div>
                </div>
                <form className="tweetForm" onSubmit={post}>
                    <input type="text" name="content" id="postContent" placeholder="What is happening?!" autoComplete="off" ref={clearInput} />
                    <div className="addpostImgArea">
                        <label htmlFor="postImg">Resim yükle</label>
                        <input type="file" name="postImg" id="postImg" accept="image/jpg, image/jpeg" />
                    </div>
                    <button className="addpostBtn">Gönder</button>
                </form>
            </div>
        </div>
    );
}