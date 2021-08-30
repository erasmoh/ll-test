import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/MemberList.scss";
import MemberCard from "./MemberCard";

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
                        className="field"
                        value={query}
                        placeholder="Type to search by name, lastname, gender and party"
                        onChange={({ target }) => {
                            setQuery(target.value);
                        }}
                    />
                </div>
                {/* <div className="memberList__search-advanced">
                    <button>Advanced Search</button>
                </div> */}
            </div>
            {filteredMembers.length === 0 ? (
                <React.Fragment>
                    <h3>No members found</h3>
                    <p>Try typing a different keywork</p>
                </React.Fragment>
            ) : (
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
            )}
        </div>
    );
}
