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
import RafaellaModal from "./Modals/RafaellaModal";

class Rafaella extends React.Component {
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
                <CardBody style={{marginBottom: "50px"}}>
                    <div className="px-1">
                        <Row className="justify-content-center">
                            <Col className="order-lg-6" lg="6">
                                <div className="card-profile-image" style={{marginLeft: "-50px"}}>
                                    <a href="#" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="rounded-circle"
                                            src={require("../../../assets/img/equipe/rafaella.jpeg")}
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col className="order-lg-6" lg="6">
                                <div className="text-center mt-5">
                                    <h3>
                                        <div style={{marginTop: "-50px"}}>
                                        Rafaella Bueno{" "}
                                        </div>
                                        <div className="card-profile-actions mt-lg-0" style={{marginTop: "200px"}}>
                                            <Button
                                                className="nav-link-icon"
                                                href="https://github.com/rafaellabueno"
                                                id="tooltip112445449"
                                                target="_blank"
                                            >
                                                <i className="fa fa-github" />
                                            </Button>
                                            <Button
                                                className="nav-link-icon"
                                                href="http://lattes.cnpq.br/7130559873038676"
                                                target="_blank"
                                                color="default"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/lattes.png")}/>
                                                </div>
                                            </Button>
                                            <Button
                                                className="nav-link-icon"
                                                href="https://www.researchgate.net/profile/Rafaella_Bueno"
                                                color="default"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/researchgate-logo.png")}/>
                                                </div>
                                            </Button>
                                            <RafaellaModal/>
                                        </div>
                                    </h3>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Graduanda em Informática Biomédica
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

export default Rafaella;