import React from 'react';
import img from '../../assets/robot.jpg'


const Events = () => {
    return (
        <div className='mb-20'>
            <div>
            <h1 className='text-5xl text-center mt-32'>Events</h1>
            </div>
            <div className='lg:flex mt-12 lg:ml-20'>
            <div className=' ' >
            <img className='image-style' src={img} alt="" />
            </div >
            <div className='w-full p-10'>
               <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus porro nostrum, unde asperiores ex saepe quia rem tempora sapiente odit debitis repellendus eos ducimus iure suscipit totam. Eius recusandae ex assumenda amet atque. Excepturi optio exercitationem sint pariatur dolorem asperiores vel. Magni esse accusamus nesciunt praesentium eveniet quis ullam a quas ab nobis obcaecati, molestiae totam sit consectetur voluptas in cum hic iste error aperiam eligendi, delectus eos! Praesentium voluptate commodi ?</p>

            </div>
        </div>

        </div>
    );
};

export default Events;