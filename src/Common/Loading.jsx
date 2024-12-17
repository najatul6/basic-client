import loadingAnimation from '../assets/loadingAnimation.json';
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-96'>
                <Lottie animationData={loadingAnimation} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Loading;