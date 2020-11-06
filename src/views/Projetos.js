import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, CardBody, Badge } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";
import {Link} from "react-router-dom";

class Projetos extends React.Component {
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
                    <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <Row className="row-grid">
                                    <Col lg="4">
                                        <Card className="card-lift--hover shadow border-0">
                                            <CardBody className="py-5" >
                                                <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                    <img width='140%' height='140%' src={require("../assets/img/logojamirabranco.png")}/>
                                                </div>
                                                <h6 className="text-primary text-uppercase">
                                                    JAMIRA
                                                </h6>
                                                <p className="description mt-3">
                                                    Uma plataforma para caracterização genômica de bactérias do gênero <i> Enterococcus </i> spp.
                                                </p>
                                                <div>
                                                    <Badge color="success" pill className="mr-1">
                                                        enterococcus
                                                    </Badge>
                                                    <Badge color="success" pill className="mr-1">
                                                       pipeline
                                                    </Badge>
                                                </div>
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    to="/jamira" tag={Link}
                                                >
                                                    Leia mais
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    </section>
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Projetos;