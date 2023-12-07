import { useEffect, useState } from 'react';
import { supabase } from '../login/login';


export default function Profile() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
          setUser(session?.user);
          console.log(session)
        })
      }, []);
      

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
                </div>
            </div>
        </div>
        </>
        
    );
}