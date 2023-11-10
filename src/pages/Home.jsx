import React from 'react';
import Navigation from '../components/Navigation';



const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                <h1>JEANRAT Yoann</h1>                
               <h2>Développeur Full Stack</h2>
               <div className='pdf'>
                <a href="./media/CV.pdf">Télécharger mon CV</a>  
                </div>
               
                
               </div>
            </div>
        </div>
    );
};

export default Home;