import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../actions';
import './styles.css'

const Homepage = () => {
    const goTo = useNavigate();

    useEffect(() => {
        handleLogout()
    }, [])

    return (
        <section id="homepageSection">
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <button onClick={() => { goTo('/login') }}> LOGIN </button>
            <button onClick={() => { goTo('/register') }}> REGISTER </button>
        </section>
    )
}

export default Homepage;
