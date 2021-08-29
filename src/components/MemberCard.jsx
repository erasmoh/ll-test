import React from "react";
import "./styles/MemberCard.scss";

function MemberCard({ member }) {
    return (
        <React.Fragment>
            <div className="memberCard__party">{member.party}</div>
            <div className="memberCard__name">{`${member.last_name}, ${member.first_name}`}</div>
            <div className="memberCard__title">{member.title}</div>
        </React.Fragment>
    );
}

export default MemberCard;
