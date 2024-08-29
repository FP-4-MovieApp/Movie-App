import axios from "axios";

const key =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzg1N2RhNTFhNjVmNzliYjhlZDg4ZTViN2M2MTMyMyIsInN1YiI6IjY0M2VhZDJiZTBjYTdmMDRiNTA3MmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tduE9_TYmz200NUXNdz3AIIJRy6_HYohCbmLu7sqECM";

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${key}`,
    },
};
export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    options,
});
