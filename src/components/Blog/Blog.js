import React from 'react';
import img from '../../assets/1.jpg'

const Blog = () => {
    return (
        <div className=''>
            <div>
                <h1 className='text-5xl text-center mt-32'>Blogs</h1>
            </div>
            <div className='grid lg:grid-cols-3  text-center gap-10  mx-auto mt-16 lg:ml-20 lg:mr-6'>
                <div className=' text-center w-80'>
                <img className='' src={img} alt="" />
                 <h1>Google Ai, THE FUTURE </h1>
                </div>
                <div className='text-center w-80'>
                <img className='' src={img} alt="" />
                <h1> Go through to Cognitive AI</h1>
                </div>
                <div className='text-center w-80'>
                <img className='' src={img} alt="" />
                <h1> Go through to Cognitive AI</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;