import { useEffect, useState } from "react";
import { supabase } from "../../login/login";



export default function MyLikePosts() {
    const [islikeposts, setIsLikePosts] = useState([]);

    useEffect(() => {
       const getLikePosts = async () => {
            let { data, error } = await supabase.from('likes').select('*');
            console.log(data);
       }
       getLikePosts();
    }, []);
    console.log('hey')

    return(
        <div>anıl</div>
    );
}