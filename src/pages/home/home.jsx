import { useState } from "react";
import ForyouTweets from "./foryou/foryou";

export default function Home() {
    const [foryou, setForyou] = useState('true');

    function handleGetForyou() {
        setForyou('true');
    }



    return(
        <>
        <div className="filterTweet">
            <button className="filterForyou border textwhite" onClick={handleGetForyou}>Sana özel
            </button>
            <button className="filterFollowing">Takip ettiklerin
            </button>
        </div>
        {foryou && <ForyouTweets />}
        
        </>
    );
}