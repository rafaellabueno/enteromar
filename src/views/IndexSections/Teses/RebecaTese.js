import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class RebecaTese extends React.Component {
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
                                                <a href="http://hdl.handle.net/10183/141273" target="_blank">
                                                    <img
                                                        style={{marginTop: "-50px", marginLeft: "10px"}}
                                                        alt="..."

                                                        src={require("../../../assets/img/teses/tese_rebeca.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b>Diversidade genética e fatores de virulência de <i>Enterococcus</i> spp. isolados de amostras fecais de tartarugas marinhas recuperadas no litoral norte do Rio Grande do Sul, Brasil</b><br/>
                                                </h4>
                                                <p>Rebeca Inhoque Pereira</p>
                                                <p>Orientadora: Profa. Dra. Ana Paula Guedes Frazzon</p>
                                                <p>Coorientador: Prof. Dr. Pedro Alves d’Azevedo</p>
                                            </Col>
                                            <Col
                                                className="order-lg-6 align-self-lg-center"
                                                lg="4"
                                            >
                                                <div className="card-profile-actions py-4 mt-lg-0">
                                                    <Button
                                                        className="float-none"
                                                        color="default"
                                                        href="http://hdl.handle.net/10183/141273"
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
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/turtle.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    Os <i>Enterococcus</i> spp. apresentam natureza ubiquitária e são encontrados no trato gastrointestinal de diversos animais. Entretanto, estudos desses microorganismos associados a tartarugas marinhas são escassos. Os objetivos deste estudo foram: isolar enterococos a partir de amostras fecais de tartarugas marinhas encontradas no Litoral Norte do Rio Grande do Sul; determinar a prevalência das espécies; avaliar seu perfil de suscetibilidade antimicrobiana; verificar a presença de genes relacionados à resistência e à virulência e; analisar sua diversidade genética. Um total de 158 enterococos foram identificados como E. faecalis (55,7%), E. faecium (23,4%), E. hirae (15,2%) e E. casseliflavus (5,7%). A maioria dos isolados foi suscetível aos antimicrobianos testados, no entanto, fenótipos de resistência foram encontrados para eritromicina (34,2%), rifampicina (32,9%) e tetraciclina (0,63%). O gene de resistência à eritromicina msrC foi encontrado em todos os E. faecium resistentes, já o gene erm(B), não foi detectado. Somente um isolado foi resistente à tetraciclina, e este não apresentou nenhum dos genes testados. Os genes de virulência, gelE e ace (98,86%), asa (68.18%) e cylA (40,90%) foram detectados somente em E. faecalis. A atividade de gelatinase e citolisina foi verificada em 87 e 19 isolados, respectivamente. A maioria dos enterococos não foi capaz de formar biofilme. A análise dos perfis gerados por PFGE revelou um grande número de clones. Em conclusão, diferentes espécies de enterococos compõem a microbiota do trato gastrointestinal das tartarugas marinhas e a presença de determinantes de resistência e virulência nestes animais pode estar relacionada a fatores antropogênicos ou, ainda, ter origem no resistoma ambiental.
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

export default RebecaTese;