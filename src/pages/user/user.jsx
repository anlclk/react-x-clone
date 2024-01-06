import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../login/login";
import UserPosts from "./userposts/userposts";
import UserLikes from "./userlikes/userlikes";


export default function User() {
    const { userdataname } = useParams();
    const [userinpost, setUserInPost] = useState(0);
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isClick, setIsClick] = useState(true);
    
    function handleGetPosts() {
        setIsClick(true);
    }
    function handleGetLikes() {
        setIsClick(false);
    }


    useEffect(() => {
        const getUserData = async () => {
            try {
                const { data: profiles, error } = await supabase.from('profiles').select('*').eq('userdataname', userdataname);
                console.log(profiles);
                setUser(profiles);
            } catch(error) {
                console.log(error);
            }finally {
                setIsLoading(false);
            }
        }
        getUserData();

    }, [userdataname])

    

    console.log(user);

    return(
        <>
        <div className="profileUsername">
            <h4>{user?.[0]?.userdataname}</h4>
            <h6>{userinpost} Gönderi</h6>
        </div>
        <div className="profileArea">
            <div>
                <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/wallpaper/${user?.[0]?.email}1.jpg`} alt="" />
            </div>
            <div className="profilePictures">
                <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/avatar/${user?.[0]?.email}.jpg`} alt="" />
            </div>
            <div className="informationProfile">
                <div className='setupProfile'>
                    <button className='profileChange' style={{ visibility: 'hidden' }}>Profili düzenle</button>
                </div>
                <div>
                    <h4>{user?.[0]?.username}</h4>
                    <h5>{user?.[0]?.userdataname}</h5>
                    <h3>{user?.[0]?.bio}</h3>
                </div>
            </div>
            <div className='displayShare'>
                <div className='displayClickArea'>
                    <button className={`displaybtnPost ${isClick ? 'border' : ''}`} onClick={handleGetPosts}>Gönderiler</button>
                </div>
                <div className='displayClickArea'>
                    <button className={`displaybtnLikes ${isClick ? '' : 'border'}`} onClick={handleGetLikes} >Beğeniler</button>
                </div>
            </div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {isClick ? (
                        <UserPosts user={user} userinpost={userinpost} setUserInPost={setUserInPost} />
                    ) : (
                        <UserLikes user={user} />
                    )}
                </>
            )}
         </div>
        </>
    );
}