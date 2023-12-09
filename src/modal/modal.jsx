
export default function Modal({ closeModal }) {
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
                    <form className="tweetForm">
                        <input type="text" placeholder="What is happening?!" />
                        <button>post</button>
                    </form>
                </div>
        </div>
        

    );
}