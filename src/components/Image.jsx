import React from "react";
import './styles/Image.scss';

export default function Image({member, size}) {
    return (
        <img
            src={`https://theunitedstates.io/images/congress/${size}/${member.id}.jpg`}
            alt={`${member.first_name} ${member.last_name}`}
        />
    );
}
