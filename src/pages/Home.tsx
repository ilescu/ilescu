import React from 'react';
import {Col, Row} from "react-bootstrap";
import spinner from '../images/spinner.png';

const Home = () => {
    return (
        <Row>
            <Col lg={6} className="d-flex align-items-center">
                <div className="welcome">
                    <h3>WELCOME  TO MY WORLD</h3>
                    <h1 className="mt-5">Hi, Im <span className="welcome__name">Ilescu Anatolii</span></h1>
                    <h2 className="mt-3">Web Developer | FullStack</h2>
                    <p className="mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        Lorem Ipsum has been the industry's standard dummy text ever ,
                        when an unknown printer took a galley of type and scrambled
                        It has survived not only five centuries, but also the leap into electronic
                    </p>
                    <div className="welcome__social mt-5 ms-3">
                        <h3>FIND ME ON</h3>
                        <div className="d-flex mt-3">
                            <div className="me-2">
                                <a href="https://github.com/ilescu" target="_blank" className="social-button welcome__social--github">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor"
                                         className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="ms-2 me-2">
                                <a href="https://www.linkedin.com/in/anatolii-ilescu-9761331a0/" target="_blank" className="social-button welcome__social--linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="ms-2 me-2">
                                <a href="https://www.reddit.com/r/ilescu/" target="_blank" className="social-button welcome__social--reddit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-reddit" viewBox="0 0 16 16">
                                        <path
                                            d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="spinner">
                    <img src={spinner} alt="Spinner"/>
                </div>
            </Col>
        </Row>
    );
};

export default Home;