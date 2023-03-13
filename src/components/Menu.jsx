import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav>
            <Link to=".">Home</Link>
            <Link to="about">About</Link>
            <Link to="contacts">Contacts</Link>
        </nav>
    );
}