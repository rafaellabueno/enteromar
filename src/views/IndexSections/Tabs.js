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
import Carousel from "./Carousel";

class TabsSection extends React.Component {
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
      <>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-institution mr-2" />
                    Sobre
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="fa fa-users mr-2" />
                    Equipe
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                      ~ENTEROMAR história~
                    </p>
                      <Carousel/>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
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
                                                    src={require("../../assets/img/equipe/rafaella.jpeg")}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-6" lg="6">
                                        <div className="text-center mt-5">
                                            <h3>
                                                Rafaella Bueno{" "}
                                                <div className="card-profile-actions py-4 mt-lg-0">
                                                    <Button
                                                        className="nav-link-icon"
                                                        href="https://github.com/rafaellabueno"
                                                        id="tooltip112445449"
                                                        target="_blank"
                                                    >
                                                        <i className="fa fa-github" />
                                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                                    Github
                                                </span>
                                                    </Button>
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
                                                        src={require("../../assets/img/equipe/rafaella.jpeg")}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-6" lg="6">
                                            <div className="text-center mt-5">
                                                <h3>
                                                    Rafaella Bueno{" "}
                                                    <div className="card-profile-actions py-4 mt-lg-0">
                                                        <Button
                                                            className="nav-link-icon"
                                                            href="https://github.com/rafaellabueno"
                                                            id="tooltip112445449"
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-github" />
                                                            <span className="nav-link-inner--text d-lg-none ml-2">
                                                    Github
                                                </span>
                                                        </Button>
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
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
