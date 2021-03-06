import axios from "axios";

const apiCall = axios.create({
    baseURL: "https://api.propublica.org/congress/v1",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": "6GsaEwxl1S4gE4qdv9qmBGOHscuYxyYCespnIAGr",
    },
});

const api = {
    members: {
        listMembers() {
            return apiCall("/116/senate/members.json");
        },
        readMember(memberId) {
            return apiCall(`/members/${memberId}.json`);
        },
    },
};

export default api;
