import { Link } from 'react-router-dom';
import Xlogo from '../../../Xlogo.json'
import Lottie from 'lottie-react';

export default function Logo() {
    return(
        <div className='logo'>
          <Link to="/">
             <Lottie animationData={Xlogo}/>
          </Link>
        </div>
    );
}