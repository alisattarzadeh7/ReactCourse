import React from 'react'
import Home from "./pages/Home"
import Layout from "./components/Layout";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import About from "./pages/About";
import Routes from "./Routes"
function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes/>
                </Layout>
            </Router>
        </>
    );
}

export default App;
