import './App.scss'
import Navigation from "./navigation/Navigation";
import React from "react";
import RoutesList from "./routes/RoutesList";

function App() {

    return (
        <div className="App" style={{textAlign: 'center'}}>
            <Navigation/>
            <div style={{marginTop: '50px'}}>
                <RoutesList/>
            </div>
        </div>
    )
}

export default App
