import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col
} from "reactstrap";
import TiagoModal from "./Modals/TiagoModal";

class Tiago extends React.Component {
    state = {
        iconTabs: 1,
        plainTabs: 1
    };
    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };
    render() {
        return (
            <Card className="card-profile shadow mt--3">
                <CardBody>
                    <div className="px-1">
                        <Row className="justify-content-center">
                            <Col className="order-lg-6" lg="6">
                                <div className="card-profile-image">
                                    <a href="#" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="rounded-circle"
                                            src={require("../../../assets/img/equipe/tiago.jpg")}
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col className="order-lg-6" lg="6">
                                <div className="text-center mt-5">
                                    <h3>
                                        Tiago de Oliveira Gonçalves{" "}
                                        <div className="card-profile-actions mt-lg-0">
                                            <Button
                                                className="nav-link-icon"
                                                href="https://github.com/tiagoogk"
                                                id="tooltip112445449"
                                                target="_blank"
                                            >
                                                <i className="fa fa-github" />
                                                <span className="nav-link-inner--text d-lg-none ml-2">
                                                    Github
                                                </span>
                                            </Button>
                                            <Button
                                                className="nav-link-icon"
                                                href="http://lattes.cnpq.br/1983543317306812"
                                                target="_blank"
                                                color="default"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/lattes.png")}/>
                                                </div>
                                                <span className="nav-link-inner--text d-lg-none ml-2">
                                                    Lattes
                                                </span>
                                            </Button>
                                            <TiagoModal/>
                                        </div>
                                    </h3>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Graduando em Informática Biomédica
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2" />
                                        Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default Tiago;