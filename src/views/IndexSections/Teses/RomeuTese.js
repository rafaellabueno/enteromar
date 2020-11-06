import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class RomeuTese extends React.Component {
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

                                                        src={require("../../../assets/img/teses/tese_romeu.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b>Desenvolvimento de uma ferramenta para visualização posicional dos resultados gerados
                                                        por plataformas de análise genômica comparativa de procariotos</b><br/>
                                                </h4>
                                                <p>Romeu Carlos Zimmer da Luz</p>
                                                <p>Orientadora: Profa. Dra. Adriana Seixas</p>
                                                <p>Coorientadora: Msc. Janira Prichula</p>
                                            </Col>
                                            <Col
                                                className="order-lg-6 align-self-lg-center"
                                                lg="4"
                                            >
                                                <div className="card-profile-actions py-4 mt-lg-0">
                                                    <Button
                                                        className="float-none"
                                                        color="default"
                                                        href="https://drive.google.com/file/d/1X19LZm_2A4H9rYmEhsV9rPMEI9tfoXxA/view?usp=sharing"
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
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/radar.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    A representação gráfica de resultados é umas das maiores dificuldades durante o desenvolvimento de pesquisas que envolvam análises genômicas, uma vez que o grande volume de dados biológicos resultantes requer tratamento e elaboração de objetos gráficos representativos. A capacidade de tratamento desses dados e de criação de imagens que exponham os resultados de forma didática e atrativa não é algo fácil para os pesquisadores, uma vez que requer conhecimento específico de tecnologia da informação, prática na configuração de ferramentas por meio de interfaces por terminais de linhas de comando ou, ainda, a configuração de parâmetros gravados em arquivos de texto. Diante disso, surge a necessidade de construção de ferramentas de código aberto, que possibilitem a integração de grande quantidade de dados e que sejam capazes de construir visualizações integrativas que reúnam diferentes análises em uma mesma representação gráfica. Nesse sentido, o presente trabalho propõe a elaboração de uma ferramenta que possibilite a construção de representações gráficas para resultados de análise de genomas completos, possibilitando a apresentação e o posicionamento dos elementos de plasticidade nos genomas procariotos em estudo. Acreditamos que este trabalho representa um ganho significativo para os pesquisadores que enfrentam essas dificuldades.
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

export default RomeuTese;