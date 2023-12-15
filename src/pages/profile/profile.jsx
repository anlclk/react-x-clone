import { useEffect, useState } from 'react';
import { supabase } from '../login/login';


export default function Profile() {
    const [user, setUser] = useState(null);


 
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          setUser(session?.user);
        })
      }, []);

    console.log(user)
      

    return(
        <>
        <div className="profileUsername">
            <h4>{user?.user_metadata?.username}</h4>
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
                    <h4>{user?.user_metadata?.username}</h4>
                    <h5>{user?.user_metadata?.userId}</h5>
                    <h5>{user?.user_metadata?.bio}</h5>
                </div>
            </div>
            <div className='displayShare'>
                <div className='displayClickArea'>
                    <button className='displaybtnPost'>Gönderiler</button>
                </div>
                <div className='displayClickArea'>
                    <button className='displaybtnLikes'>Beğeniler</button>
                </div>
            </div>
            <div>göndriler</div>
        </div>
        </>
        
    );
}