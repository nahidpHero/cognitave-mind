import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Team from '../Team/Team';



const Home = () => {
    return (
        <div className='container'>
            
            <Navbar></Navbar>
            <Header></Header> 
            <h3 class="text-center text-3xl mt-5">&quot;Machine intelligence is the last invention that humanity will ever need to make &quot;</h3>
            <h3 class=" text-center text-xl">-Nick Bostrom</h3>  
            <AboutUs></AboutUs>
            <Projects></Projects>
            <Team></Team>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;