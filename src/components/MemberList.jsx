import React, { useState } from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";
import "./styles/MemberList.scss";

export default function MemberList({ members }) {
    const [query, setQuery] = useState("");
    const filteredMembers = members.filter((member) => {
        return `${member.first_name} ${member.last_name} ${member.party} ${member.gender}`
            .toLowerCase()
            .includes(query.toLowerCase());
    });
    return (
        <div className="memberList">
            <div className="memberList__search">
                <div className="memberList__search-basic">
                    <label>Filter Members</label>
                    <input
                        type="text"
                        value={query}
                        onChange={({ target }) => {
                            setQuery(target.value);
                        }}
                    />
                </div>
                <div className="memberList__search-advanced">
                    <button>Advanced Search</button>
                </div>
            </div>
            <div className="memberList__list">
                {filteredMembers.map((member, index) => (
                    <Link
                        to={`/${member.id}`}
                        key={index}
                        className="memberCard"
                    >
                        <MemberCard member={member} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
