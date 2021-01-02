import React from 'react';
import './styles.css'
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <div className="fixed-container">
                <div className="header">
                    <h2>Create Account</h2>
                </div>

                <Form />
            </div>
        </div>
    );
}

export default App;
