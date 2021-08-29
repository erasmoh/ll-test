import React, { Component } from "react";
import "./styles/Footer.scss";

class Footer extends Component {
    render() {
        return <div className="member">{this.props.member}</div>;
    }
}

export default Footer;
