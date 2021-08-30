import React from "react";
import "./styles/MemberCard.scss";
import Image from './Image';

function MemberCard({ member }) {
    return (
        <React.Fragment>
            <div className="memberCard__img">
                <Image member={member} size="225x275"/>
            </div>
            <div className="memberCard__party">{member.party}</div>
            <div className="memberCard__name">{`${member.last_name}, ${member.first_name}`}</div>
            <div className="memberCard__title">{member.title}</div>
        </React.Fragment>
    );
}

export default MemberCard;
