import React from "react";
import "./styles/Member.scss";

function Member(props) {
    const member = props.member;

    return (
        <div className="memberCard">
            <div className="memberCard-name">{`${member.last_name}, ${member.first_name}`}</div>
            <div className="memberCard-title">{member.title}</div>
        </div>
    );
}

export default Member;
