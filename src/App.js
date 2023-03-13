import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/react-router/*" element={<h1>Not Found</h1>}/>
                    <Route path="/react-router" element={<h1>Home</h1>}/>
                    <Route path="/react-router/about" element={<h1>About</h1>}/>
                    <Route path="/react-router/contacts" element={<h1>Contacts</h1>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
