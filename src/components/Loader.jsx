import React from "react";
import "./styles/Loader.scss";

export default function Loader() {
    return (
        <div className="Loader">
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}
