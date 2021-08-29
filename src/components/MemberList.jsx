import React from "react";
import { Link } from "react-router-dom";
import Member from "./Member";
import "./styles/MemberList.scss";

export default function MemberList({ members }) {
    return (
        <div className="memberlist">
            {members.map((member, index) => (
                <Link to={`/${member.id}`} key={index}>
                    <Member member={member} />
                </Link>
            ))}
        </div>
    );
}
