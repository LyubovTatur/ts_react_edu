import React from 'react';
import './App.module.css';
import Header from "../components/header";
import MainLayout from "../components/MainLayout";
import Footer from "../components/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainLayout/>
            <Footer/>
        </div>
    );
}

export default App;
