import React from 'react';
import './AboutUs.css'
import img from '../../assets/robot.jpg'

const AboutUs = () => {
    return (
        <div className='lg:flex mt-12 lg:ml-44'>
            <div className=' border-2' >
            <img className='image-style' src={img} alt="" />
            </div >
            <div className='w-1/2 border-2 '>
               <h1 className='text-3xl font-bold text-center'>About Us</h1>
               <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus porro nostrum, unde asperiores ex saepe quia rem tempora sapiente odit debitis repellendus eos ducimus iure suscipit totam. Eius recusandae ex assumenda amet atque. Excepturi optio exercitationem sint pariatur dolorem asperiores vel. Magni esse accusamus nesciunt praesentium eveniet quis ullam a quas ab nobis obcaecati, molestiae totam sit consectetur voluptas in cum hic iste error aperiam eligendi, delectus eos! Praesentium voluptate commodi sapiente ipsum velit dignissimos repudiandae saepe dolores illo impedit nemo ipsa, ducimus recusandae in nulla, possimus alias officiis. Officia, quasi harum? Molestiae, impedit voluptatem ipsam voluptas laudantium culpa?</p>
            </div>
        </div>
      
    );
};

export default AboutUs;