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

class GuilhermeModal extends React.Component {
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
                                <i className="fa fa-graduation-cap  fa-3x" />
                                <h4 className="heading mt-4">Iniciação Científica</h4>
                            </div>
                            <hr/>
                            <p>
                                2013/1– 2015/2: Caracterização fenotípica e genotípica de <i> Enterococcus </i> spp. isolados de amostras fecais de pinguins-de-magalhães (Spheniscus magellanicus) encontrados no Litoral Norte do Rio Grande do Sul, Brasil.
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

export default GuilhermeModal;