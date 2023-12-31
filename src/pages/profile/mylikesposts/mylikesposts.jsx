import { useEffect, useState, useContext } from "react";
import { supabase } from "../../login/login";
import SiteContext from "../../../context/SiteContext";
import moment from "moment";



export default function MyLikePosts() {
    const [islikeposts, setIsLikePosts] = useState([]);
    const user = useContext(SiteContext);
    console.log(user)
    

    useEffect(() => {
       const getLikePosts = async () => {
            const { data, error } = await supabase.from('likes').select('tweet_id, tweetler(id, created_at, profile_id, content)').eq('tweetprofile', user.id);
            console.log(data)
            const corts = Array.from(new Set(data.map((id) => id.tweetler.profile_id)));
            console.log(corts);

            const { data: profiletable, error: profileerror } = await supabase.from('profiles').select('username, userdataname, email').eq('id', corts);
            console.log(profiletable);

            const likedTweets = data.map((like) => ({
                tweet_id: like.tweet_id,
                tweet: {
                  id: like.tweetler.id,
                  created_at: like.tweetler.created_at,
                  profile_id: like.tweetler.profile_id,
                  content: like.tweetler.content,
                  profile: profiletable.find((profile) => profile.id === like.tweetler.profile_id || {
                    id: null,
                    username: null,
                    userdataname: null,
                  }),
                },
            }));
            console.log(likedTweets);
            
            setIsLikePosts(likedTweets);
       }
       getLikePosts();
    }, [user?.id]);

    return(
        islikeposts.map((x) => <div className="postArea" key={x.tweet_id}>
            <div className="postUserImg">
                <div className="postUserImgArea">
                    <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/avatar/${x?.tweet?.profile?.email}.jpg`} alt="" />
                </div>
            </div>
            <div className="postOtherDetails">
                <div className="postUserInformation">
                    <h3>{x.tweet.profile.username}</h3>
                    <h4>{x.tweet.profile.userdataname}</h4>
                    <h5>{moment(x.tweet.created_at).fromNow()}</h5>
                </div>
                <div className="postContent">
                    <p>{x.tweet.content}</p>
                </div>
                <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/postsImg/${x.tweet.content}.jpg`} className="postinImg" alt="" />
                <div className="postIcons">
                    <button className="commentIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                            </path>
                        </svg>
                    </button>
                    <button className="repostIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                            </path>
                        </svg>
                    </button>
                    <button className="postLikeIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18" >
                            <path 
                                fill="#f91881"
                                d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                            </path>
                        </svg>
                    </button>
                    <button className="commentIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                            </path>
                        </svg> 
                    </button>
                    <button className="commentIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z">
                            </path>
                        </svg>
                    </button>
                    <button className="commentIcon">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>)
    );
}