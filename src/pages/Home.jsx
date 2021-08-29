import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MemberList from "../components/MemberList";

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <MemberList />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
