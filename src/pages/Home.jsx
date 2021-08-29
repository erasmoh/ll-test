import React, { useState, useEffect } from "react";
import MemberList from "../components/MemberList";
import api from "../lib/api";

export default function HomePage() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        api.members
            .listMembers()
            .then((res) => {
                let listOfMembers = res.data.results[0].members;
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
        <div className="App">
            <MemberList members={data} />
        </div>
    );
}
