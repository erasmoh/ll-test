import React, { useState, useEffect } from "react";
import MemberList from "../components/MemberList";
import Loader from "../components/Loader";
import api from "../lib/api";

export default function HomePage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        api.members
            .listMembers()
            .then((res) => {
                let listOfMembers = res.data.results[0].members;
                setData(listOfMembers);
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
        <div className="App">
            {loading ? <Loader /> : <MemberList members={data} />}
        </div>
    );
}
