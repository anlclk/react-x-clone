import { useEffect, useState } from "react";
import { supabase } from "../../pages/login/login";
import { Link } from "react-router-dom";


export default function Rightbar() {
   const [searchTerm, setSearchTerm] = useState('');
   const [searchResults, setSearchResults] = useState([]); 

   useEffect(() => {
    const startSearch = async () => {  
        const { data: users, error } = await supabase.from('profiles').select('id, username, userdataname, email').eq('userdataname', `${searchTerm}`);
        console.log(users);
        setSearchResults(users);
    }
    startSearch();
   }, [searchTerm])

    return(
        <aside className="rightbar">
            <form className="searchBar">
                <button>
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path 
                        fill="currentColor"
                        d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </svg>
                </button>
                <input type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Arama yapın"
                />
            </form>
                {searchResults.map((x) => {
                    return <Link to={`/${x?.userdataname}`} className="searchbarResult" key={x.id}>
                                <div className="postUserImgArea">
                                    <img src={`https://ucedfsaeksatgnqrouek.supabase.co/storage/v1/object/public/avatar/${x?.email}.jpg`} className="postinImg" alt="" />
                                </div>
                                <div>
                                    <h3>{x.username}</h3>
                                    <h4>{x.userdataname}</h4>
                                </div>
                            </Link>
                })}
            <div className="subscribeBox">
                <h2>Premium'a Abone Ol</h2>
                <p>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
                <button className="btnSub">Abone Ol</button>
            </div>
            <div className="trends">
                <h1>İlgini çekebilecek gündemler</h1>
                <div className="trendingsDetails">
                    <div className="countryDetail">
                        <span>Türkiye'de Trend Olanlar</span>
                        <button className="btnTrend">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    fill="currentColor" 
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h3>Fatih Terim</h3>
                    <span>3,829 posts</span>
                </div>
                <div className="trendingsDetails">
                    <div className="countryDetail">
                        <span>Gündemdekiler</span>
                        <button className="btnTrend">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    fill="currentColor" 
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h3>Türkler</h3>
                    <span>6,008 posts</span>
                </div>
                <div className="trendingsDetails">
                    <div className="countryDetail">
                        <span>Spor</span>
                        <button className="btnTrend">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    fill="currentColor" 
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h3>İcardi</h3>
                    <span>14,008 posts</span>
                </div>
                <div className="trendingsDetails">
                    <div className="countryDetail">
                        <span>Gündemdekiler</span>
                        <button className="btnTrend">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    fill="currentColor" 
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h3>Elon Musk</h3>
                    <span>44,008 posts</span>
                </div>
                <div className="trendingsDetails">
                    <div className="countryDetail">
                        <span>Gündemdekiler</span>
                        <button className="btnTrend">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    fill="currentColor" 
                                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <h3>Amerika</h3>
                    <span>46,008 B posts</span>
                </div>
            </div>
        </aside>
    );
}