import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal, CardBody, Badge } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";
import {Link} from "react-router-dom";

class Publicacoes extends React.Component {
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
                                        <Col lg="12">
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/asm.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Enterococci from Wild Magellanic Penguins (<i> Spheniscus magellanicus </i>) as an Indicator of Marine Ecosystem Health and Human Impact
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Janira Prichula, Daria Van Tyne, Julia Schwartzman, Fernando Hayashi Sant’Anna, Rebeca Inhoque Pereira, Gabriela Rosa da Cunha, Maurício Tavares, François Lebreton, Jeverson Frazzon, Pedro Alves d’Azevedo, Adriana Seixas, Ana Paula Guedes Frazzon, Michael S. Gilmore
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1128/aem.01662-20" target="_blank">10.1128/AEM.01662-20</a>
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                                                        <img width='120%' height='120%' src={require("../assets/img/marine.gif")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Corrigendum "Resistance to antimicrobial agents among enterococci isolated from fecal samples of wild marine species in the southern coast of Brazil"
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Janira Prichula, Rebeca Inhoque Pereira, Guilherme Raffo Wachholz, Leonardo Almansa Cardoso, Neidimar Cezar Correa Tolfo, Naiara Aguiar Santestevan, Aline Weber Medeiros, Maurício Tavares, Jeverson Frazzon, Pedro Alves d'Azevedo, Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1016/j.marpolbul.2019.03.033" target="_blank">10.1016/j.marpolbul.2019.03.0330</a>
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/Brazilian_JournalBiology.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Frequency of Clustered Regularly Interspaced Short Palindromic Repeats (CRISPRs) in non-clinical <i> Enterococcus faecalis </i> and <i> Enterococcus faecium </i> strains
                                                    </h6>
                                                    <p className="description mt-3">
                                                        C. G. Y. Huescas, R. I. Pereira, J. Prichula, P. A. Azevedo, J. Frazzon, A. P. G. Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1590/1519-6984.183375" target="_blank">10.1590/1519-6984.183375</a>
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                                                        <img width='120%' height='120%' src={require("../assets/img/marine.gif")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Resistance to antimicrobial agents among enterococci isolated from fecal samples of wild marine species in the southern coast of Brazil
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Janira Prichula, Rebeca Inhoque Pereira, Guilherme Raffo Wachholz, Leonardo Almansa Cardoso, Neidimar Cezar Correa Tolfo, Naiara Aguiar Santestevan, Aline Weber Medeiros, Maurício Tavares, Jeverson Frazzon, Pedro Alves d'Azevedo, Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1016/j.marpolbul.2016.02.071" target="_blank">10.1016/j.marpolbul.2016.02.071</a>
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <img width='140%' height='140%' src={require("../assets/img/asm.png")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Complete Genome Sequence of <i> Enterococcus faecalis </i> Strain P8-1 Isolated from Wild Magellanic Penguin (<i> Spheniscus magellanicus </i>) Feces on the South Coast of Brazil
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Janira Prichula, Fabricio Souza Campos, Rebeca Inhoque Pereira, Leonardo Almansa Cardoso, Guilherme Raffo Wachholz, Luiza Pieta, Roberta Fogliatto Mariot, Tiane Martin de Moura, Maurício Tavares, Pedro Alves d'Azevedo, Jeverson Frazzon, Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1128/genomea.01531-15" target="_blank">10.1128/genomeA.01531-15</a>
                                                        </Badge>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <Card className="card-lift--hover shadow border-0" style={{marginBottom: "20px"}}>
                                                <CardBody className="py-5" >
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <img width='120%' height='120%' src={require("../assets/img/wjmb.jpg")}/>
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Antimicrobial resistance and virulence factor gene profiles of <i> Enterococcus </i> spp. isolates from wild <i> Arctocephalus australis </i> (South American fur seal) and <i> Arctocephalus tropicalis </i> (Subantarctic fur seal)
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Naiara Aguiar Santestevan, Dejoara de Angelis Zvoboda, Janira Prichula, Rebeca Inhoque Pereira, Guilherme Raffo Wachholz, Leonardo Almansa Cardoso, Tiane Martin de Moura, Aline Weber Medeiros, Derek Blaese de Amorin, Maurício Tavares, Pedro Alves d’Azevedo, Ana Claudia Franco, Jeverson Frazzon, Ana Paula Guedes Frazzon
                                                    </p>
                                                    <div>
                                                        <Badge color="primary" pill className="mr-1">
                                                            DOI: <a href="https://doi.org/10.1007/s11274-015-1938-7" target="_blank">10.1007/s11274-015-1938-7</a>
                                                        </Badge>
                                                    </div>
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

export default Publicacoes;