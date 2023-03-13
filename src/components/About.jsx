import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <h1>About</h1>
            <Link to="/react-router">Go to Home</Link>
            <Link to="/react-router/contacts">Go to Contacts</Link>
        </>
    );
}