import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles/MemberDetails.scss";
import api from "../lib/api";
import Loader from "../components/Loader";
import Image from "../components/Image";
import Button from "../components/Button";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            {loading ? (
                <Loader />
            ) : (
                <div className="memberDetails">
                    <Link to="/" className="Button">
                        Back
                    </Link>
                    <div className="memberDetails-box">
                        <div className="memberDetails-name">{`${member.last_name}, ${member.first_name} (${member.current_party})`}</div>
                        <div className="memberDetails-dob">Date of Birth: {member.date_of_birth}</div>
                        {member.url && (
                            // <div>
                                <Button text="Visit website" url={member.url} />
                            // </div>
                        )}
                        <h4>Social Media</h4>
                        {member.twitter_account !== null && (
                            <Button
                                text="Twitter"
                                url={`https://twitter.com/${member.twitter_account}`}
                            />
                        )}
                        {member.facebook_account !== null && (
                            <Button
                                text="Facebook"
                                url={`https://facebook.com/${member.facebook_account}`}
                            />
                        )}
                        {member.youtube_account !== null && (
                            <Button
                                text="Youtube"
                                url={`https://youtube.com/user/${member.youtube_account}`}
                            />
                        )}
                        <h4>Roles:</h4>
                        <ul>
                            {!loading &&
                                member.roles.map((role, index) => (
                                    <li
                                        className="memberDetails-title"
                                        key={index}
                                    >
                                        <b>{role.title}</b>- Period: (
                                        {role.start_date} - {role.end_date})
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="memberDetails-img">
                        <Image member={member} size="450x550" />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
