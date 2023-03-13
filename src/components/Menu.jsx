import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav>
            <Link to="/react-router">Home</Link>
            <Link to="/react-router/about">About</Link>
            <Link to="/react-router/contacts">Contacts</Link>
        </nav>
    );
}