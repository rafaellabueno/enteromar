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

class RafaellaModal extends React.Component {
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
                                            <img width='140%' height='140%' src={require("../../../../assets/img/logojamirabranco.png")}/>
                                        </div>
                                    <h4 className="heading mt-4">Iniciação Científica</h4>
                                    </div>
                                    <p>
                                        <hr/>
                                        2020/1 - 2020/2: Uma plataforma para caracterização genômica de cepas de <i> Enterococcus </i> spp.
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

export default RafaellaModal;
