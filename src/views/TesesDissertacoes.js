import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal, CardBody, Badge } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";
import {Link} from "react-router-dom";

class TesesDissertacoes extends React.Component {
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
                                                <CardBody className="py-5" style={{marginBottom: "140px"}}>
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/bacteria.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Análise da comunidade bacteriana de animais marinhos recolhidos do litoral norte do Rio Grande do Sul
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autora: Aline Weber Medeiros<br/>
                                                        Orientadora: Profa. Dra. Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            bactérias
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            enterococcus
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fauna marinha
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-aline" tag={Link}
                                                    >
                                                        Leia mais
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5" style={{marginBottom: "45px"}}>
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/janirococcus.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Caracterização fenotípica e genotípica de <i>Enterococcus</i> spp. isolados de
                                                        amostras fecais de pinguins-de-magalhães (Spheniscus magellanicus)
                                                        encontrados no Litoral Norte do Rio Grande do Sul, Brasil
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autora: Janira Prichula<br/>
                                                        Orientadora: Profa. Dra. Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            ambiente marinho
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            antimicrobianos
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            enterococcus
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fatores de virulência
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            pinguins
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-janira" tag={Link}
                                                    >
                                                        Leia mais
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5" style={{marginBottom: "70px"}}>
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/radar.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Desenvolvimento de uma ferramenta para visualização posicional dos resultados gerados
                                                        por plataformas de análise genômica comparativa de procariotos
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autor: Romeu Carlos Zimmer da Luz<br/>
                                                        Orientadora: Profa. Dra. Adriana Seixas<br/>
                                                        Coorientadora: Msc. Janira Prichula
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            bioinformática
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            genômica
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            procariotos
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            representação gráfica
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-romeu" tag={Link}
                                                    >
                                                        Leia mais
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/turtle.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Diversidade genética e fatores de virulência de <i>Enterococcus</i> spp. isolados de amostras fecais de tartarugas marinhas recuperadas no litoral norte do Rio Grande do Sul, Brasil
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autora: Rebeca Inhoque Pereira<br/>
                                                        Orientadora: Profa. Dra. Ana Paula Guedes Frazzon<br/>
                                                        Coorientador: Prof. Dr. Pedro Alves d’Azevedo
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            antimicrobianos
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            enterococcus
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fatores de virulência
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fauna marinha
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            tartaruga
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            variação genetica
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-rebeca" tag={Link}
                                                    >
                                                        Leia mais
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5" style={{marginBottom: "45px"}}>
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/sea-lion.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Isolamento e avaliação de <i>Enterococcus</i> spp. obtidos de amostras fecais de lobos-marinhos (Otariidae: <i>Arctocephalus</i> spp.) encontrados no litoral norte do Rio Grande do Sul, Brasil
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autora: Naiara Aguiar Santestevan<br/>
                                                        Orientadora: Profa. Dra. Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            enterococcus
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fatores de virulência
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            fauna marinha
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            resistência antimicrobiana
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-naiara" tag={Link}
                                                    >
                                                        Leia mais
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5" style={{marginBottom: "165px"}}>
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/data.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Uma plataforma para caracterização genômica de bactérias do gênero <i>Enterococcus</i> spp.
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Autor: Ícaro Maia Santos de Castro<br/>
                                                        Orientadora: Profa. Dra. Adriana Seixas<br/>
                                                        Coorientadora: Msc. Janira Prichula
                                                    </p>
                                                    <div>
                                                        <Badge color="success" pill className="mr-1">
                                                            bioinformática
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            enterococcus
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            genômica
                                                        </Badge>
                                                        <Badge color="success" pill className="mr-1">
                                                            pipeline
                                                        </Badge>
                                                    </div>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        to="/tese-icaro" tag={Link}
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

export default TesesDissertacoes;