import './App.scss'
import Navigation from "./navigation/Navigation";
import React from "react";
import RoutesList from "./routes/RoutesList";
import {Container} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Navigation/>
            <div style={{marginTop: '30px'}}>
                <RoutesList/>
            </div>
        </Container>
    )
}

export default App
