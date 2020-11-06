import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class JaniraTese extends React.Component {
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
                                                <a href="http://hdl.handle.net/10183/126839" target="_blank">
                                                    <img
                                                        style={{marginTop: "-50px", marginLeft: "10px"}}
                                                        alt="..."

                                                        src={require("../../../assets/img/teses/tese_janira.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b>Caracterização fenotípica e genotípica de <i>Enterococcus</i> spp. isolados de
                                                        amostras fecais de pinguins-de-magalhães (Spheniscus magellanicus)
                                                        encontrados no Litoral Norte do Rio Grande do Sul, Brasil</b><br/>
                                                </h4>
                                                <p>Janira Prichula</p>
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
                                                        href="http://hdl.handle.net/10183/126839"
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
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/janirococcus.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    Os <i>Enterococcus</i> spp. apresentam uma natureza ubiquitária que lhes permite sobreviver em diversos nichos ecológicos. Estudos envolvendo enterococos isolados de animais marinhos são escassos. Em razão disso, este trabalho teve como objetivo isolar, identificar, avaliar o perfil de suscetibilidade aos antimicrobianos, a presença de fatores de virulência e a diversidade genética de enterococos isolados de amostras fecais de pinguins-de-magalhães (Spheniscus magellanicus) encontrados no Litoral Norte do Rio Grande do Sul, Brasil. No total, 172 enterococos foram isolados e identificados como E. faecalis (43%), E. faecium (33,7%), E. hirae (12,8%) e E. mundtii (10,5%). Cento e quatorze isolados foram sensíveis aos dez antimicrobianos testados. Fenótipos de resistência foram encontrados para ciprofloxacina (28,5%), eritromicina (25%), norfloxacina (14,5%) e tetraciclina (4,6%). Todos os isolados resistentes à tetracilina apresentavam o gene tet(M) e apenas dois não apresentaram o tet(L). O gene erm(B) não foi detectado nos resistentes à eritromicina. Genes de virulência, gelE e ace (43%) e asa (35,5%) foram detectados nos E. faecalis. A atividade de gelatinase foi verificada em 64 isolados. A maioria dos enterococos foi fraco formador de biofilme. A análise dos perfis gerados por PFGE revelou um grande número de clones. Em conclusão, os enterococos compõem a microbiota do trato gastrintestinal dos pinguins-de-magalhães e a detecção de determinantes de resistência e virulência indica que os enterococos podem constituir um reservatório de tais características e, sendo o ambiente marinho um meio de disseminação, é importante considerar o potencial deste gênero em ocasionar riscos à saúde desses animais e à do ecossistema marinho.
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

export default JaniraTese;