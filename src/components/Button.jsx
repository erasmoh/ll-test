import React from "react";
import "./styles/Button.scss";

export default function Button({ url, text }) {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="Button">
            {text}
        </a>
    );
}
