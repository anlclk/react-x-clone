import Xlogo from '../../../Xlogo.json'
import Lottie from 'lottie-react';

export default function Logo() {
    return(
        <div className='logo'>
            <Lottie animationData={Xlogo} />
        </div>
    );
}