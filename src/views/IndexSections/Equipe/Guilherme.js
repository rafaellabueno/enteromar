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
import GuilhermeModal from "./Modals/LuisEduardoModal";

class Guilherme extends React.Component {
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
                                            src={require("../../../assets/img/equipe/guilherme.jpg")}
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col className="order-lg-6" lg="6">
                                <div className="text-center mt-5">
                                    <h3>
                                        Guilherme Raffo Wachholz{" "}
                                        <div className="card-profile-actions mt-lg-0">
                                            <Button
                                                className="nav-link-icon"
                                                href="http://lattes.cnpq.br/0255180981532245"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/lattes.png")}/>
                                                </div>
                                                <span className="nav-link-inner--text d-lg-none ml-2">
                                                    Lattes
                                                </span>
                                            </Button>
                                            <Button
                                                className="nav-link-icon"
                                                href="https://www.researchgate.net/profile/Guilherme_Wachholz"
                                                color="default"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/researchgate-logo.png")}/>
                                                </div>
                                                <span className="nav-link-inner--text d-lg-none ml-2">
                                                    ResearchGate
                                                </span>
                                            </Button>
                                            <GuilhermeModal/>
                                        </div>
                                    </h3>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Graduando em Psicologia
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

export default Guilherme;