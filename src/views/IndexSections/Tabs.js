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
import Adriana from "./Equipe/Adriana.js";
import Aline from "./Equipe/Aline.js";
import AnaPaula from "./Equipe/AnaPaula.js";
import Dejoara from "./Equipe/Dejoara.js";
import Guilherme from "./Equipe/Guilherme.js";
import Icaro from "./Equipe/Icaro";
import Janira from "./Equipe/Janira.js";
import Leonardo from "./Equipe/Leonardo.js";
import LuisEduardo from "./Equipe/LuisEduardo.js";
import Meiski from "./Equipe/Meiski";
import Naiara from "./Equipe/Naiara.js";
import Rafaella from "./Equipe/Rafaella.js";
import Rebeca from "./Equipe/Rebeca";
import Robson from "./Equipe/Robson";
import Romeu from "./Equipe/Romeu";
import Tiago from "./Equipe/Tiago";

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
                        <Adriana/>
                        <Aline />
                        <AnaPaula/>
                        <Dejoara/>
                        <Guilherme/>
                        <Icaro/>
                        <Janira/>
                        <Leonardo/>
                        <LuisEduardo/>
                        <Meiski/>
                        <Naiara/>
                        <Rafaella />
                        <Rebeca/>
                        <Robson/>
                        <Romeu/>
                        <Tiago/>
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
