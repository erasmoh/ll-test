import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/MemberDetails.scss";
import api from "../lib/api";

export default function MemberDetails() {
    const [member, setMember] = useState([]);
    const [loading, setLoading] = useState(true);
    const { memberId } = useParams();

    const fetchData = () => {
        api.members
            .readMember(memberId)
            .then((res) => {
                let memberInfo = res.data.results[0];
                setMember(memberInfo);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="memberDetails">
            {loading && <p>Cargando...</p>}
            <div className="memberDetails-name">{`${member.last_name}, ${member.first_name}`}</div>
            <ul>
                {!loading &&
                    member.roles.map((role, index) => (
                        <li className="memberDetails-title" key={index}>
                            {role.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
