import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/neuvic" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    <li>Golf de Neuvic</li>
                </NavLink>
                <NavLink to="/perso" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    <li>Golf personnalisé</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;