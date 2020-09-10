import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import Navbar from "./Navbars/Navbar.js";
import CardsFooter from "./Footers/CardsFooter.js";

// index page sections
import Tabs from "./IndexSections/Tabs.js";

class Sobre extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Navbar />
                <main className="profile-page" ref="main">
                        <Container>
                            <Tabs variant="fullWidth" />
                        </Container>
                </main>
                <CardsFooter />
            </>
        );
    }
}

export default Sobre;
