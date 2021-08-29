import React, { useState, useEffect } from "react";
import api from "../lib/api";
import Member from "./Member";

export default function MemberList() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        api.members
            .listMembers()
            .then((res) => {
                // console.log(res);
                let listOfMembers = res.data.results[0].members;
                console.log(res.data.results[0].members);
                setData(listOfMembers);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="memberlist">
            {data.map((member, index) => (
                <Member member={member.id} key={index} />
            ))}
            ;
        </div>
    );
}
