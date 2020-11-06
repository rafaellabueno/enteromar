import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import NavbarPaginaInicial from "./Navbars/NavbarPaginaInicial.js";
import CardsFooter from "./Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

class Home extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <NavbarPaginaInicial />
                <main ref="main">
                    <Hero />
                </main>

            </>
        );
    }
}

export default Home;
