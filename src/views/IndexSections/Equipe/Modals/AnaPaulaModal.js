import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col
} from "reactstrap";

class AnaPaulaModal extends React.Component {
    state = {};
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>

                <Button
                    className="mb-1"
                    type="button"
                    onClick={() => this.toggleModal("notificationModal")}
                >
                    <i className="fa fa-graduation-cap" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                                Pesquisadora
                            </span>
                </Button>
                <Modal
                    className="modal-dialog-centered modal-default"
                    contentClassName="bg-gradient-default"
                    isOpen={this.state.notificationModal}
                    toggle={() => this.toggleModal("notificationModal")}
                >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-notification">
                            Projetos
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
                                    <img width='120%' height='120%' src={require("../../../../assets/img/enteromarpng.png")}/>
                                </div>
                                <p className=" mt-4">Pesquisadora</p>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="py-3">
                            <div className="text-center">
                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                    <img width='140%' height='140%' src={require("../../../../assets/img/bacteria.png")}/>
                                </div>
                                <h4 className="heading mt-4">Orientadora de Doutorado</h4>
                            </div>
                            <hr/>
                            <p>
                                2012/1– 2016/1: ALINE WEBER MEDEIROS <br/>
                                Projeto:  Análise da comunidade bacteriana de animais marinhos recolhidos do Litoral Norte do Rio Grande do Sul
                            </p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="py-3">
                            <div className="text-center">
                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                    <img width='140%' height='140%' src={require("../../../../assets/img/janirococcus.png")}/>
                                </div>
                                <h4 className="heading mt-4">Coorientadora de Doutorado</h4>
                            </div>
                            <hr/>
                            <p>
                                2016/1– 2020/1: JANIRA PRICHULA<br/>
                                Projeto: <i> Enterococcus </i> spp. associados a animais marinhos selvagens: genômica comparativa, filogenômica e identificação de moléculas bioativas com potencial aplicação biotecnológica.
                            </p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="py-3">
                            <div className="text-center">
                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                    <img width='140%' height='140%' src={require("../../../../assets/img/janirococcus.png")}/>
                                </div>
                                <h4 className="heading mt-4">Orientadora de Mestrado</h4>
                            </div>
                            <hr/>
                            <p>
                                2012/2– 2014/2: NAIARA AGUIAR SANTESTEVAN<br/>
                                Projeto: Isolamento e avaliação de <i> Enterococcus </i> spp. obtidos de amostras fecais de lobos-marinhos (OTARIIDAE: <i> Arctocephalus </i> spp.) encontrados no Litoral Norte do Rio Grande do Sul, Brasil.
                            </p>
                            <p>
                                2013/1– 2015/1: JANIRA PRICHULA<br/>
                                Projeto: Caracterização fenotípica e genotípica de <i> Enterococcus </i> spp. isolados de amostras fecais de pinguins-de-magalhães (Spheniscus magellanicus) encontrados no Litoral Norte do Rio Grande do Sul, Brasil.
                            </p>
                            <p>
                                2014/1– 2016/1: REBECA INHOQUE PEREIRA<br/>
                                Projeto: Diversidade genética e fatores de virulência de <i> Enterococcus </i> spp. isolados de amostras fecais de tartarugas marinhas recuperadas no Litoral Norte do Rio Grande do Sul, Brasil.
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
            </>
        );
    }
}

export default AnaPaulaModal;