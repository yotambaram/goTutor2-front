import axios from "axios";

//const BASE_URL = "http://localhost:8080"
const BASE_URL = "https://gotutorback.herokuapp.com"

const API = {
    login:function(userData){
        return axios.post(`${BASE_URL}/login`,userData,{withCredentials:true})
    },
    createUser:function(userData){
        return axios.post(`${BASE_URL}/signup`,userData,{withCredentials:true})
    }
  


}
export default API

