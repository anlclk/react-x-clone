import { useContext, useRef, useState } from 'react';
import SiteContext from '../../context/SiteContext'
import MyPosts from './myposts/myposts';


export default function Profile() {
    const profile = useContext(SiteContext);
    const [isClick, setIsClick] = useState(true);
   
    function handleGetPost() {
        setIsClick(true);
    }

    return(
        <>
        <div className="profileUsername">
            <h4>{profile?.user_metadata?.username}</h4>
        </div>
        <div className='profileArea'>
            <div>
                <img src="https://picsum.photos/id/237/598/183" alt="" />
            </div>
            <div className='profilePictures'>
                <img src="https://picsum.photos/id/235/133/133" alt="" />
            </div>
            <div className='informationProfile'>
                <div className='setupProfile'>
                    <button>Profili düzenle</button>
                </div>
                <div>
                    <h4>{profile?.user_metadata?.username}</h4>
                    <h5>{profile?.user_metadata?.userId}</h5>
                    <h3>{profile?.user_metadata?.bio}</h3>
                    <div className='joinedX'>
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path 
                                fill='#71767b'
                                d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z">
                            </path> 
                        </svg>
                        <h6>{profile?.email_confirmed_at.substring(0, 10).split('-').reverse().join('-')} tarihinde katıldı.</h6>
                    </div>
                </div>
            </div>
            <div className='displayShare'>
                <div className='displayClickArea'>
                    <button className={`displaybtnPost ${setIsClick ? 'border' : ''}`} onClick={handleGetPost}>Gönderiler</button>
                </div>
                <div className='displayClickArea'>
                    <button className='displaybtnLikes'>Beğeniler</button>
                </div>
            </div>
            {isClick && <MyPosts/>}
        </div>
        </>
        
    );
}