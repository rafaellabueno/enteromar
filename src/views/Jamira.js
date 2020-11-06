import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Badge, CardBody } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";

class Jamira extends React.Component {
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
                    <section className="section-profile-cover section-shaped my-0">
                        {/* Circles background */}
                        <div className="shape shape-style-1 shape-default alpha-4">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section">
                        <Container>
                            <Card className="card-profile shadow mt--500">
                                <div className="px-1">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#" onClick={e => e.preventDefault()}>
                                                    <img
                                                        style={{marginTop: "-40px", marginLeft: "10px"}}
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={require("../assets/img/logojamirabrancopetroleo.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top text-center">
                                        <Row className="justify-content-center">
                                            <Col lg="9">
                                                <section className="section section-lg">
                                                    <Container>
                                                        <Row className="row-grid align-items-center">
                                                            <p>
                                                                Com a crescente demanda por análises de dados genômicos, plataformas de bioinformática com pipelines
                                                                robustos e escaláveis são essenciais para facilitar o trabalho dos pesquisadores, auxiliando na automação
                                                                de tarefas e na reprodutibilidade dos dados.
                                                            </p>
                                                        </Row>
                                                        <hr/>
                                                        <Row className="row-grid align-items-center">
                                                            <Col className="order-md-2" md="6">
                                                                <img
                                                                    alt="..."
                                                                    className="img-fluid floating"
                                                                    src={require("../assets/img/janirococcus.png")}
                                                                />
                                                            </Col>
                                                            <Col className="order-md-1" md="6">
                                                                <Card className="shadow shadow-lg--hover mt-5">
                                                                    <CardBody>
                                                                        <div className="pl-4">
                                                                            <p>
                                                                                JAMIRA apresenta um pipeline para análise de dados genômicos de procariotos
                                                                                projetado para o gênero bacteriano <b><i> Enterococcus </i> spp </b>. Esses microrganismos emergiram
                                                                                como uma das principais bactérias de relevância clínica,
                                                                                devido a sua capacidade e facilidade de adquirir e passar genes de resistência e
                                                                                virulência através de elementos genéticos móveis, como profagos, plasmídeos e ilhas genômicas.
                                                                            </p>
                                                                        </div>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                        <hr/>
                                                        <Row className="row-grid align-items-center">
                                                            <Col className="order-md-1" md="6">
                                                                <img
                                                                    alt="..."
                                                                    className="img-fluid floating"
                                                                    src={require("../assets/img/plataforma_jamira.png")}
                                                                />
                                                                <img
                                                                    alt="..."
                                                                    className="img-fluid floating"
                                                                    src={require("../assets/img/home_jamira.png")}
                                                                />
                                                            </Col>
                                                            <Col className="order-md-2" md="6">
                                                                <div className="pl-4">
                                                                    <Card className="shadow shadow-lg--hover mt-5">
                                                                        <CardBody>
                                                                            <p>
                                                                                Diversas ferramentas de bioinformática foram então selecionadas, a partir da literatura,
                                                                                para identificação de elementos associados ao sucesso de colonização e plasticidade genômica dos
                                                                                enterococcus, construindo uma plataforma que auxilie tanto os pesquisadores a entenderem a como
                                                                                esse gênero de bactérias emergiu como um dos principais de relevência clínica, como em estudos
                                                                                que envolvam a prevenção e gestão das infecções causadas pelos enterococcus.
                                                                                Sendo elas:
                                                                            </p>
                                                                        </CardBody>
                                                                    </Card>
                                                                    <ul className="list-unstyled mt-5">
                                                                        <li className="py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div>
                                                                                    <Badge
                                                                                        className="badge-circle mr-3"
                                                                                        color="success"
                                                                                    >
                                                                                        <i className="fa fa-battery-empty" />
                                                                                    </Badge>
                                                                                </div>
                                                                                <div>
                                                                                    <h6 className="mb-0">
                                                                                        <b>Abricate</b>: identificação de fatores de virulência e predição de plasmídeos
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div>
                                                                                    <Badge
                                                                                        className="badge-circle mr-3"
                                                                                        color="success"
                                                                                    >
                                                                                        <i className="fa fa-battery-quarter" />
                                                                                    </Badge>
                                                                                </div>
                                                                                <div>
                                                                                    <h6 className="mb-0">
                                                                                        <b>RGI</b>: identificação de resistência antimicrobiana

                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div>
                                                                                    <Badge
                                                                                        className="badge-circle mr-3"
                                                                                        color="success"
                                                                                    >
                                                                                        <i className="fa fa-battery-2" />
                                                                                    </Badge>
                                                                                </div>
                                                                                <div>
                                                                                    <h6 className="mb-0">
                                                                                        <h6 className="mb-0">
                                                                                               <b>Phispy</b>: predição de profagos

                                                                                        </h6>
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div>
                                                                                    <Badge
                                                                                        className="badge-circle mr-3"
                                                                                        color="success"
                                                                                    >
                                                                                        <i className="fa fa-battery-3" />
                                                                                    </Badge>
                                                                                </div>
                                                                                <div>
                                                                                    <h6 className="mb-0">
                                                                                        <b>IslandPath</b>: predição de ilhas genômicas
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div>
                                                                                    <Badge
                                                                                        className="badge-circle mr-3"
                                                                                        color="success"
                                                                                    >
                                                                                        <i className="fa fa-battery-4" />
                                                                                    </Badge>
                                                                                </div>
                                                                                <div>
                                                                                    <h6 className="mb-0">
                                                                                        <b>Prokka</b>: anotação de ganoma
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <hr/>
                                                        <section className="section section-lg pt-0">
                                                            <Container>
                                                                <Card className="bg-gradient-green shadow-lg border-0">
                                                                    <div className="p-5">
                                                                        <Row className="align-items-center">
                                                                                <p className="text-white align-items-center">
                                                                                    Disponível em breve.
                                                                                </p>
                                                                                <Button
                                                                                    block
                                                                                    className="btn-white"
                                                                                    color="default"
                                                                                    href=""
                                                                                    size="lg"
                                                                                >
                                                                                    Conheça a plataforma JAMIRA
                                                                                </Button>
                                                                        </Row>
                                                                    </div>
                                                                </Card>
                                                            </Container>
                                                        </section>
                                                    </Container>
                                                </section>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Container>
                    </section>
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Jamira;

