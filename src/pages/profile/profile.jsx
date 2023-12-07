import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';


export default function Profile() {
    function User() {
        const [user, setUser] = useState(null);

        useEffect(() => {
            supabase.auth.onAuthStateChange((event,session) => {
                setUser(session?.user);
                console.log(session);
                console.log(event);
            })
        },[])
    }

    return(
        <>
        <div className="profileUsername">
            <h4>Anıl Çelik</h4>
        </div>
        </>
        
    );
}