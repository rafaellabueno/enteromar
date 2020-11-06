import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";

class Design extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Navbar />
                <main className="profile-page" ref="main">
                    <div className="position-relative">
                    <section className="section section-lg">
                        <Container>
                                    <Row className="justify-content-center text-center mb-lg">
                                        <Col lg="8">
                                            <h2 className="display-3">Design ENTEROMAR</h2>
                                            <p className="lead text-muted">
                                                Aqui estão disponíveis os materiais gráficos do grupo ENTEROMAR.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-4">
                                                <img
                                                    alt="..."
                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                    src={require("../assets/img/Design/slides.png")}
                                                    style={{ width: "200px" }}
                                                />
                                                <div className="pt-4 text-center">
                                                    <h5 className="title">
                                                        <span className="d-block mb-1">Apresentação ENTEROMAR</span>
                                                        <small className="h6 text-muted">Veja nosso modelo de slides</small>
                                                    </h5>
                                                    <div className="mt-3">
                                                        <Button
                                                            className="btn-icon-only rounded-circle"
                                                            color="primary"
                                                            href="https://drive.google.com/drive/folders/1g7ArOfIBjsDq0kZyJ2BGre2wr412hCHb?usp=sharing"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-arrow-circle-o-down" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-4">
                                                <img
                                                    alt="..."
                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                    src={require("../assets/img/Design/banner.png")}
                                                    style={{ width: "200px" }}
                                                />
                                                <div className="pt-4 text-center">
                                                    <h5 className="title">
                                                        <span className="d-block mb-1">Banner ENTEROMAR</span>
                                                        <small className="h6 text-muted">Veja nosso modelo de banner</small>
                                                    </h5>
                                                    <div className="mt-3">
                                                        <Button
                                                            className="btn-icon-only rounded-circle"
                                                            color="primary"
                                                            href="https://drive.google.com/drive/folders/1g7ArOfIBjsDq0kZyJ2BGre2wr412hCHb?usp=sharing"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-arrow-circle-o-down" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                            <div className="px-4">
                                                <img
                                                    alt="..."
                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                    src={require("../assets/img/enteromarpng.png")}
                                                    style={{ width: "200px" }}
                                                />
                                                <div className="pt-4 text-center">
                                                    <h5 className="title">
                                                        <span className="d-block mb-1">Logo ENTEROMAR</span>
                                                        <small className="h6 text-muted">Veja nosso modelo de logo em vários formatos</small>
                                                    </h5>
                                                    <div className="mt-3">
                                                        <Button
                                                            className="btn-icon-only rounded-circle"
                                                            color="primary"
                                                            href="https://drive.google.com/drive/folders/1g7ArOfIBjsDq0kZyJ2BGre2wr412hCHb?usp=sharing"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-arrow-circle-o-down" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                        </Container>
                    </section>
                    </div>
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Design;