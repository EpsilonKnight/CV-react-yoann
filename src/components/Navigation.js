import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src="./media/yoReact.png" alt="profilYo" />
                    <h3>Yoann JEANRAT</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact="true" to="/" activeclassname="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact="true" to="/competences" activeclassname="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact="true" to="/portfolio" activeclassname="navActive">
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact="true" to="/contact" activeclassname="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://google.com"
                        rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://google.com"
                        rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                </ul>
                <div className='signature'>
                    <p>Y.JEANRAT - 2023</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;
