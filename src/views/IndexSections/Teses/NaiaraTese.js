import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class NaiaraTese extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    state = {};
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
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
                                                <a href="http://hdl.handle.net/10183/115644" target="_blank">
                                                    <img
                                                        style={{marginTop: "-50px", marginLeft: "10px"}}
                                                        alt="..."

                                                        src={require("../../../assets/img/teses/tese_naiara.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b> Isolamento e avaliação de <i>Enterococcus</i> spp. obtidos de amostras fecais de lobos-marinhos (Otariidae: <i>Arctocephalus</i> spp.) encontrados no litoral norte do Rio Grande do Sul, Brasil</b><br/>
                                                </h4>
                                                <p>Naiara Aguiar Santestevan</p>
                                                <p>Orientadora: Profa. Dra. Ana Paula Guedes Frazzon</p>
                                            </Col>
                                            <Col
                                                className="order-lg-6 align-self-lg-center"
                                                lg="4"
                                            >
                                                <div className="card-profile-actions py-4 mt-lg-0">
                                                    <Button
                                                        className="float-none"
                                                        color="default"
                                                        href="http://hdl.handle.net/10183/115644"
                                                        target="_blank"
                                                        size="sm"
                                                    >
                                                        Ver mais
                                                    </Button>
                                                    <Button
                                                        className="float-none"
                                                        type="button"
                                                        color="default"
                                                        size="sm"
                                                        onClick={() => this.toggleModal("notificationModal")}
                                                    >
                                                        Resumo
                                                    </Button>
                                                    <Modal
                                                        className="modal-dialog-centered modal-default"
                                                        contentClassName="bg-gradient-default"
                                                        isOpen={this.state.notificationModal}
                                                        toggle={() => this.toggleModal("notificationModal")}
                                                    >
                                                        <div className="modal-header">
                                                            <h6 className="modal-title" id="modal-title-notification">
                                                                Resumo
                                                            </h6>
                                                            <button
                                                                aria-label="Close"
                                                                className="close"
                                                                data-dismiss="modal"
                                                                type="button"
                                                                onClick={() => this.toggleModal("notificationModal")}
                                                            >
                                                                <span aria-hidden={true}>×</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="py-3">
                                                                <div className="text-center">
                                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/sea-lion.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    A distribuição das espécies de enterococos, bactérias comensais do trato gastrointestinal (TGI), é bastante estudada nos diferentes mamíferos; entretanto, em lobos-marinhos (<i>Arctocephalus</i> spp.) ainda não existem dados. Os objetivos do estudo foram: a) isolar <i>Enterococcus</i> spp. a partir de amostras fecais de lobos-marinhos encontrados no litoral norte do Rio Grande do Sul; b) determinar a prevalência das espécies; c) avaliar o perfil de suscetibilidade antimicrobiana; d) verificar a presença de genes relacionados à resistência e à virulência e; e) analisar o perfil genotípico por RAPD-PCR. No total, 160 enterococos foram isolados e identificados como E. faecalis (50,62%), E. hirae (34,37%), E. casseliflavus (11,87%), E. gallinarum (1,87%), E. mundtii (0,62%) e E. faecium (0,62%). Noventa e três isolados foram sensíveis aos dez antimicrobianos testados. As propriedades de resistência foram encontradas para eritromicina (21,25%), nitrofurantoína (15,62%), tetraciclina (6,25%), norfloxacina (3,12%) e ciprofloxacina (3,12%). Dentre os 10 isolados resistentes à tetracilina, 3 apresentaram o gene tet(M) e nenhum o tet(L). Dos 34 resistentes à eritromicina, 2 apresentaram o gene erm(B). Quanto à presença dos genes de virulência, maior incidência foi observada para os genes ace (66,87%) e gelE (50,62%), seguidos por asa (11,87%) e cylA (2,5%). A atividade de gelatinase e citolisina indicou a presença de genes silenciosos. A análise do RAPD-PCR permitiu reunir os isolados em cinco grupos. Em conclusão, diferentes espécies de enterococos compõem a microbiota do TGI de lobos-marinhos e a presença de elementos de resistência e virulência podem estar relacionados a fatores antropogênicos ou ter origem no resistoma ambiental.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <Button
                                                                className="btn-white ml-auto"
                                                                color="default"
                                                                data-dismiss="modal"
                                                                type="button"
                                                                onClick={() => this.toggleModal("notificationModal")}
                                                            >
                                                                Fechar
                                                            </Button>
                                                        </div>
                                                    </Modal>
                                                </div>
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

export default NaiaraTese;