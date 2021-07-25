import axios from "axios";

const api =  axios.create({
    baseURL: "https://testeforlinkapi.pipedrive.com/v1/deals"
})

export {api};