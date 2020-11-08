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

class RomeuModal extends React.Component {
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
                                    <img width='140%' height='140%' src={require("../../../../assets/img/graduation-hat.png")}/>
                                </div>
                                <h4 className="heading mt-4">Trabalho de Conclusão de Curso</h4>
                            </div>
                            <hr/>
                            <p>
                                2019/1– 2019/2: Desenvolvimento de uma ferramenta para visualização posicional dos resultados gerados por plataformas de análise genômica comparativa de procariotos.
                            </p>
                            <p>
                                Orientadora: Profa. Dra. Adriana Seixas <br/>
                                Coorientadora: Dra. Janira Prichula
                            </p>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="py-3">
                            <div className="text-center">
                                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                    <img width='140%' height='140%' src={require("../../../../assets/img/janirococcus.png")}/>
                                </div>
                                <h4 className="heading mt-4">Iniciação Científica</h4>
                            </div>
                            <hr/>
                            <p>
                                2017/2 – Atual: Análise do genoma de <i> Enterococcus </i> spp. e identificação de moléculas bioativas com potencial aplicação biotecnológica na área da saúde.
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

export default RomeuModal;
