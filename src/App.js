import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Header from './components/Header';

function App() {
    return (

        <Router>


            <div className="container mt-5">
                <Header />  </div>
            <div className="container mt-5">
                <Tabs defaultActiveKey="/" id="uncontrolled-tab-example">
                    <Tab eventKey="/" title={<Link to="/">About Me</Link>} />
                    <Tab eventKey="/projects" title={<Link to="/projects">Projects</Link>} />
                </Tabs>
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
