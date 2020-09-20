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

class AdrianaModal extends React.Component {
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
                        Projetos
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
                                    <img width='140%' height='140%' src={require("../../../../assets/img/janirococcus.png")}/>
                                </div>
                                <h4 className="heading mt-4">Orientadora de Doutorado</h4>
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
                                    <img width='140%' height='140%' src={require("../../../../assets/img/graduation-hat.png")}/>
                                </div>
                                <h4 className="heading mt-4">Orientadora de Trabalho de Conclusão de Curso</h4>
                            </div>
                            <hr/>
                            <p>
                                2019/1– 2019/2: ROMEU CARLOS ZIMMER DA LUZ <br/>
                                Projeto: Desenvolvimento de uma ferramenta para visualização posicional dos resultados gerados por plataformas de análise genômica comparativa de procariotos.
                            </p>
                            <p>
                                2019/1– 2019/2: ÍCARO MAIA SANTOS DE CASTRO <br/>
                                Projeto: Uma plataforma para caracterização genômica de bactérias do gênero <i> Enterococcus </i> spp.
                            </p>
                            <p>
                                2019/1– 2020/2: TIAGO DE OLIVEIRA GONÇALVES <br/>
                                Projeto: Desenvolvimento de um pipeline para caracterização funcional de proteínas hipotéticas.
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

export default AdrianaModal;
