import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav>
            <NavLink
                style={({ isActive }) => isActive ?
                    { color: 'lightyellow', 'text-decoration': 'none' } : {}}
                to="."
                end>Home</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'activeLink' : 'link'}
                to="about">About</NavLink>
            <NavLink
                className={({ isActive }) => isActive ? 'activeLink' : 'link'}
                to="contacts">Contacts</NavLink>
        </nav>
    )
        ;
}