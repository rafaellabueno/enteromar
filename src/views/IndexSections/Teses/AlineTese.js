import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class AlineTese extends React.Component {
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
                                                <a href="http://hdl.handle.net/10183/157895" target="_blank">
                                                    <img
                                                        style={{marginTop: "-50px", marginLeft: "10px"}}
                                                        alt="..."

                                                        src={require("../../../assets/img/teses/tese_aline.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b>Análise da comunidade bacteriana de animais marinhos recolhidos do litoral norte do Rio Grande do Sul</b><br/>
                                                </h4>
                                                <p>Aline Weber Medeiros</p>
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
                                                        href="http://hdl.handle.net/10183/157895"
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
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/bacteria.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    O conhecimento sobre a microbiota de animais marinhos fornece uma base que pode ser usada para comparação em virtude de mudanças futuras, apesar disso pouco se sabe sobre a natureza das bactérias associadas com o intestino desses animais. Esse estudo visou a obtenção de um panorama sobre a microbiota de animais marinhos selvagens recolhidos no litoral do Rio Grande do Sul através de ferramentas independentes de cultivo, como o sequenciamento de última geração e PCR quantitativa em tempo real (qPCR), que permitem a inferência sobre as bactérias pertencentes a microbiota intestinal a partir do DNA genômico total obtido diretamente da amostra. A partir do sequenciamento parcial do gene de 16S rRNA utilizando a plataforma de alta desempenho Ion Torrent PGM, seis amostras fecais de lobo-marinho-sul-americano (Arctocephalus australis) e quatro lobo-marinho- subantártico (Arctocephalus tropicalis) foram avaliadas. Verificou-se que o filo Firmicutes (86,28%) foi mais frequente nas fezes de ambas as espécies, seguido por Actinobacteria(6,74%) e Proteobacteria (3,34%), sendo Bacteroidetes e Fusobacteria os filos menos frequente. A qPCR foi empregada para quantificar as espécies de enterococos, mais frequentemente isoladas de fezes de animais (Enterocococcus faecalis, E. hirae, E. mundtti, E. faecium, E. gallinarum e E. casseliflavus), em amostras fecais de animais marinhos selvagens. A partir de DNAs totais isolados de 24 amostras fecais de lobos marinhos, tartarugas-verdes e aves marinhas, verificou-se que E. faecalis (1,82x1012 cópias/ng) foi a espécie mais frequente em todas as amostras analisadas e E. hirae (5,89x1010), E. mundtti (7,57x1010 cópias/ng), E. faecium (4,94x1009 cópias/ng), E. casseliflavus (1,22x1009 cópias/ng) e E. gallinarum (3,84x1010 cópias/ng) também demonstraram estar presentes na microbiota desses animais.
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

export default AlineTese;