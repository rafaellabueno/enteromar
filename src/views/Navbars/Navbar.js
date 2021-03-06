import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-horizontal navbar-dark bg-default"
                        expand="lg"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/home" tag={Link}>
                                <img
                                    alt="..."
                                    src={require("../../assets/img/enteromarlogo.png")}
                                />
                            </NavbarBrand>

                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("../../assets/img/enteromar.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <NavItem>
                                        <NavLink to="/sobre" tag={Link}>
                                            Sobre <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1" />
                                            <span className="nav-link-inner--text">Projetos</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/projetos" tag={Link}
                                                >
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-bullet-list-67" />
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Todos os Projetos
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Projetos de iniciação científica desenvolvidos pelo grupo ENTEROMAR
                                                        </p>
                                                    </Media>
                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/jamira" tag={Link}
                                                >
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <img width='140%' height='140%' src={require("../../assets/img/logojamirabranco.png")}/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            JAMIRA
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Uma plataforma para caracterização genômica de cepas de Enterococcus spp.
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>
                                        <NavLink to="/publicacoes" tag={Link}>
                                            Publicações <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/teses-dissertacoes" tag={Link}>
                                            Teses e Dissertações <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/design" tag={Link}>
                                            Design <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/enteromargroup/"
                                            id="tooltip356693867"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://github.com/enteromar"
                                            id="tooltip112445449"
                                            target="_blank"
                                        >
                                            <i className="fa fa-github" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip112445449">
                                            Github
                                        </UncontrolledTooltip>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;