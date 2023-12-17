import { useRef } from "react";
import { supabase } from "../pages/login/login";


export default function Modal({ closeModal }) {
    const clearInput = useRef();
    const post = async(e) => {
        e.preventDefault();
        const addpost = Object.fromEntries(new FormData(e.target));
        const postscontent = addpost.content
        const { data, error } = await supabase.from('tweetler').insert({ tweet: postscontent })
        clearInput.current.value = ''
        closeModal(false);
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
                            <img src="https://picsum.photos/id/2/55/55" alt="" />
                        </div>
                    </div>
                    <form className="tweetForm" onSubmit={post}>
                        <input type="text" name="content" placeholder="What is happening?!" ref={clearInput} />
                        <button>post</button>
                    </form>
                </div>
        </div>
    );
}