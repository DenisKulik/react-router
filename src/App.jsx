import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/react-router/*" element={<NotFound/>}/>
                    <Route path="/react-router" element={<Home/>}/>
                    <Route path="/react-router/about" element={<About/>}/>
                    <Route path="/react-router/contacts" element={<Contacts/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
