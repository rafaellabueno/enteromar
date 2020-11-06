import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components
import Navbar from "./../../Navbars/Navbar.js";
import CardsFooter from "./../../Footers/CardsFooter.js";

class IcaroTese extends React.Component {
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

                                                        src={require("../../../assets/img/teses/tese_icaro.png")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="mt-5 py-5 border-top">
                                        <Row className="justify-content-center text-center">
                                            <Col lg="10">
                                                <h4>
                                                    <b>Uma plataforma para caracterização genômica de bactérias do gênero <i>Enterococcus</i> spp.</b><br/>
                                                </h4>
                                                <p>Ícaro Maia Santos de Castro</p>
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
                                                        href="https://drive.google.com/file/d/1FmN_l7DiFgllthFPpH-IVp-XZXFs72a2/view?usp=sharing"
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
                                                                        <img width='140%' height='140%' src={require("../../../assets/img/data.png")}/>
                                                                    </div>
                                                                    <h4 className="heading mt-4">Resumo</h4>
                                                                </div>
                                                                <hr/>
                                                                <p>
                                                                    Com a crescente demanda por análises de dados genômicos, plataformas de bioinformática com pipelines robustos e escaláveis são essenciais para facilitar o trabalho dos pesquisadores auxiliando na automação de tarefas e reprodutibilidade dos dados. Apresentamos neste trabalho a ferramenta JAMIRA, um pipeline reprodutível e escalável para análise de dados genômicos de procariotos projetado para o gênero bacteriano <i> Enterococcus </i> spp. O software combina a predição de elementos genéticos móveis e a identificação de genes de resistência e virulência que podem estar associados à adaptação de bactérias comensais e clínicas. Portanto, este pipeline pode contribuir para automatizar várias tarefas de análise de dados realizadas em estudos comparativos de genoma completo, bem como elucidar mecanismos biológicos de enterococos associados a riscos para a saúde pública.
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

export default IcaroTese;