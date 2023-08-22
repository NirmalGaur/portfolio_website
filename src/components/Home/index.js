import LogoTitle from '../../assets/images/logo-nfinal.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const firstNameArray = ['i', 'r', 'm', 'a', 'l', ' '];
    const lastNameArray = ['G', 'a', 'u', 'r'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => {
            clearTimeout(timeoutId); // Clear the timeout if the component unmounts before it fires
        };
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                     <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={15}/>
                <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={20}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Backend Developer | NodeJS</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home