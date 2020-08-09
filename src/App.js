import React from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
import Footer from './components/Footer';
function App() {
    return (
    <section id="mainsection">
        <Header/>
        <div className="container shadow p-3 mb-5" style={{borderRadius: "20px"}}>
            <InputTodo/>
            <ListTodo/>
        </div>
        <Footer/>
    </section>);
}

export default App;
