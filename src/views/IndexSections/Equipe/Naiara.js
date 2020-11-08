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
import NaiaraModal from "./Modals/NaiaraModal";

class Naiara extends React.Component {
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
                                <div className="card-profile-image" style={{marginLeft: "-50px"}}>
                                    <a href="#" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="rounded-circle"
                                            src={require("../../../assets/img/equipe/naiara.jpg")}
                                        />
                                    </a>
                                </div>
                            </Col>
                            <Col className="order-lg-6" lg="6">
                                <div className="text-center mt-5">
                                    <h3>
                                        <div style={{marginTop: "-50px"}}>
                                        Naiara Santestevan{" "}
                                        </div>
                                        <div className="card-profile-actions mt-lg-0" style={{marginTop: "200px"}}>
                                            <Button
                                                className="nav-link-icon"
                                                href="http://lattes.cnpq.br/6886687135405449"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/lattes.png")}/>
                                                </div>
                                            </Button>
                                            <Button
                                                className="nav-link-icon"
                                                href="https://www.researchgate.net/profile/Naiara_Santestevan"
                                                color="default"
                                                target="_blank"
                                            >
                                                <div className="icon icon-shape-2 icon-sm  rounded-circle text-white">
                                                    <img width='80%' height='80%' src={require("../../../assets/img/researchgate-logo.png")}/>
                                                </div>
                                            </Button>
                                            <NaiaraModal/>
                                        </div>
                                    </h3>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Graduada em Licenciatura em Ciências Biológicas pela Universidade Federal do Rio Grande do Sul (UFRGS)
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2" />
                                        Mestre em Microbiologia Agrícola e do Ambiente pela Universidade Federal do Rio Grande do Sul (UFRGS)
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

export default Naiara;