

import { Link, useNavigate } from 'react-router';
import Error from '../../assets/error-404.png'

const ErrorPage = () => {


    const navigate = useNavigate()
    return (
        <div className=' p-20'>
            <div className='flex  justify-center items-center'>
                <img className='w-1/4'  src={Error} alt="" />
            </div>
            <div className='text-center space-y-5'>
                <h1 className='text-6xl font-bold'>Oops, page not found!</h1>
                <p className='text-gray-400 font-semibold'>The page you are looking for is not available.</p>
                <Link onClick={()=>navigate(-1)} to={''}  className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"> Go Back</Link>
            </div>

        </div>
    );
};

export default ErrorPage;